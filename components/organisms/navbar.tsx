'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, MapPin, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import React from 'react';

interface NavbarProps {
  specialMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ specialMode = false }) => {
  const pathname = usePathname();
  const [isSpecialMode, setIsSpecialMode] = useState(specialMode);
  const [selectedCity, setSelectedCity] = useState("Madrid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Español");
  
  useEffect(() => {
    const isEventPage = pathname?.startsWith('/eventos/');
    const isOrganizerPage = pathname?.startsWith('/organizador/');
    setIsSpecialMode(isEventPage || isOrganizerPage || specialMode);
  }, [pathname, specialMode]);
  
  const isSpecialView = isSpecialMode;
  
  // Clases condicionales
  const navClasses = isSpecialView 
    ? 'fixed top-0 left-0 right-0 z-50 w-full bg-transparent' 
    : 'fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4';
    
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

  // Datos de ciudades
  const allCities = [
    { name: "Madrid", country: "España", type: "nearby" },
    { name: "Barcelona", country: "España", type: "nearby" },
    { name: "Valencia", country: "España", type: "nearby" },
  ];

  const filteredCities = allCities.filter(
    (city: {name: string, country: string}) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.country.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const nearbyCities = filteredCities.filter((city: {type: string}) => city.type === "nearby");
  const suggestedCities = filteredCities.filter((city: {type: string}) => city.type === "suggested");

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
  ];

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
            <div className={isSpecialView ? 'px-2' : 'px-0'}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`flex items-center space-x-2 ${buttonClasses} ${isSpecialView ? 'px-2 py-1 hover:bg-white/50 rounded-full' : 'hover:bg-gray-100 rounded-full'}`}
                  >
                    <MapPin className="h-4 w-4" />
                    <span className="hidden sm:inline">{selectedCity}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 rounded-xl overflow-hidden">
                  <DialogHeader className="p-6 pb-4">
                    <DialogTitle className="text-center text-xl font-bold">Elige tu ciudad</DialogTitle>
                    <div className="relative mt-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Busca por ciudad"
                        className="pl-10 bg-gray-100 border-gray-200 rounded-full focus:ring-2 focus:ring-[#F95F2E]/50 focus:border-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </DialogHeader>
                  <div className="px-6 pb-6 max-h-[60vh] overflow-y-auto">
                    {nearbyCities.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Cercanas</h3>
                        <div className="space-y-1">
                          {nearbyCities.map((city) => (
                            <Button
                              key={city.name}
                              variant="ghost"
                              className={`w-full justify-start text-left py-2 px-4 rounded-lg ${
                                selectedCity === city.name 
                                  ? 'bg-gray-100 text-gray-900' 
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                              onClick={() => {
                                setSelectedCity(city.name);
                                setSearchTerm('');
                              }}
                            >
                              {city.name}, {city.country}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {!isSpecialView && <div className="h-6 w-px bg-gray-300"></div>}
            
            {/* Selector de idioma */}
            <div className={isSpecialView ? 'px-2' : 'px-0'}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`w-8 h-8 ${buttonClasses} ${isSpecialView ? 'bg-transparent hover:bg-white/50' : 'hover:bg-gray-100'} rounded-full`}
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 rounded-xl overflow-hidden">
                  <DialogHeader className="p-6 pb-4">
                    <DialogTitle className="text-center text-xl font-bold">Selecciona tu idioma</DialogTitle>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      {languages.map((language) => (
                        <Button
                          key={language.code}
                          variant="ghost"
                          className={`w-full justify-start text-left py-2 px-4 rounded-lg ${
                            selectedLanguage === language.name 
                              ? 'bg-gray-100 text-gray-900' 
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setSelectedLanguage(language.name)}
                        >
                          {language.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Separador */}
            {isSpecialView && <div className="h-6 w-px bg-gray-200 mx-1"></div>}

            {/* Perfil de usuario */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`p-0 h-8 w-8 rounded-full ${buttonClasses} ${isSpecialView ? 'bg-transparent hover:bg-white/50' : 'hover:bg-gray-100'} flex items-center justify-center`}
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                    <User className="mr-2 h-4 w-4" />
                    <span>Mi perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;
