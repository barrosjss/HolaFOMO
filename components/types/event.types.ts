/**
 * Tipos relacionados con eventos
 */

export interface EventDate {
  date: string;
  time: string;
  timezone: string;
}

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  country: string;
  isOnline: boolean;
}

export interface EventTicket {
  id: string;
  name: string;
  price: number;
  currency: string;
  available: number;
  total: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  startDate: EventDate;
  endDate: EventDate;
  location: EventLocation;
  category: string;
  status: 'Próximo' | 'Finalizado' | 'Agotado' | 'Cancelado';
  tickets: EventTicket[];
  organizer: {
    id: string;
    name: string;
    logo: string;
  };
  isFree: boolean;
  isOnline: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface OrganizerEventCardProps {
  event: Event;
  showDateHeader?: boolean;
  dateHeader?: string;
}

export interface EventGroupProps {
  date: string;
  events: Event[];
}
