'use client';

import { Card } from '@/components/ui/card';
import { Upload, ShoppingCart, BarChart, type LucideIcon } from 'lucide-react';
import { HowItWorksSectionProps, StepItem } from '@/components/types/home.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const defaultSteps: StepItem[] = [
  {
    number: '01',
    icon: Upload,
    title: 'Publica tu evento',
    description: 'Crea tu evento en minutos con nuestro editor intuitivo. Añade fotos, descripción, precios y fechas.'
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Vende entradas',
    description: 'Las entradas se venden automáticamente a través de nuestra plataforma. Los compradores pagan de forma segura.'
  },
  {
    number: '03',
    icon: BarChart,
    title: 'Haz seguimiento en tiempo real',
    description: 'Monitorea las ventas, asistentes y métricas importantes desde tu panel de control.'
  }
];

export function HowItWorksSection({
  title = 'Cómo funciona',
  subtitle = 'Empieza a vender entradas en solo tres sencillos pasos',
  steps = defaultSteps,
  cta = {
    text: 'Comenzar ahora',
    href: '/registro'
  }
}: Partial<HowItWorksSectionProps> = {}) {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon as LucideIcon;
            return (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <Card className="relative h-full p-8 bg-background group-hover:bg-background/95 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href={cta.href}>
              {cta.text}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
