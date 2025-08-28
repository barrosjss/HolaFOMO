import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    role: "Organizadora de Conciertos",
    event: "Festival de Jazz Madrid",
    result: "+300% en ventas",
    testimonial: "FOMO transformó completamente cómo organizo mis eventos. La facilidad de uso y el soporte son excepcionales.",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Promotor de Eventos",
    event: "Conferencia Tech Barcelona",
    result: "2,500 asistentes",
    testimonial: "Nunca había vendido tantas entradas tan rápido. La plataforma es intuitiva y los pagos llegan puntualmente.",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5
  },
  {
    name: "Ana Martín",
    role: "Directora de Teatro",
    event: "Obra 'El Sueño'",
    result: "Sold out en 48h",
    testimonial: "El dashboard me permite ver todo en tiempo real. Es como tener un asistente personal para mis eventos.",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizadores felices con FOMO</h2>
          <p className="text-xl text-gray-600">
            Descubre cómo otros organizadores han transformado sus eventos con nuestra plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50 rounded-2xl">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F95F2E] text-[#F95F2E]" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 leading-relaxed">"{testimonial.testimonial}"</p>

                {/* Result highlight */}
                <div className="bg-[#736CED]/10 p-3 rounded-xl"> {/* Usando el nuevo color */}
                  <div className="text-[#736CED] font-bold text-lg">{testimonial.result}</div> {/* Usando el nuevo color */}
                  <div className="text-gray-600 text-sm">{testimonial.event}</div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-2">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
