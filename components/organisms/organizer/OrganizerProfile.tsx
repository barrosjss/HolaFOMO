'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EventCard } from '@/components/molecules/event-card';

// Mock data - replace with API call
const mockOrganizer = {
  id: 'boostogether',
  name: 'Boostogether',
  bio: 'Plataforma que conecta a personas a través de experiencias únicas y memorables.',
  logo: '/placeholder.svg',
  coverImage: '/placeholder-cover.jpg',
  categories: ['Tecnología', 'Networking', 'Emprendimiento'],
  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/boostogether' },
    { platform: 'twitter', url: 'https://twitter.com/boostogether' },
    { platform: 'website', url: 'https://boostogether.co' },
  ],
  upcomingEvents: [
    // Add mock events here
  ],
  pastEvents: [
    // Add past events here
  ]
};

export function OrganizerProfile({ organizerId }: { organizerId: string }) {
  const [organizer, setOrganizer] = useState(mockOrganizer);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch organizer data here
    // fetch(`/api/organizers/${organizerId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setOrganizer(data);
    //     setIsLoading(false);
    //   });
    setIsLoading(false);
  }, [organizerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!organizer) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-lg mb-6">
        <Image
          src={organizer.coverImage}
          alt={organizer.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-end space-x-4">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={organizer.logo}
                alt={organizer.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{organizer.name}</h1>
              <div className="flex space-x-2 mt-2">
                {organizer.categories?.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 text-xs font-medium text-white bg-white/20 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acerca de {organizer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{organizer.bio}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList>
              <TabsTrigger value="upcoming">Próximos eventos</TabsTrigger>
              <TabsTrigger value="past">Eventos pasados</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organizer.upcomingEvents?.length > 0 ? (
                  organizer.upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <p className="text-gray-500">No hay eventos próximos programados</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organizer.pastEvents?.length > 0 ? (
                  organizer.pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <p className="text-gray-500">No hay eventos pasados</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Redes sociales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {organizer.socialLinks?.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#F95F2E]"
                  >
                    {link.platform === 'instagram' && <span>📸</span>}
                    {link.platform === 'twitter' && <span>🐦</span>}
                    {link.platform === 'website' && <span>🌐</span>}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
