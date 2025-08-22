import { EventCard } from "@/components/event-card"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const nearbyEvents = [
  {
    id: 1,
    title: "Concierto de Rock en Vivo con Bandas Locales",
    date: "15 Dic 2024",
    dateRange: "15-dic - 20-dic",
    city: "Madrid",
    venue: "Palacio de la Música",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 85.000",
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: 2,
    title: "Festival de Jazz Internacional",
    date: "20 Dic 2024",
    dateRange: "20-dic - 22-dic",
    city: "Barcelona",
    venue: "Teatro Principal",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 120.000",
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: 3,
    title: "Teatro Musical: El Fantasma de la Ópera",
    date: "22 Dic 2024",
    dateRange: "22-dic - 30-dic",
    city: "Valencia",
    venue: "Gran Teatro",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 95.000",
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: 4,
    title: "Concierto Sinfónico de Navidad",
    date: "24 Dic 2024",
    dateRange: "24-dic - 25-dic",
    city: "Madrid",
    venue: "Auditorio Nacional",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 65.000",
    rating: 4.7,
    reviewCount: 156,
  },
]

const onlineEvents = [
  {
    id: 5,
    title: "Conferencia Tech 2024: IA y Futuro",
    date: "18 Dic 2024",
    dateRange: "18-dic - 19-dic",
    city: "Online",
    venue: "Plataforma Virtual",
    image: "/placeholder.svg?height=240&width=240",
    price: "Gratis",
    rating: 4.4,
    reviewCount: 89,
  },
  {
    id: 6,
    title: "Masterclass de Cocina Italiana",
    date: "25 Dic 2024",
    dateRange: "25-dic - 26-dic",
    city: "Online",
    venue: "Cocina Virtual",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 45.000",
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: 7,
    title: "Workshop de Fotografía Digital",
    date: "28 Dic 2024",
    dateRange: "28-dic - 29-dic",
    city: "Online",
    venue: "Estudio Online",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 75.000",
    rating: 4.6,
    reviewCount: 143,
  },
]

const recommendedEvents = [
  {
    id: 8,
    title: "Exposición de Arte Moderno Contemporáneo",
    date: "30 Dic 2024",
    dateRange: "30-dic - 15-ene",
    city: "Madrid",
    venue: "Museo de Arte Moderno",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 35.000",
    rating: 4.3,
    reviewCount: 98,
  },
  {
    id: 9,
    title: "Partido de Fútbol: Clásico Nacional",
    date: "5 Ene 2025",
    dateRange: "5-ene",
    city: "Barcelona",
    venue: "Estadio Camp Nou",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 180.000",
    rating: 4.9,
    reviewCount: 456,
  },
  {
    id: 10,
    title: "Festival Gastronómico Internacional",
    date: "8 Ene 2025",
    dateRange: "8-ene - 12-ene",
    city: "Valencia",
    venue: "Centro de Convenciones",
    image: "/placeholder.svg?height=240&width=240",
    price: "COP 55.000",
    rating: 4.7,
    reviewCount: 201,
  },
]

function EventCarousel({ title, events }: { title: string; events: any[] }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Button variant="ghost" className="flex items-center space-x-1 text-[#F95F2E] hover:text-[#F95F2E]/80">
          <span className="text-sm">Ver todos</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-x-4 pb-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
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
