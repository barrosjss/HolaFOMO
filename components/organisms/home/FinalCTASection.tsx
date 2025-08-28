'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle, Users, CheckCircle } from 'lucide-react';
import { FinalCTASectionProps } from '@/components/types/sections.types';

const defaultFeatures = [
  'Sin costos iniciales',
  'Pagos seguros',
  'Soporte 24/7',
  'Herramientas profesionales'
];

export function FinalCTASection({
  title = '¿Listo para organizar tu próximo evento exitoso?',
  subtitle = 'Únete a cientos de organizadores que ya confían en FOMO para hacer crecer sus eventos',
  primaryCta = {
    text: 'Comenzar ahora',
    href: '/registro'
  },
  secondaryCta = {
    text: 'Hablar con un asesor',
    href: '/contacto'
  },
  features = defaultFeatures
}: Partial<FinalCTASectionProps> = {}) {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F95F2E]/20 to-orange-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F95F2E]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base bg-white text-gray-900 hover:bg-gray-100"
              asChild
            >
              <a href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base text-white border-white/30 hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href={secondaryCta.href}>
                <MessageCircle className="mr-2 h-5 w-5" />
                {secondaryCta.text}
              </a>
            </Button>
          </div>

          {features && features.length > 0 && (
            <div className="pt-12">
              <div className="flex flex-wrap justify-center gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-orange-400" />
              <span>+10,000 organizadores confían en nosotros</span>
            </div>
            <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-400" />
              <span>+50,000 eventos creados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
