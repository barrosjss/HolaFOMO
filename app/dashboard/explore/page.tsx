import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Clock, Users, Heart } from "lucide-react";

export default function ExploreEventsPage() {
  // Mock data for events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Concierto de Rock en Vivo',
      date: '15 Dic 2024',
      time: '20:00',
      location: 'Bogotá',
      price: 'COP 85.000',
      image: '/placeholder.svg',
      category: 'Música',
      isSaved: false
    },
    // Add more events...
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Explorar Eventos</h1>
        <p className="text-muted-foreground">
          Descubre los mejores eventos cerca de ti
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar eventos..."
            className="w-full pl-9"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-9">
            <MapPin className="mr-2 h-4 w-4" />
            Ubicación
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            Filtros
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
        {['Todos', 'Música', 'Deportes', 'Arte', 'Gastronomía', 'Tecnología', 'Educación'].map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className={`rounded-full ${category === 'Todos' ? 'bg-[#F95F2E]/10 border-[#F95F2E] text-[#F95F2E]' : ''}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full h-8 w-8 hover:bg-white"
              >
                <Heart className={`h-4 w-4 ${event.isSaved ? 'fill-[#F95F2E] text-[#F95F2E]' : ''}`} />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                {event.category}
              </Badge>
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {event.date} • {event.time}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="font-medium">{event.price}</span>
              <Button size="sm">Ver más</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
