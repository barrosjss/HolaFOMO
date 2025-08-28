'use client';

import { Card } from '@/components/ui/card';
import { Check, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ComparisonSectionProps, ComparisonItem } from '@/components/types/comparison.types';

const defaultComparisons: ComparisonItem[] = [
  {
    feature: 'Configuración inicial',
    fomo: '5 minutos',
    traditional: 'Días o semanas'
  },
  {
    feature: 'Procesamiento de pagos',
    fomo: 'Automático y seguro',
    traditional: 'Manual y complicado'
  },
  {
    feature: 'Promoción del evento',
    fomo: 'Incluida en la plataforma',
    traditional: 'Por tu cuenta',
    tooltip: 'Con FOMO, tu evento aparece en nuestro directorio y redes sociales'
  },
  {
    feature: 'Comisión por venta',
    fomo: '5% + IVA',
    traditional: 'Hasta 20% + IVA',
    tooltip: 'Otras plataformas cobran hasta un 20% por cada venta'
  },
  {
    feature: 'Soporte al organizador',
    fomo: true,
    traditional: false
  },
  {
    feature: 'Herramientas de marketing',
    fomo: true,
    traditional: false
  },
  {
    feature: 'Check-in con QR',
    fomo: true,
    traditional: 'Costo adicional',
    tooltip: 'Otras plataformas cobran extra por esta función'
  },
  {
    feature: 'Análisis y reportes',
    fomo: true,
    traditional: 'Limitados o de pago'
  }
];

export function ComparisonSection({
  title = 'FOMO vs Métodos Tradicionales',
  subtitle = 'Descubre por qué los organizadores están cambiando a FOMO',
  comparisons = defaultComparisons,
  cta = {
    text: 'Comenzar ahora',
    href: '/registro'
  },
  footerText = '* No hay costos ocultos. Todo lo que ves es lo que pagas.'
}: Partial<ComparisonSectionProps> = {}) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-12 border-b">
              <div className="col-span-5 p-4 font-medium">Características</div>
              <div className="col-span-3 p-4 font-medium text-center bg-primary/5">FOMO</div>
              <div className="col-span-4 p-4 font-medium text-center">Métodos tradicionales</div>
            </div>

            <div className="divide-y">
              {comparisons.map((item, index) => (
                <div key={index} className="grid grid-cols-12 hover:bg-muted/30 transition-colors">
                  <div className="col-span-5 p-4 flex items-center">
                    {item.feature}
                    {item.tooltip && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="ml-2 text-muted-foreground hover:text-foreground">
                              <AlertCircle className="h-4 w-4" />
                              <span className="sr-only">Más información</span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <div className="col-span-3 p-4 flex items-center justify-center bg-primary/5">
                    {typeof item.fomo === 'boolean' ? (
                      item.fomo ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <span className="font-medium">{item.fomo}</span>
                    )}
                  </div>
                  <div className="col-span-4 p-4 flex items-center justify-center">
                    {typeof item.traditional === 'boolean' ? (
                      item.traditional ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-muted-foreground">{item.traditional}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Button size="lg" className="px-8 py-6 text-base" asChild>
              <a href={cta.href}>
                {cta.text}
              </a>
            </Button>
            {footerText && (
              <p className="mt-4 text-sm text-muted-foreground">
                {footerText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
