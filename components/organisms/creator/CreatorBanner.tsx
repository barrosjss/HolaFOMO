'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CreatorBannerProps } from '@/components/types/creator.types';

export function CreatorBanner({
  title = '¿Eres creador de eventos?',
  description = 'Publica tus eventos gratis y llega a más personas. Conecta con tu audiencia y haz crecer tu comunidad.',
  cta = {
    text: 'Comenzar ahora',
    href: '/registro'
  },
  secondaryCta = {
    text: 'Ver ejemplos',
    href: '/eventos/destacados'
  },
  icon: Icon = Sparkles,
  backgroundImage = '/placeholder.svg?height=400&width=800',
  gradientFrom = 'from-[#736CED]',
  gradientTo = 'to-[#736CED]/80',
  badgeText = 'Nuevo'
}: Partial<CreatorBannerProps> = {}) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-background to-muted/30">
      <div className="container">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br text-white shadow-2xl">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="relative p-8 md:p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Icon className="h-8 w-8" />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                {badgeText && (
                  <span className="px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
                    {badgeText}
                  </span>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base"
                asChild
              >
                <a href={cta.href}>
                  {cta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
                asChild
              >
                <a href={secondaryCta.href}>
                  {secondaryCta.text}
                </a>
              </Button>
            </div>
          </div>
          
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
            }}
          ></div>
        </Card>
      </div>
    </section>
  );
}
