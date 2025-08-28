'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Zap } from 'lucide-react';
import { PricingSectionProps, PricingTier } from '@/components/types/sections.types';

const defaultTiers: PricingTier[] = [
  {
    name: 'Básico',
    price: 'Gratis',
    description: 'Perfecto para eventos pequeños y principiantes',
    features: [
      'Hasta 100 asistentes',
      'Check-in con QR',
      'Pagos seguros',
      'Soporte por correo electrónico',
      'Panel de control básico'
    ],
    cta: {
      text: 'Comenzar gratis',
      href: '/registro'
    }
  },
  {
    name: 'Profesional',
    price: '5% + IVA',
    description: 'Para organizadores que necesitan más',
    isPopular: true,
    features: [
      'Asistentes ilimitados',
      'Check-in con QR',
      'Pagos seguros',
      'Soporte prioritario',
      'Panel de control avanzado',
      'Ventas en múltiples canales',
      'Análisis y reportes',
      'Personalización de entradas'
    ],
    cta: {
      text: 'Elegir Profesional',
      href: '/registro?plan=pro'
    }
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    description: 'Para empresas y eventos de gran escala',
    features: [
      'Todas las características Profesional',
      'Cuenta dedicada',
      'Soporte 24/7',
      'Integraciones personalizadas',
      'Entrenamiento para equipos',
      'Contrato personalizado',
      'Facturación consolidada'
    ],
    cta: {
      text: 'Contactar ventas',
      href: '/contacto-empresas'
    }
  }
];

export function PricingSection({
  title = 'Crea eventos gratis. Paga solo si vendes.',
  subtitle = 'Sin costos iniciales, sin mensualidades. Solo una pequeña comisión por cada venta exitosa.',
  tiers = defaultTiers,
  disclaimer = '* Precios mostrados sin incluir IVA. La comisión se aplica sobre el valor total de cada transacción.'
}: Partial<PricingSectionProps> = {}) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F95F2E]/5 to-orange-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="relative">
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  Más popular
                </div>
              )}
              <Card 
                className={`h-full p-8 rounded-3xl border-0 shadow-lg flex flex-col transition-all duration-200 ${
                  tier.isPopular 
                    ? 'ring-2 ring-primary scale-105 bg-background' 
                    : 'bg-background/80 hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-foreground my-4">
                  {tier.price}
                </div>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  className={`w-full mt-auto ${
                    tier.isPopular 
                      ? 'bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90' 
                      : ''
                  }`}
                  asChild
                >
                  <a href={tier.cta.href}>
                    {tier.cta.text}
                    {tier.isPopular && <Zap className="ml-2 h-4 w-4" />}
                  </a>
                </Button>
              </Card>
            </div>
          ))}
        </div>
        
        {disclaimer && (
          <p className="mt-12 text-sm text-muted-foreground">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
