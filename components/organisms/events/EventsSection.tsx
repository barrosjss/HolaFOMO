'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { EventCard } from "@/components/molecules/event-card";

// Mock data - replace with real data from your API
const mockEvents = [
  {
    id: 1,
    title: "Concierto de Rock",
    date: "2024-12-15",
    city: "Bogotá",
    image: "/images/el-grito-bg.jpeg",
    price: "50,000",
    venue: "Teatro Metropolitano",
    rating: 4.5,
    reviewCount: 127
  },
  {
    id: 2,
    title: "Festival de Jazz",
    date: "2024-11-20",
    city: "Medellín",
    image: "/images/el-grito-bg.jpeg",
    price: "65,000",
    venue: "Teatro Metropolitano",
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 3,
    title: "Obra de Teatro",
    date: "2025-01-10",
    city: "Cali",
    image: "/images/el-grito-bg.jpeg",
    price: "35,000",
    venue: "Teatro Municipal",
    rating: 4.6,
    reviewCount: 45
  }
];

export function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Próximos eventos</h2>
          <Button variant="ghost" className="text-primary">
            Ver todos <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}