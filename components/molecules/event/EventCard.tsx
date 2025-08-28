"use client";

import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, MapPin, Users, MoreVertical, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type EventStatus = "active" | "upcoming" | "past";

interface EventCardProps {
  id: string;
  title: string;
  date: Date;
  location: string;
  attendees: number;
  capacity: number;
  status: EventStatus;
  onViewDetails?: () => void;
  onEdit?: () => void;
}

export function EventCard({
  id,
  title,
  date,
  location,
  attendees,
  capacity,
  status,
  onViewDetails,
  onEdit,
}: EventCardProps) {
  const formattedDate = format(date, "PPP", { locale: es });
  const formattedTime = format(date, "h:mm a", { locale: es });
  const progress = Math.round((attendees / capacity) * 100);
  
  const getStatusVariant = () => {
    switch (status) {
      case "active":
        return "default";
      case "upcoming":
        return "outline";
      case "past":
        return "secondary";
      default:
        return "default";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "En curso";
      case "upcoming":
        return "Próximo";
      case "past":
        return "Finalizado";
      default:
        return "";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {title}
            </CardTitle>
            <Badge variant={getStatusVariant()} className="mt-2">
              {getStatusText()}
            </Badge>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Más opciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onEdit}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Editar evento</span>
              </DropdownMenuItem>
              {/* Add more menu items as needed */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{formattedTime}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Asistentes</span>
            <span className="font-medium">
              {attendees} / {capacity}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={onViewDetails}>
          Ver detalles
        </Button>
        <Button size="sm" className="bg-[#F95F2E] hover:bg-[#E84F1D]">
          Gestionar
        </Button>
      </CardFooter>
    </Card>
  );
}
