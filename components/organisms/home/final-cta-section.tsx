import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F95F2E]/20 to-orange-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F95F2E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            ¿Listo para organizar tu próximo evento exitoso?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Únete a cientos de organizadores que ya confían en FOMO para hacer crecer sus eventos
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#F95F2E] text-white hover:bg-[#F95F2E]/90 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Empieza a organizar tu evento gratis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Solicita acompañamiento personalizado
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Eventos creados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-gray-400 text-sm">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
