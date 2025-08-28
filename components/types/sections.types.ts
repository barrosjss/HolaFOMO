import { LucideIcon } from 'lucide-react';

/**
 * Tipos para la sección de preguntas frecuentes
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  cta?: {
    text: string;
    href: string;
  };
}

/**
 * Tipos para la sección de eventos
 */
export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  price: string;
  isFree?: boolean;
  category?: string;
}

export interface EventsSectionProps {
  title?: string;
  subtitle?: string;
  events?: EventCardProps[];
  cta?: {
    text: string;
    href: string;
  };
}

/**
 * Tipos para la sección de precios
 */
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

export interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  disclaimer?: string;
}

/**
 * Tipos para la sección de CTA final
 */
export interface FinalCTASectionProps {
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
  features?: string[];
}
