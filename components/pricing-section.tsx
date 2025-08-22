import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Zap } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F95F2E]/5 to-orange-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Crea eventos gratis. Paga solo si vendes.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sin costos iniciales, sin mensualidades. Solo una pequeña comisión por cada venta exitosa.
          </p>
        </div>

        <Card className="p-8 lg:p-12 rounded-3xl border-0 shadow-2xl bg-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F95F2E]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/50 rounded-full blur-xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#736CED]/10 rounded-full px-4 py-2 mb-6"> {/* Usando el nuevo color */}
              <Zap className="w-4 h-4 text-[#736CED]" /> {/* Usando el nuevo color */}
              <span className="text-[#736CED] font-medium text-sm">Modelo transparente</span> {/* Usando el nuevo color */}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona nuestro modelo?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#736CED] mt-0.5 flex-shrink-0" /> {/* Usando el nuevo color */}
                    <span className="text-gray-700">Crea y publica eventos completamente gratis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#736CED] mt-0.5 flex-shrink-0" /> {/* Usando el nuevo color */}
                    <span className="text-gray-700">Solo pagas una comisión del 5% + IVA por venta</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#736CED] mt-0.5 flex-shrink-0" /> {/* Usando el nuevo color */}
                    <span className="text-gray-700">Recibe el 95% de cada venta en 24-48h</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#736CED] mt-0.5 flex-shrink-0" /> {/* Usando el nuevo color */}
                    <span className="text-gray-700">Sin costos ocultos ni sorpresas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#736CED]/5 p-8 rounded-2xl"> {/* Usando el nuevo color */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#736CED] mb-2">5%</div> {/* Usando el nuevo color */}
                  <div className="text-gray-600 mb-4">Comisión por venta</div>
                  <div className="text-sm text-gray-500 mb-6">
                    Ejemplo: Si vendes una entrada de €20, recibes €19 y FOMO recibe €1
                  </div>
                  <Button className="bg-[#F95F2E] text-white hover:bg-[#F95F2E]/90 rounded-full px-6 py-2">
                    Empezar gratis ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
