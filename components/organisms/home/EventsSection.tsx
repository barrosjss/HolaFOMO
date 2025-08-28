"use client"

import { EventCard } from "@/components/molecules/event-card"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { EventCardProps } from "@/components/types/events.types"

// Mock data for events
const nearbyEvents: EventCardProps[] = [
  {
    id: '1',
    title: 'Concierto en el Parque',
    date: '15 Sep 2024',
    city: 'Bogotá',
    venue: 'Parque Simón Bolívar',
    image: '/placeholder.svg',
    price: 'Gratis',
    isFree: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    title: 'Feria Gastronómica',
    date: '20 Sep 2024',
    city: 'Medellín',
    venue: 'Plaza Botero',
    image: '/placeholder.svg',
    price: 'COP 25,000',
    rating: 4.7,
    reviewCount: 215
  }
];

const onlineEvents: EventCardProps[] = [
  {
    id: '3',
    title: 'Clase de Cocina Online',
    date: '10 Sep 2024',
    city: 'Online',
    venue: 'Zoom',
    image: '/placeholder.svg',
    price: 'COP 50,000',
    isOnline: true,
    rating: 4.8,
    reviewCount: 312
  }
];

const recommendedEvents: EventCardProps[] = [
  {
    id: '4',
    title: 'Tour Gastronómico',
    date: '30 Sep 2024',
    city: 'Cartagena',
    venue: 'Centro Histórico',
    image: '/placeholder.svg',
    price: 'COP 120,000',
    rating: 4.9,
    reviewCount: 456
  }
];

interface EventCarouselProps {
  title: string;
  events: EventCardProps[];
}

function EventCarousel({ title, events }: EventCarouselProps) {
  return (
    <section className="space-y-4 -mx-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Button variant="ghost" className="flex items-center space-x-1 text-[#F95F2E] hover:text-[#F95F2E]/80">
          <span className="text-sm">Ver todos</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex space-x-4 pb-1">
          {events.map((event) => {
            // Ensure all required fields have default values
            const eventWithDefaults: EventCardProps = {
              id: event.id,
              title: event.title || 'Evento sin título',
              date: event.date || '',
              city: event.city || '',
              venue: event.venue || '',
              image: event.image || '/placeholder.svg',
              price: event.price || 'Gratis',
              rating: event.rating,
              reviewCount: event.reviewCount,
              isFree: event.isFree,
              isOnline: event.isOnline,
              dateRange: event.dateRange
            };
            return (
              <div key={event.id} className="max-w-[240px] flex-shrink-0">
                <EventCard event={eventWithDefaults} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export function EventsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <EventCarousel title="Eventos más cerca de ti" events={nearbyEvents} />
        <EventCarousel title="Eventos online destacados" events={onlineEvents} />
        <EventCarousel title="Eventos presenciales recomendados" events={recommendedEvents} />
      </div>
    </div>
  )
}
