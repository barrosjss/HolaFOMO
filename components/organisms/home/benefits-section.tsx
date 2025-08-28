import { Card } from "@/components/ui/card"
import { Ticket, Tag, FormInput, Bell, CreditCard, QrCode, BarChart3, ShieldCheck, Users, DollarSign } from 'lucide-react'
import React from 'react'

const benefits = [
  {
    icon: Ticket,
    title: "Vender Entradas digitales",
    description: "Ofrece tickets electrónicos de forma segura y eficiente, accesibles desde cualquier dispositivo."
  },
  {
    icon: Tag,
    title: "Crear Variables de Tickets",
    description: "Define diferentes tipos de entradas (VIP, Early Bird, General) con precios y cantidades personalizadas."
  },
  {
    icon: DollarSign, // Usando DollarSign para cupones de descuento
    title: "Crear cupones de descuentos",
    description: "Genera códigos de descuento para promociones especiales y fidelización de asistentes."
  },
  {
    icon: FormInput,
    title: "Personalizar Formularios",
    description: "Adapta los formularios de registro para recopilar la información específica que necesitas de tus asistentes."
  },
  {
    icon: Bell,
    title: "Enterarte de cada compra",
    description: "Recibe notificaciones en tiempo real cada vez que se vende una entrada para tu evento."
  },
  {
    icon: CreditCard,
    title: "Cobrar por múltiples medios",
    description: "Ofrece diversas opciones de pago seguras para que tus asistentes compren sin fricciones."
  },
  {
    icon: QrCode,
    title: "Control de acceso con QR",
    description: "Agiliza la entrada a tu evento con un sistema de escaneo de códigos QR rápido y fiable."
  },
  {
    icon: BarChart3,
    title: "Medir Métricas y Resultados",
    description: "Accede a un dashboard con estadísticas detalladas de ventas, asistencia y rendimiento de tu evento."
  },
  {
    icon: ShieldCheck, // Nuevo ícono para seguridad de datos
    title: "Manejar seguridad de los datos",
    description: "Garantiza la protección de la información sensible de tus eventos y asistentes con nuestra infraestructura segura."
  },
  {
    icon: Users,
    title: "Obtener datos de tus asistentes",
    description: "Recopila información valiosa sobre tu audiencia para futuras estrategias de marketing y eventos."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué organizar con FOMO?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las ventajas que te ofrecemos para hacer de tu evento un éxito rotundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F95F2E]/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-[#F95F2E]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
