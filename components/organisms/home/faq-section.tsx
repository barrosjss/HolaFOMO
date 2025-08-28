"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "¿Cuánto cuesta usar FOMO?",
    answer: "FOMO es completamente gratis para crear y publicar eventos. Solo cobramos una comisión del 5% + IVA por cada entrada vendida. No hay costos iniciales, mensualidades ni sorpresas."
  },
  {
    question: "¿Cuándo recibo el dinero de las ventas?",
    answer: "Recibes el 95% del dinero de cada venta en tu cuenta bancaria en un plazo de 24-48 horas después de la compra. Los pagos son automáticos y seguros."
  },
  {
    question: "¿Qué tipos de eventos puedo crear?",
    answer: "Puedes crear cualquier tipo de evento: conciertos, conferencias, talleres, obras de teatro, eventos deportivos, fiestas privadas, y mucho más. No hay restricciones."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Para nada. FOMO está diseñado para ser súper fácil de usar. En 5 minutos puedes tener tu evento publicado y vendiendo entradas. Además, nuestro equipo te ayuda en todo momento."
  },
  {
    question: "¿Cómo se promocionan mis eventos?",
    answer: "Tu evento aparece automáticamente en nuestra plataforma y se promociona en nuestras redes sociales. También puedes compartir el enlace directo en tus propios canales."
  },
  {
    question: "¿Qué pasa si necesito cancelar un evento?",
    answer: "Puedes cancelar tu evento en cualquier momento desde tu dashboard. Los compradores son notificados automáticamente y se procesan los reembolsos según tu política de cancelación."
  },
  {
    question: "¿Hay límite en el número de entradas?",
    answer: "No hay límites. Puedes vender desde 10 hasta 10,000+ entradas. La plataforma está preparada para eventos de cualquier tamaño."
  },
  {
    question: "¿Ofrecen soporte personalizado?",
    answer: "Sí, tenemos un equipo de soporte dedicado disponible 24/7 para ayudarte con cualquier duda o problema. También ofrecemos acompañamiento personalizado para eventos grandes."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre organizar eventos con FOMO
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 rounded-2xl overflow-hidden">
              <button
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
