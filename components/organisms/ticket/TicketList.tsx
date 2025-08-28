"use client";

import { TicketCard } from "@/components/molecules/ticket/TicketCard";
import { Skeleton } from "@/components/ui/skeleton";

type TicketStatus = "upcoming" | "past" | "cancelled";

interface TicketListProps {
  status: TicketStatus;
}

// Mock data - replace with actual API call
const mockTickets = {
  upcoming: [
    {
      id: "1",
      eventTitle: "Concierto de Rock",
      eventDate: new Date("2023-12-15T20:00:00"),
      eventLocation: "Teatro Metropólitan, CDMX",
      ticketType: "General",
      ticketNumber: "#TKT-001",
      qrCode: "TKT-001-ROCK-2023",
      status: "upcoming" as const,
    },
  ],
  past: [
    {
      id: "2",
      eventTitle: "Taller de Fotografía",
      eventDate: new Date("2023-11-10T16:00:00"),
      eventLocation: "Centro Cultural, Guadalajara",
      ticketType: "Estudiante",
      ticketNumber: "#TKT-002",
      qrCode: "TKT-002-FOTO-2023",
      status: "past" as const,
    },
  ],
  cancelled: [],
};

export function TicketList({ status }: TicketListProps) {
  const tickets = mockTickets[status];
  const isLoading = false; // Replace with actual loading state

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (tickets.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2m5-11a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7z"
            />
          </svg>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          No hay entradas {getStatusText(status).toLowerCase()}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {getEmptyStateMessage(status)}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          id={ticket.id}
          eventTitle={ticket.eventTitle}
          eventDate={ticket.eventDate}
          eventLocation={ticket.eventLocation}
          ticketType={ticket.ticketType}
          ticketNumber={ticket.ticketNumber}
          qrCode={ticket.qrCode}
          status={ticket.status}
        />
      ))}
    </div>
  );
}

function getStatusText(status: TicketStatus): string {
  switch (status) {
    case "upcoming":
      return "Próximas";
    case "past":
      return "Pasadas";
    case "cancelled":
      return "Canceladas";
    default:
      return "";
  }
}

function getEmptyStateMessage(status: TicketStatus): string {
  switch (status) {
    case "upcoming":
      return "No tienes entradas para eventos próximos.";
    case "past":
      return "No has asistido a ningún evento aún.";
    case "cancelled":
      return "No tienes entradas canceladas.";
    default:
      return "";
  }
}
