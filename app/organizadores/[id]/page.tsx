// app/organizadores/[id]/page.tsx
"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { EventGroup } from "@/components/organizer-event-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"

// Mock data - Reemplazar con datos reales de tu API
const mockOrganizer = {
  id: "1",
  name: "Boostogether",
  bio: "Plataforma que conecta a personas a través de experiencias únicas y memorables.",
  logo: "/placeholder.svg",
  coverImage: "/placeholder.svg",
  categories: ["Tecnología", "Networking", "Emprendimiento"],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "website", url: "https://ejemplo.com" },
  ],
  upcomingEvents: [
    {
      id: "1",
      title: "Meetup de Emprendedores Tech 2024",
      date: "Jue, 15 Sep 2024",
      time: "18:00",
      endTime: "21:00",
      location: "WeWork, Bogotá",
      image: "/placeholder.svg",
      status: "Próximo" as const,
      price: "$25,000",
      organizerName: "Boostogether"
    },
    {
      id: "3",
      title: "Taller de Growth Hacking",
      date: "15 Sep 2024",
      time: "10:00",
      endTime: "13:00",
      location: "Impact Hub, Bogotá",
      image: "/placeholder.svg",
      status: "Últimos cupos" as const,
      price: "$50,000",
      organizerName: "Boostogether"
    },
  ],
  pastEvents: [
    {
      id: "2",
      title: "Conferencia de Innovación 2023",
      date: "20 Ago 2023",
      time: "09:00",
      endTime: "18:00",
      location: "Ágora, Bogotá",
      image: "/placeholder.svg",
      status: "Finalizado" as const,
      price: "Gratis",
      organizerName: "Boostogether"
    },
  ],
  about: `Somos una plataforma apasionada por crear experiencias únicas que inspiran y conectan a las personas. Nuestros eventos están diseñados para fomentar la innovación y el crecimiento personal.`,
  location: "Bogotá, Colombia",
  website: "https://ejemplo.com",
  memberSince: "Enero 2022",
}

// Definir los tipos de iconos sociales
const socialIcons = {
  website: ExternalLink,
  instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  ),
  facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.139.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
} as const;

// Type for the event status
type EventStatus = 'Próximo' | 'Finalizado' | 'Agotado' | 'Últimos cupos' | 'Gratis' | 'Presencial' | 'Online';

// Base event interface that matches our mock data
interface BaseEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  image: string;
  status: string; // Keep as string for the input
  price?: string | number;
  organizerName: string;
}

// Type for the processed event that matches what EventGroup expects
interface ProcessedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  image: string;
  status: EventStatus;
  price: string; // Ensure price is always a string
  organizerName: string;
}

// Helper function to safely transform event with proper types
function transformEvent(event: BaseEvent): ProcessedEvent {
  // Ensure we have a valid status, default to 'Próximo' if not recognized
  const validStatus: EventStatus[] = ['Próximo', 'Finalizado', 'Agotado', 'Últimos cupos', 'Gratis', 'Presencial', 'Online'];
  const status: EventStatus = validStatus.includes(event.status as EventStatus) 
    ? event.status as EventStatus 
    : 'Próximo';

  return {
    ...event,
    status,
    price: event.price?.toString() || 'Gratis',
    endTime: event.endTime || ''
  };
}

export default function OrganizerProfile({ params }: { params: { id: string } }) {
  const organizer = mockOrganizer; // Reemplazar con llamada a la API

  if (!organizer) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32 md:pt-36">
        {/* Banner de portada */}
        <div className="h-48 md:h-64 w-full bg-gray-200 overflow-hidden rounded-xl mb-8">
          <Image
            src={organizer.coverImage || '/placeholder-cover.jpg'}
            alt={`Portada de ${organizer.name}`}
            width={1920}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/3 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative h-32 w-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={organizer.logo}
                    alt={organizer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{organizer.name}</h1>
                    <p className="text-gray-500 mt-1">{organizer.location}</p>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    {organizer.socialLinks.map((link) => {
                      const Icon = socialIcons[link.platform as keyof typeof socialIcons] || ExternalLink;
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#F95F2E]/10 hover:text-[#F95F2E] transition-colors"
                          aria-label={link.platform}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>

                  {organizer.website && (
                    <a
                      href={organizer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-[#F95F2E] hover:underline"
                    >
                      {new URL(organizer.website).hostname.replace("www.", "")}
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">Sobre el organizador</h3>
                  <p className="mt-2 text-sm text-gray-600">{organizer.about}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">Categorías</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {organizer.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-900">Miembro desde</h3>
                <p className="mt-1 text-sm text-gray-600">{organizer.memberSince}</p>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="md:w-2/3 space-y-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Eventos</h2>
                <TabsList className="bg-gray-100 p-1.5 h-auto rounded-xl">
                  <TabsTrigger
                    value="upcoming"
                    className="px-4 py-1.5 text-sm rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Próximos
                  </TabsTrigger>
                  <TabsTrigger
                    value="past"
                    className="px-4 py-1.5 text-sm rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Pasados
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming" className="space-y-8">
                {organizer.upcomingEvents.length > 0 ? (
                  // Agrupar eventos por fecha
                  Object.entries(
                    organizer.upcomingEvents.reduce<Record<string, ProcessedEvent[]>>((acc, event) => {
                      const dateKey = event.date;
                      if (!acc[dateKey]) {
                        acc[dateKey] = [];
                      }
                      // Transform the event to ensure it matches the expected type
                      const processedEvent = transformEvent(event);
                      acc[dateKey].push(processedEvent);
                      return acc;
                    }, {})
                  )
                  .sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime())
                  .map(([date, events]) => (
                    <EventGroup key={date} date={date} events={events} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No hay eventos próximos programados</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-8">
                {organizer.pastEvents.length > 0 ? (
                  // Agrupar eventos por fecha
                  Object.entries(
                    organizer.pastEvents.reduce<Record<string, ProcessedEvent[]>>((acc, event) => {
                      const dateKey = event.date;
                      if (!acc[dateKey]) {
                        acc[dateKey] = [];
                      }
                      // Transform the event to ensure it matches the expected type
                      const processedEvent = transformEvent(event);
                      acc[dateKey].push(processedEvent);
                      return acc;
                    }, {})
                  )
                  .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
                  .map(([date, events]) => (
                    <EventGroup key={date} date={date} events={events} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No hay eventos pasados</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}