// components/organizer-card.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Instagram, Twitter, Globe, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  platform: string;
  url: string;
}

interface Organizer {
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
  const SocialIcon = ({ platform }: { platform: string }) => {
    const Icon = socialIcons[platform as keyof typeof socialIcons] || Globe;
    return <Icon className="h-4 w-4 text-gray-500 hover:text-[#F95F2E] transition-colors" />;
  };
  
  if (variant === 'minimal') {
    return (
      <div className="flex items-center space-x-3 p-3 -mx-3 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden bg-gray-100">
          <Image
            src={organizer.logo || "/placeholder-user.jpg"}
            alt={organizer.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-900 truncate">{organizer.name}</h3>
          <p className="text-xs text-gray-500 truncate">Organizador principal</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <Link href={organizer.profileUrl} className="group block flex-shrink-0">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={organizer.logo || "/placeholder-user.jpg"}
              alt={organizer.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={organizer.profileUrl} className="group block">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#F95F2E] transition-colors">
              {organizer.name}
            </h3>
          </Link>
          
          {variant === "default" && organizer.bio && (
            <p className="text-sm text-gray-600 mt-2">{organizer.bio}</p>
          )}
          
          {variant === "default" && organizer.socialLinks && organizer.socialLinks.length > 0 && (
            <div className="flex items-center space-x-3 mt-3">
              {organizer.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-[#F95F2E] transition-colors"
                  aria-label={link.platform}
                  title={link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {variant === "default" && organizer.categories && organizer.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {organizer.categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}