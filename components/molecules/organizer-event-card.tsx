// components/organizer-event-card.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface OrganizerEventCardProps {
  event: {
    id: string
    title: string
    date: string
    time: string
    endTime?: string
    location: string
    image: string
    status: 'Próximo' | 'Finalizado' | 'Agotado' | 'Últimos cupos' | 'Gratis' | 'Presencial' | 'Online'
    price?: string | number
    organizerName: string
  }
  showDateHeader?: boolean
  dateHeader?: string
}

const statusColors = {
  'Próximo': 'bg-blue-100 text-blue-800',
  'Finalizado': 'bg-gray-100 text-gray-800',
  'Agotado': 'bg-red-100 text-red-800',
  'Últimos cupos': 'bg-amber-100 text-amber-800',
  'Gratis': 'bg-green-100 text-green-800',
  'Presencial': 'bg-purple-100 text-purple-800',
  'Online': 'bg-cyan-100 text-cyan-800',
}

export function OrganizerEventCard({ 
  event, 
  showDateHeader = false,
  dateHeader 
}: OrganizerEventCardProps) {
  return (
    <div className="space-y-4">
      {showDateHeader && dateHeader && (
        <div className="flex items-center py-2">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="px-4 text-sm font-medium text-gray-500">{dateHeader}</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
      )}
      
      <Link href={`/eventos/${event.id}`} className="block group relative">
        <div className="absolute top-3 right-3 z-10">
          <Badge className={`${statusColors[event.status] || 'bg-gray-100 text-gray-800'} text-xs`}>
            {event.status}
          </Badge>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
          {/* Imagen del evento - Siempre cuadrada */}
          <div className="relative w-full sm:w-32 h-32 sm:h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          
          {/* Información del evento */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#F95F2E] transition-colors">
                {event.title}
              </h3>
              
              {/* Fecha y hora */}
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
                <span>{event.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
                <span>{event.time} {event.endTime && `- ${event.endTime}`}</span>
              </div>
              
              {/* Ubicación */}
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
                <span className="truncate">{event.location}</span>
              </div>
              
              {/* Precio */}
              {event.price && (
                <div className="mt-1">
                  <span className="text-sm font-medium text-gray-900">
                    {typeof event.price === 'number' ? `$${event.price.toLocaleString()}` : event.price}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

// Componente para agrupar eventos por fecha
export function EventGroup({ date, events }: { date: string; events: OrganizerEventCardProps['event'][] }) {
  if (!events.length) return null
  
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <OrganizerEventCard 
          key={event.id} 
          event={event} 
          showDateHeader={index === 0}
          dateHeader={date}
        />
      ))}
    </div>
  )
}