/**
 * Tipos relacionados con la funcionalidad de organizadores y co-anfitriones
 */

export interface SocialLink {
  platform: 'instagram' | 'twitter' | 'website' | 'linkedin' | 'facebook' | string;
  url: string;
}

export interface Organizer {
  id: string;
  name: string;
  logo?: string;
  bio?: string;
  socialLinks?: SocialLink[];
}

export interface CoHost extends Omit<Organizer, 'socialLinks'> {
  title?: string;
  avatar?: string;
  name: string;
  id: string;
}

export interface OrganizerSectionProps {
  organizer: Organizer;
  coHosts: CoHost[];
  isMobile?: boolean;
}
