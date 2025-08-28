"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Share2, Heart, Clock, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OrganizerCard } from "@/components/molecules/organizer-card"
import { CoHostsSection } from "@/components/organisms/event/CoHostsSection"

interface EventDetailContentProps {
  eventId: string
}

// Mock data - in real app this would come from API
const mockEvent = {
  id: "1",
  title: "El Club de las Empresas Raras by Boostogether",
  description:
    "Dicen que las empresas raras son demasiado pequeñas para cambiar el mundo, pero las que están aquí esta noche... ya lo están haciendo.",
  date: "Martes, 26 ago",
  time: "15:00 - 19:00",
  location:
    "La ubicación es confidencial y solo será revelada a las personas seleccionadas, unos días antes del evento.",
  image:
    "/placeholder.svg",
  price: "Gratis",
  ticketsAvailable: true,
  organizer: {
    id: "1",
    name: "Boostogether BT",
    bio: "Plataforma que conecta a personas a través de experiencias únicas y memorables. Creamos espacios donde las ideas innovadoras cobran vida y las conexiones significativas florecen.",
    logo: "/placeholder.svg",
    profileUrl: "/organizadores/boostogether",
    categories: ["Tecnología", "Networking", "Emprendimiento"],
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/boostogether" },
      { platform: "twitter", url: "https://twitter.com/boostogether" },
      { platform: "website", url: "https://boostogether.co" },
      { platform: "linkedin", url: "https://linkedin.com/company/boostogether" },
    ],
  },
  coHosts: [
    {
      id: "1",
      name: "María González",
      avatar: "/placeholder.svg",
      title: "CEO at TechStart",
      profileUrl: "/perfil/maria-gonzalez",
    },
    {
      id: "2",
      name: "Carlos Ruiz",
      avatar: "/placeholder.svg",
      title: "Founder at InnovateLab",
      profileUrl: "/perfil/carlos-ruiz",
    },
    {
      id: "3",
      name: "Ana Martínez",
      avatar: "/placeholder.svg",
      title: "Director at CreativeHub",
      profileUrl: "/perfil/ana-martinez",
    },
  ],
  tags: ["Networking", "Empresas", "Innovación"],
  details: {
    aboutEvent:
      "¿Y si una cena pudiera conectar industrias que nunca se han mirado a los ojos? ¿Y si cada plato revelara una visión del futuro?",
    experience:
      "Boostogether te invita a un networking experiencial único, en donde solo 30 líderes serán parte de una travesía inmersiva que combina gastronomía colombiana, tecnología, territorio y propósito.",
  },
}

export function EventDetailContent({ eventId }: EventDetailContentProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 21,
    minutes: 13,
    seconds: 55,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10">
          {/* Left Column - Event Image, Countdown, Organizer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Event Image */}
              <div className="relative group">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={mockEvent.image}
                    alt={mockEvent.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white/100 shadow-md"
                  >
                    <Heart className="h-4 w-4 text-gray-700" />
                  </Button>
                  <Button 
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white/100 shadow-md"
                  >
                    <Share2 className="h-4 w-4 text-gray-700" />
                  </Button>
                </div>
              </div>

              {/* Event Status Badge */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#F95F2E]/10 text-[#F95F2E]">
                  <span className="h-2 w-2 rounded-full bg-[#F95F2E] mr-2"></span>
                  Evento presencial
                </div>
                <div className="text-sm text-gray-500">127 asistentes</div>
              </div>

              {/* Countdown Timer */}
              <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">El evento comienza en</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{timeLeft.days}</div>
                      <div className="text-xs text-gray-500 font-medium">Días</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-500 font-medium">Horas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-500 font-medium">Min</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gray-900">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-500 font-medium">Seg</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organizer Card */}
              <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Organizador</h3>
                    <OrganizerCard organizer={mockEvent.organizer} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Co-anfitriones</h3>
                    <CoHostsSection coHosts={mockEvent.coHosts} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{mockEvent.title}</h1>
              </div>

              {/* Event Details */}
              <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Date & Time */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Fecha y hora</h4>
                        <p className="text-gray-600">{mockEvent.date} • {mockEvent.time}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Ubicación</h4>
                        <p className="text-gray-600">{mockEvent.location}</p>
                        <Button variant="link" className="text-[#F95F2E] p-0 h-auto text-sm font-medium">
                          Ver en el mapa
                        </Button>
                      </div>
                    </div>

                    {/* About Event */}
                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Acerca del evento</h3>
                      <p className="text-gray-600 leading-relaxed">{mockEvent.details.aboutEvent}</p>
                    </div>

                    {/* Experience */}
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-blue-800 leading-relaxed">{mockEvent.details.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}
