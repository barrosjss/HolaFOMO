"use client";

import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, MapPin, Ticket, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type TicketStatus = "upcoming" | "past" | "cancelled";

interface TicketCardProps {
  id: string;
  eventTitle: string;
  eventDate: Date;
  eventLocation: string;
  ticketType: string;
  ticketNumber: string;
  qrCode: string;
  status: TicketStatus;
}

export function TicketCard({
  id,
  eventTitle,
  eventDate,
  eventLocation,
  ticketType,
  ticketNumber,
  qrCode,
  status,
}: TicketCardProps) {
  const formattedDate = format(eventDate, "PPP", { locale: es });
  const formattedTime = format(eventDate, "h:mm a", { locale: es });
  
  const getStatusVariant = () => {
    switch (status) {
      case "upcoming":
        return "default";
      case "past":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "upcoming":
        return "Próximo";
      case "past":
        return "Asistido";
      case "cancelled":
        return "Cancelado";
      default:
        return "";
    }
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log(`Downloading ticket ${ticketNumber}`);
  };

  const handleShare = () => {
    // Implement share functionality
    console.log(`Sharing ticket ${ticketNumber}`);
  };

  return (
    <Card className="overflow-hidden border-l-4 border-[#F95F2E]">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{eventTitle}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Ticket className="h-4 w-4 mr-1" />
              {ticketNumber} • {ticketType}
            </CardDescription>
          </div>
          <Badge variant={getStatusVariant()}>
            {getStatusText()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{formattedTime}</span>
        </div>
        <div className="flex items-start space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{eventLocation}</span>
        </div>
        
        {status === "upcoming" && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tiempo restante</span>
              <span className="font-medium">
                {Math.ceil((eventDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))} días
              </span>
            </div>
            <Progress 
              value={Math.max(0, 100 - ((eventDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30) * 100))} 
              className="h-2" 
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 className="h-4 w-4 mr-2" />
          Compartir
        </Button>
        <Button size="sm" onClick={handleDownload} className="bg-[#F95F2E] hover:bg-[#E84F1D]">
          <Download className="h-4 w-4 mr-2" />
          Descargar
        </Button>
      </CardFooter>
    </Card>
  );
}
