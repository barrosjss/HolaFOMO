"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, UserCheck, DollarSign, MapPin, Plus, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { EventFeed } from "@/components/organisms/event/EventFeed";
import { Skeleton } from "@/components/ui/skeleton";
import { Event } from "@/types/event.types";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [stats, setStats] = useState({
    upcomingEvents: 0,
    attendingEvents: 0,
    pastEvents: 0,
    totalRevenue: 0,
  });

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock events data
      const mockEvents: Event[] = [
        {
          id: '1',
          title: 'Concierto de Música Clásica',
          description: 'Disfruta de una noche de música clásica con la orquesta sinfónica.',
          date: '2023-12-15',
          time: '19:00',
          location: 'Teatro Mayor, Bogotá',
          image: '/placeholder.svg?height=240&width=240',
          price: 50000,
          organizer: 'Orquesta Sinfónica Nacional',
          rating: 4.5,
          reviewCount: 127,
          isFavorite: false,
          status: 'upcoming'
        },
        {
          id: '2',
          title: 'Feria Gastronómica',
          description: 'Prueba lo mejor de la gastronomía local en nuestra feria anual.',
          date: '2023-12-20',
          time: '12:00',
          location: 'Parque de la 93, Bogotá',
          image: '/placeholder.svg?height=240&width=240',
          price: 25000,
          organizer: 'Sabores de Colombia',
          rating: 4.2,
          reviewCount: 89,
          isFavorite: true,
          status: 'upcoming'
        },
        {
          id: '3',
          title: 'Taller de Fotografía',
          description: 'Aprende técnicas profesionales de fotografía con expertos.',
          date: '2024-01-10',
          time: '09:00',
          location: 'Centro Cultural, Medellín',
          image: '/placeholder.svg?height=240&width=240',
          price: 120000,
          organizer: 'Fotografía Creativa',
          rating: 4.8,
          reviewCount: 45,
          isFavorite: false,
          status: 'upcoming'
        }
      ];

      setEvents(mockEvents);
      setStats({
        upcomingEvents: 3,
        attendingEvents: 5,
        pastEvents: 12,
        totalRevenue: 1250000,
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-4 md:p-6">
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-5 w-80" />
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-7 w-16" />
                <Skeleton className="h-4 w-32 mt-2" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-10 w-64" />
          <EventFeed events={[]} loading={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Hola, {stats.attendingEvents > 0 ? 'bienvenido de vuelta' : 'bienvenido'}</h1>
        <p className="text-muted-foreground">
          {stats.upcomingEvents > 0 
            ? `Tienes ${stats.upcomingEvents} eventos próximos`
            : 'No tienes eventos próximos. ¡Explora y encuentra algo emocionante!'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos eventos</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcomingEvents}</div>
            <p className="text-xs text-muted-foreground">Eventos por venir</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Asistiendo</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.attendingEvents}</div>
            <p className="text-xs text-muted-foreground">Eventos confirmados</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Historial</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pastEvents}</div>
            <p className="text-xs text-muted-foreground">Eventos pasados</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">Total generado</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={() => router.push('/dashboard/events/new')}
          className="bg-gradient-to-r from-[#F95F2E] to-[#FF9A5A] hover:from-[#E84F1D] hover:to-[#F58A4A]"
        >
          <Plus className="mr-2 h-4 w-4" /> Crear evento
        </Button>
        <Button variant="outline">
          <MapPin className="mr-2 h-4 w-4" /> Explorar cerca
        </Button>
        <Button variant="outline">
          <Heart className="mr-2 h-4 w-4" /> Eventos guardados
        </Button>
      </div>

      {/* Event Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tus eventos</h2>
          <Button 
            variant="ghost" 
            className="text-[#F95F2E] hover:bg-[#F95F2E]/10"
            onClick={() => router.push('/events')}
          >
            Ver todos
          </Button>
        </div>
        
        <EventFeed events={events} loading={isLoading} />
      </div>
    </div>
  );
}
