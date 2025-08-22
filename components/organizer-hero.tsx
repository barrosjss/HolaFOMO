import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Calendar, TrendingUp } from 'lucide-react'
import Image from "next/image"

export function OrganizerHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo */}
      <Image
        src="/images/el-grito-bg.jpeg"
        alt="Fondo artístico"
        fill
        quality={100}
        sizes="100vw"
        className="object-cover z-0"
        priority
      />

      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-purple-300" />
              <span className="text-white/90 text-sm font-medium">+500 eventos exitosos este mes</span>
            </div>

            {/* Título principal */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Tú crea,{" "}
                <span className="bg-gradient-to-r from-[#F95F2E] to-[#FF7E54] bg-clip-text text-transparent">
                  nosotros te cuidamos
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                FOMO es la plataforma todo en uno para organizar, vender y potenciar tus eventos. Con tecnología, 
                visibilidad y soporte.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Crear evento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Solicitar demo
              </Button>
            </div>
          </div>
          
          {/* Columna derecha (puedes agregar contenido aquí) */}
          <div className="hidden lg:block">
            {/* Contenido opcional para la columna derecha */}
          </div>
        </div>
      </div>
    </section>
  )
}
