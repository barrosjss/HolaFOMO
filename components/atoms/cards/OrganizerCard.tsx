'use client';

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Instagram, Twitter, Globe, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Organizer {
  id: string;
  name: string;
  bio: string;
  logo: string;
  profileUrl: string;
  categories?: string[];
  socialLinks?: SocialLink[];
}

interface OrganizerCardProps {
  organizer: Organizer;
  variant?: "default" | "compact" | "minimal";
}

const socialIcons = {
  website: Globe,
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
} as const;

export function OrganizerCard({ organizer, variant = "default" }: OrganizerCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md ${
      variant === 'compact' ? 'max-w-md' : 'w-full'
    }`}>
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image
                src={organizer.logo}
                alt={organizer.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">
              {organizer.name}
            </h3>
            {variant !== 'minimal' && (
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {organizer.bio}
              </p>
            )}
            
            {variant === 'default' && organizer.socialLinks && organizer.socialLinks.length > 0 && (
              <div className="mt-3 flex space-x-2">
                {organizer.socialLinks.map((link) => {
                  const Icon = socialIcons[link.platform as keyof typeof socialIcons] || ExternalLink;
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${link.platform} de ${organizer.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          
          {variant !== 'minimal' && (
            <div className="flex-shrink-0">
              <Button variant="outline" size="sm" asChild>
                <Link href={organizer.profileUrl}>
                  Ver perfil
                </Link>
              </Button>
            </div>
          )}
        </div>
        
        {variant === 'default' && organizer.categories && organizer.categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {organizer.categories.map((category) => (
              <span 
                key={category} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
