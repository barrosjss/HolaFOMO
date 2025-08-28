"use client";

import { Clock, ArrowRight, Ticket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Event } from "@/types/event.types";

interface HistoryModuleProps {
  events: Event[];
  className?: string;
}

export function HistoryModule({ events, className = "" }: HistoryModuleProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };

  if (events.length === 0) return null;

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#F95F2E]" />
            <span>Historial reciente</span>
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-[#F95F2E] hover:bg-[#F95F2E]/10">
            Ver todo
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.slice(0, 3).map((event) => (
          <div key={event.id} className="flex items-start gap-3 group">
            <div className="bg-gray-100 rounded-lg p-2">
              <Ticket className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm line-clamp-1">{event.title}</h4>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <span>{formatDate(event.date)}</span>
                {event.rating && (
                  <span className="flex items-center ml-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                    {event.rating.toFixed(1)}
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
