import { Card } from "@/components/ui/card"
import { Upload, ShoppingCart, BarChart } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Publica tu evento",
    description: "Crea tu evento en minutos con nuestro editor intuitivo. Añade fotos, descripción, precios y fechas."
  },
  {
    number: "02", 
    icon: ShoppingCart,
    title: "Vende entradas",
    description: "Las entradas se venden automáticamente a través de nuestra plataforma. Los compradores pagan de forma segura."
  },
  {
    number: "03",
    icon: BarChart,
    title: "Haz seguimiento en tiempo real",
    description: "Monitorea ventas, ingresos y estadísticas desde tu dashboard. Recibe notificaciones de cada venta."
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Así de simple es usar FOMO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 3 pasos tendrás tu evento publicado y vendiendo entradas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50 rounded-2xl">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#736CED] rounded-2xl flex items-center justify-center mx-auto mb-4"> {/* Usando el nuevo color */}
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-[#736CED] font-bold text-lg mb-2">{step.number}</div> {/* Usando el nuevo color */}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
              
              {/* Flecha conectora */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-[#736CED]/30"></div> {/* Usando el nuevo color */}
                  <div className="w-0 h-0 border-l-4 border-l-[#736CED]/30 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div> {/* Usando el nuevo color */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
