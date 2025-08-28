/**
 * Tipos relacionados con la página de inicio
 */

import { LucideIcon } from 'lucide-react';

export interface StepItem {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  event: string;
  result: string;
  testimonial: string;
  image: string;
  rating: number;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

export interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
  cta?: {
    text: string;
    href: string;
  };
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: BenefitItem[];
}

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  videoPreview?: {
    thumbnail: string;
    videoUrl: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
}
