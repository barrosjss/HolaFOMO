"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ left: string; top: string; animation: string; delay: string }>>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generar partículas solo en el cliente
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${8 + Math.random() * 10}s ease-in-out infinite`,
      delay: `${Math.random() * 5}s`,
    }))
    setParticles(generatedParticles)
    setIsMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F95F2E] via-[#FF4500] to-[#8B0000]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Patrón de puntos animado */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Efectos de luz dinámicos */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      ></div>

      {/* Partículas flotantes */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                animation: particle.animation,
                animationDelay: particle.delay,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 shadow-2xl">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
            <span className="text-white/90 text-sm font-medium">+10,000 eventos disponibles</span>
          </div>

          {/* Título */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Vive cada momento,{" "}
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent animate-pulse">
                descubre cada evento
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg backdrop-blur-sm">
              La plataforma que conecta tus pasiones con experiencias únicas. Conciertos, teatro, deportes y mucho más
              te esperan.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/95 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              Explorar eventos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/40 hover:bg-white/20 px-8 py-4 text-lg rounded-full backdrop-blur-md group hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/70 text-sm">Eventos publicados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">25K+</div>
              <div className="text-white/70 text-sm">Usuarios activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-white/70 text-sm">Ciudades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse shadow-lg"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}