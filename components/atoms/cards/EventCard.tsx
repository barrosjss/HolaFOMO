'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Event, OrganizerEventCardProps } from '@/components/types/event.types';

const statusColors = {
  'Próximo': 'bg-blue-100 text-blue-800',
  'Finalizado': 'bg-gray-100 text-gray-800',
  'Agotado': 'bg-red-100 text-red-800',
  'Cancelado': 'bg-yellow-100 text-yellow-800',
} as const;

export function EventCard({ event, showDateHeader = false, dateHeader }: OrganizerEventCardProps) {
  const { startDate, endDate, location, status, isFree } = event;
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      {showDateHeader && dateHeader && (
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
          <span className="text-sm font-medium text-gray-500">{dateHeader}</span>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex space-x-4">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                <Link href={`/eventos/${event.slug}`} className="hover:text-primary">
                  {event.title}
                </Link>
              </h3>
              <Badge className={statusColors[status]}>{status}</Badge>
            </div>
            
            <div className="mt-1.5 space-y-1 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                <span>{new Date(startDate.date).toLocaleDateString('es-ES', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short'
                })}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                <span>{startDate.time} - {endDate.time}</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 mt-0.5 mr-1.5 text-gray-400 flex-shrink-0" />
                <span className="line-clamp-1">
                  {location.isOnline ? 'Evento en línea' : `${location.name}, ${location.city}`}
                </span>
              </div>
            </div>
            
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">
                {isFree ? 'Gratis' : `$${Math.min(...event.tickets.map(t => t.price)).toFixed(2)}`}
              </span>
              <Link 
                href={`/eventos/${event.slug}`}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para agrupar eventos por fecha
export function EventGroup({ date, events }: { date: string; events: Event[] }) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 px-4 py-2 rounded-md">
        <h3 className="text-sm font-medium text-gray-700">
          {new Date(date).toLocaleDateString('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </h3>
      </div>
      
      <div className="space-y-4">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
          />
        ))}
      </div>
    </div>
  );
}
