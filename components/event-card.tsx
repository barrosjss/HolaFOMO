"use client"

import { useState } from "react"
import { Heart, MapPin, Star, StarHalf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Event {
  id: number
  title: string
  date: string
  city: string
  image: string
  price: string
  venue?: string
  rating?: number
  reviewCount?: number
  dateRange?: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  // Función para renderizar estrellas
  const renderStars = (rating = 0) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-3 w-3 fill-[#F95F2E] text-[#F95F2E]" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-3 w-3 fill-[#F95F2E] text-[#F95F2E]" />)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />)
    }

    return stars
  }

  return (
    <Link href={`/eventos/${event.id}`} className="block">
      <div className="flex-shrink-0 w-[240px] bg-white cursor-pointer">
        {/* Imagen superior */}
        <div className="relative">
          <Image
            src={event.image || "/placeholder.svg?height=240&width=240"}
            alt={event.title}
            width={240}
            height={240}
            className="w-full h-[240px] object-cover rounded-xl"
          />

          {/* Overlay de branding */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1">
            <span className="text-white text-xs font-medium">fever presents Candlelight</span>
          </div>

          {/* Botón de favorito */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white ${
              isFavorite ? "text-[#F95F2E]" : "text-gray-600"
            }`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* Información del evento */}
        <div className="pt-2 space-y-1">
          {/* Ubicación */}
          <div className="flex items-center space-x-1 mt-2">
            <MapPin className="h-3 w-3 text-gray-600" />
            <span className="text-xs text-gray-700">{event.venue || event.city}</span>
          </div>

          {/* Título */}
          <h3 className="font-bold text-[15px] text-[#1A1A1A] leading-tight line-clamp-2 mt-1 mb-1">{event.title}</h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mt-1">
            <div className="flex items-center space-x-0.5">{renderStars(event.rating || 4.5)}</div>
            <span className="text-[13px] text-gray-500">({event.reviewCount || 127})</span>
          </div>

          {/* Fecha */}
          <div className="mt-1">
            <span className="text-[13px] text-gray-700">{event.dateRange || event.date}</span>
          </div>

          {/* Precio */}
          <div className="mt-1">
            <span className="font-medium text-[14px] text-gray-900">Desde {event.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
