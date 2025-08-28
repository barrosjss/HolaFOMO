"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Ticket, Clock, CheckCircle, XCircle, Download } from "lucide-react";
import { TicketList } from "@/components/organisms/ticket/TicketList";

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mis Entradas</h1>
        <p className="text-muted-foreground">
          Gestiona y descarga tus entradas para los eventos
        </p>
      </div>

      <Tabs 
        defaultValue="upcoming" 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Próximas</span>
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>Pasadas</span>
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            <span>Canceladas</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="upcoming">
            <TicketList status="upcoming" />
          </TabsContent>
          <TabsContent value="past">
            <TicketList status="past" />
          </TabsContent>
          <TabsContent value="cancelled">
            <TicketList status="cancelled" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
