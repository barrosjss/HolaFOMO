import { EventCard } from "@/components/molecules/event-card";
import { Event } from "@/types/event.types";
import { Skeleton } from "@/components/ui/skeleton";

interface EventFeedProps {
  events?: Event[];
  loading?: boolean;
}

export function EventFeed({ events = [], loading = false }: EventFeedProps) {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay eventos para mostrar</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

