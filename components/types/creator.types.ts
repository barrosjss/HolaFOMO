import { LucideIcon } from 'lucide-react';

export interface CreatorBannerProps {
  title?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  icon?: LucideIcon;
  backgroundImage?: string;
  gradientFrom?: string;
  gradientTo?: string;
  badgeText?: string;
}
