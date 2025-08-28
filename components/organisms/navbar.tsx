'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

// Navbar variants:
// 1. 'default': The main navbar with search bar, used on most pages
// 2. 'transparent': A simplified, transparent navbar used on event and organizer pages
interface NavbarProps {
  specialMode?: boolean; // When true, shows the 'transparent' variant
}

const Navbar: React.FC<NavbarProps> = ({ specialMode = false }) => {
  const pathname = usePathname();
  const [isSpecialMode, setIsSpecialMode] = useState(specialMode);
  const [selectedCity, setSelectedCity] = useState("Madrid");
  const [selectedLanguage, setSelectedLanguage] = useState("Español");

  useEffect(() => {
    const isEventPage = pathname?.startsWith('/eventos/');
    const isOrganizerPage = pathname?.startsWith('/organizador/');
    setIsSpecialMode(isEventPage || isOrganizerPage || specialMode);
  }, [pathname, specialMode]);

  // Determine which navbar variant to show
  const navbarVariant = isSpecialMode ? 'transparent' : 'default';
  const isSpecialView = isSpecialMode; // Keeping for backward compatibility

  // Conditional classes based on navbar variant
  // Navbar container classes for each variant
  const navClasses = navbarVariant === 'transparent' 
    ? 'fixed top-0 left-0 right-0 z-50 w-full bg-transparent' // Transparent variant (for event/organizer pages)
    : 'fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4'; // Default variant (for main pages)

  const containerClasses = isSpecialView 
    ? 'w-full px-6 py-3' 
    : 'bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full shadow-2xl';

  const contentClasses = isSpecialView 
    ? 'flex items-center justify-between w-full' 
    : 'flex items-center justify-between px-6 py-3';

  const buttonClasses = isSpecialView 
    ? 'text-gray-700 hover:text-gray-900 transition-colors duration-200' 
    : 'text-gray-700 hover:text-[#F95F2E] hover:bg-gray-100/80 rounded-full';

  const logoClasses = isSpecialView ? 'h-10 w-auto' : 'h-8 w-auto';

  return (
    <nav className={navClasses}>
      <div className={containerClasses}>
        <div className={contentClasses}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className={logoClasses} style={{ position: 'relative', width: isSpecialView ? '140px' : '100px', height: '40px' }}>
                <Image
                  src="/images/logo-fomo.png"
                  alt="FOMO Logo"
                  fill
                  sizes="(max-width: 768px) 100px, 140px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {!isSpecialView && (
            <div className="flex-1 max-w-md mx-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Buscar conciertos, teatro, deportes..."
                  className="pl-10 bg-gray-50/80 border-gray-200 text-gray-900 placeholder:text-gray-500 rounded-full focus:ring-2 focus:ring-[#F95F2E] focus:border-[#F95F2E] backdrop-blur-sm"
                />
              </div>
            </div>
          )}

          <div className={`flex items-center ${isSpecialView ? 'space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm' : 'space-x-3'}`}>
            {/* Selector de ciudad */}
            <Button
              variant="ghost"
              className={`flex items-center space-x-2 ${buttonClasses} ${isSpecialView ? 'px-2 py-1 hover:bg-white/50 rounded-full' : 'hover:bg-gray-100 rounded-full'}`}
            >
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">{selectedCity}</span>
            </Button>

            {!isSpecialView && <div className="h-6 w-px bg-gray-300"></div>}
            
            {/* Selector de idioma */}
            <Button
              variant="ghost"
              size="icon"
              className={`w-8 h-8 ${buttonClasses} ${isSpecialView ? 'bg-transparent hover:bg-white/50' : 'hover:bg-gray-100'} rounded-full`}
            >
              <Globe className="h-4 w-4" />
            </Button>

            {/* Separador */}
            {isSpecialView && <div className="h-6 w-px bg-gray-200 mx-1"></div>}

            {/* Perfil de usuario */}
            <div className="relative">
              <Link href="/auth">
                <Button
                  variant="ghost"
                  className={`p-0 h-8 w-8 rounded-full ${buttonClasses} ${isSpecialView ? 'bg-transparent hover:bg-white/50' : 'hover:bg-gray-100'} flex items-center justify-center`}
                >
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
