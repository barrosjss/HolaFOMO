'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { FAQSectionProps, FAQItem } from '@/components/types/sections.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const defaultFAQs: FAQItem[] = [
  {
    question: '¿Cuánto cuesta usar FOMO?',
    answer: 'FOMO es completamente gratis para crear y publicar eventos. Solo cobramos una comisión del 5% + IVA por cada entrada vendida. No hay costos iniciales, mensualidades ni sorpresas.'
  },
  {
    question: '¿Cuándo recibo el dinero de las ventas?',
    answer: 'Recibes el 95% del dinero de cada venta en tu cuenta bancaria en un plazo de 24-48 horas después de la compra. Los pagos son automáticos y seguros.'
  },
  {
    question: '¿Qué tipos de eventos puedo crear?',
    answer: 'Puedes crear cualquier tipo de evento: conciertos, conferencias, talleres, obras de teatro, eventos deportivos, fiestas privadas, y mucho más. No hay restricciones.'
  },
  {
    question: '¿Puedo personalizar las entradas?',
    answer: 'Sí, puedes personalizar completamente las entradas con tu logo, colores y diseño. También puedes agregar códigos QR únicos para cada asistente.'
  },
  {
    question: '¿Cómo funciona el check-in de los asistentes?',
    answer: 'Cada asistente recibe un código QR único en su entrada. Puedes escanearlo con nuestra aplicación móvil para registrar su asistencia en tiempo real.'
  },
  {
    question: '¿Ofrecen soporte técnico?',
    answer: 'Sí, nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier duda o problema que puedas tener. Puedes contactarnos por chat, correo o teléfono.'
  }
];

export function FAQSection({
  title = 'Preguntas frecuentes',
  subtitle = 'Todo lo que necesitas saber sobre cómo funciona FOMO',
  faqs = defaultFAQs,
  cta = {
    text: 'Ver más preguntas',
    href: '/preguntas-frecuentes'
  }
}: Partial<FAQSectionProps> = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                id={`faq-${index}`}
                className={`px-6 pb-4 pt-0 transition-all duration-200 ${openIndex === index ? 'block' : 'hidden'}`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href={cta.href}>
              {cta.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
