'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { TestimonialItem, TestimonialsSectionProps } from '@/components/types/home.types';

const defaultTestimonials: TestimonialItem[] = [
  {
    name: 'María González',
    role: 'Organizadora de Conciertos',
    event: 'Festival de Jazz Madrid',
    result: '+300% en ventas',
    testimonial: 'FOMO transformó completamente cómo organizo mis eventos. La facilidad de uso y el soporte son excepcionales.',
    image: '/placeholder.svg?height=60&width=60',
    rating: 5
  },
  {
    name: 'Carlos Ruiz',
    role: 'Promotor de Eventos',
    event: 'Conferencia Tech Barcelona',
    result: '2,500 asistentes',
    testimonial: 'Nunca había vendido tantas entradas tan rápido. La plataforma es intuitiva y los pagos llegan puntualmente.',
    image: '/placeholder.svg?height=60&width=60',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Marketing',
    event: 'Feria de Empleo Digital',
    result: '95% de satisfacción',
    testimonial: 'La herramienta de check-in con QR fue un éxito total. Todo el equipo quedó impresionado con la facilidad de uso.',
    image: '/placeholder.svg?height=60&width=60',
    rating: 4
  }
];

export function TestimonialsSection({
  title = 'Lo que dicen nuestros organizadores',
  subtitle = 'Descubre cómo FOMO está ayudando a organizadores de eventos en todo el mundo',
  testimonials = defaultTestimonials
}: Partial<TestimonialsSectionProps> = {}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-4 flex-1">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="pt-4 mt-auto border-t border-border">
                <p className="text-sm font-medium">{testimonial.event}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Resultado:</span> {testimonial.result}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
