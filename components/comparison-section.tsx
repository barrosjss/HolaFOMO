import { Card } from "@/components/ui/card"
import { Check, X } from 'lucide-react'

const comparisons = [
  {
    feature: "Configuración inicial",
    fomo: "5 minutos",
    traditional: "Días o semanas"
  },
  {
    feature: "Procesamiento de pagos",
    fomo: "Automático y seguro",
    traditional: "Manual y complicado"
  },
  {
    feature: "Promoción del evento",
    fomo: "Incluida en la plataforma",
    traditional: "Por tu cuenta"
  },
  {
    feature: "Soporte técnico",
    fomo: "24/7 personalizado",
    traditional: "No disponible"
  },
  {
    feature: "Estadísticas y reportes",
    fomo: "En tiempo real",
    traditional: "Manualmente"
  },
  {
    feature: "Costo inicial",
    fomo: "€0",
    traditional: "€500-2000+"
  }
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FOMO vs métodos tradicionales</h2>
          <p className="text-xl text-gray-600">
            Descubre por qué miles de organizadores prefieren FOMO
          </p>
        </div>

        <Card className="overflow-hidden rounded-2xl border-0 shadow-xl">
          <div className="bg-white">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b">
              <div className="p-6">
                <h3 className="font-semibold text-gray-900">Característica</h3>
              </div>
              <div className="p-6 bg-[#736CED]/5 border-l border-r border-[#736CED]/20"> {/* Usando el nuevo color */}
                <h3 className="font-semibold text-[#736CED] flex items-center"> {/* Usando el nuevo color */}
                  <Check className="w-5 h-5 mr-2" />
                  Con FOMO
                </h3>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-600 flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  Métodos tradicionales
                </h3>
              </div>
            </div>

            {/* Comparisons */}
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 border-b last:border-b-0">
                <div className="p-6">
                  <span className="font-medium text-gray-900">{comparison.feature}</span>
                </div>
                <div className="p-6 bg-[#736CED]/5 border-l border-r border-[#736CED]/20"> {/* Usando el nuevo color */}
                  <span className="text-[#736CED] font-medium">{comparison.fomo}</span> {/* Usando el nuevo color */}
                </div>
                <div className="p-6">
                  <span className="text-gray-600">{comparison.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
