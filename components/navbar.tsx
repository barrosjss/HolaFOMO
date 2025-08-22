"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, User, MapPin, ChevronDown, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image';

export function Navbar() {
  const [selectedCity, setSelectedCity] = useState("Madrid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("Español")

  const allCities = [
    { name: "Madrid", country: "España", type: "nearby" },
    { name: "Barcelona", country: "España", type: "nearby" },
    { name: "Valencia", country: "España", type: "nearby" },
    { name: "Sevilla", country: "España", type: "nearby" },
    { name: "Bilbao", country: "España", type: "nearby" },
    { name: "Bogotá", country: "Colombia", type: "suggested" },
    { name: "Medellín", country: "Colombia", type: "suggested" },
    { name: "Cali", country: "Colombia", type: "suggested" },
    { name: "Sao Paulo", country: "Brasil", type: "suggested" },
    { name: "Londres", country: "Reino Unido", type: "suggested" },
    { name: "Ciudad de México - CDMX", country: "México", type: "suggested" },
    { name: "París", country: "Francia", type: "suggested" },
    { name: "Montreal, QC", country: "Canadá", type: "suggested" },
    { name: "Sídney", country: "Australia", type: "suggested" },
    { name: "Los Ángeles, CA", country: "Estados Unidos", type: "suggested" },
  ]

  const filteredCities = allCities.filter(
    (city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const nearbyCities = filteredCities.filter((city) => city.type === "nearby")
  const suggestedCities = filteredCities.filter((city) => city.type === "suggested")

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
  ]

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full shadow-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo y controles izquierda */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-fomo.png"
              alt="FOMO Logo"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
            </div>

            {/* Selector de ciudad */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-gray-700 hover:text-[#F95F2E] hover:bg-gray-100/80 rounded-full px-3 py-2 text-sm"
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
                <div className="max-h-[400px] overflow-y-auto px-6 pb-6">
                  {nearbyCities.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-gray-800 mb-2">Ciudades cercanas</h3>
                      <div className="grid gap-1">
                        {nearbyCities.map((city) => (
                          <Button
                            key={city.name}
                            variant="ghost"
                            className={`justify-start text-left h-auto py-2 px-3 rounded-lg ${
                              city.name === selectedCity
                                ? "bg-[#F95F2E] text-white hover:bg-[#F95F2E]/90"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setSelectedCity(city.name)
                              setSearchTerm("")
                            }}
                          >
                            <span className="font-medium">{city.name}</span>
                            <span className={`ml-1 ${city.name === selectedCity ? "text-gray-300" : "text-gray-500"}`}>
                              {city.country}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {suggestedCities.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-800 mb-2">Ciudades sugeridas</h3>
                      <div className="grid gap-1">
                        {suggestedCities.map((city) => (
                          <Button
                            key={city.name}
                            variant="ghost"
                            className={`justify-start text-left h-auto py-2 px-3 rounded-lg ${
                              city.name === selectedCity
                                ? "bg-[#F95F2E] text-white hover:bg-[#F95F2E]/90"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setSelectedCity(city.name)
                              setSearchTerm("")
                            }}
                          >
                            <span className="font-medium">{city.name}</span>
                            <span className={`ml-1 ${city.name === selectedCity ? "text-gray-300" : "text-gray-500"}`}>
                              {city.country}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredCities.length === 0 && (
                    <p className="text-center text-gray-500 py-4">No se encontraron ciudades.</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Barra de búsqueda central */}
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

          {/* Controles derecha */}
          <div className="flex items-center space-x-3">
            {/* Selector de idioma */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-[#F95F2E] hover:bg-gray-100/80 rounded-full w-10 h-10"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md p-0 rounded-xl overflow-hidden">
                <DialogHeader className="p-6 pb-4">
                  <DialogTitle className="text-center text-xl font-bold">Selecciona tu idioma</DialogTitle>
                  <p className="text-center text-gray-600 mt-2">¿En qué idioma prefieres ver la página?</p>
                </DialogHeader>
                <div className="px-6 pb-6">
                  <div className="flex gap-3">
                    {languages.map((language) => (
                      <Button
                        key={language.code}
                        variant={selectedLanguage === language.name ? "default" : "outline"}
                        className={`flex-1 py-3 rounded-full font-medium ${
                          selectedLanguage === language.name
                            ? "bg-[#736CED] text-white hover:bg-[#736CED]/90" // Usando el nuevo color
                            : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
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

            {/* Línea separadora */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Botón de perfil mejorado */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-700 hover:text-[#F95F2E] hover:bg-gray-100/80 rounded-full w-12 h-12 border-2 border-gray-200 hover:border-[#F95F2E]/50"
                >
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="hover:bg-[#F95F2E]/10">Iniciar sesión</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#F95F2E]/10">Ver reservas</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
