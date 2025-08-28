export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  image?: string;
  price?: number | string;
  category?: string;
  organizer?: string;
  capacity?: number;
  attendees?: number;
  isFavorite?: boolean;
  status?: 'upcoming' | 'past' | 'cancelled';
  // Additional properties for the EventCard
  rating?: number;
  reviewCount?: number;
  venue?: string;
  city?: string;
  dateRange?: string;
}
