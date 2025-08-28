"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, Clock, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { EventList } from "@/components/organisms/event/EventList";

export default function EventsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Mis Eventos</h1>
          <Button onClick={() => router.push('/dashboard/events/new')}>
            <Plus className="mr-2 h-4 w-4" />
            Crear evento
          </Button>
        </div>
        <p className="text-muted-foreground">
          Administra y da seguimiento a todos tus eventos
        </p>
      </div>

      <Tabs 
        defaultValue="active" 
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="active" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Activos</span>
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Próximos</span>
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Pasados</span>
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="active">
            <EventList status="active" />
          </TabsContent>
          <TabsContent value="upcoming">
            <EventList status="upcoming" />
          </TabsContent>
          <TabsContent value="past">
            <EventList status="past" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
