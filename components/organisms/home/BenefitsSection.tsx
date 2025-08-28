'use client';

import { Card } from '@/components/ui/card';
import { Ticket, Tag, FormInput, Bell, CreditCard, QrCode, BarChart3, ShieldCheck, Users, DollarSign, type LucideIcon } from 'lucide-react';
import { BenefitsSectionProps, BenefitItem } from '@/components/types/home.types';

const defaultBenefits: BenefitItem[] = [
  {
    icon: Ticket,
    title: 'Vender Entradas digitales',
    description: 'Ofrece tickets electrónicos de forma segura y eficiente, accesibles desde cualquier dispositivo.'
  },
  {
    icon: Tag,
    title: 'Crear Variables de Tickets',
    description: 'Define diferentes tipos de entradas (VIP, Early Bird, General) con precios y cantidades personalizadas.'
  },
  {
    icon: DollarSign,
    title: 'Crear cupones de descuentos',
    description: 'Genera códigos de descuento para promociones especiales y fidelización de asistentes.'
  },
  {
    icon: FormInput,
    title: 'Formularios personalizados',
    description: 'Recopila información específica de los asistentes con formularios adaptados a tus necesidades.'
  },
  {
    icon: Bell,
    title: 'Notificaciones automáticas',
    description: 'Envía recordatorios y actualizaciones a los asistentes automáticamente.'
  },
  {
    icon: CreditCard,
    title: 'Múltiples métodos de pago',
    description: 'Acepta pagos con tarjeta, transferencia y otros métodos populares en tu región.'
  },
  {
    icon: QrCode,
    title: 'Check-in con QR',
    description: 'Escanea códigos QR para un registro rápido y sin complicaciones en la entrada.'
  },
  {
    icon: BarChart3,
    title: 'Estadísticas en tiempo real',
    description: 'Monitorea las ventas y el rendimiento de tus eventos con paneles intuitivos.'
  },
  {
    icon: ShieldCheck,
    title: 'Protección contra fraude',
    description: 'Sistema avanzado de seguridad para proteger tus ventas y a tus asistentes.'
  },
  {
    icon: Users,
    title: 'Gestión de asistentes',
    description: 'Administra fácilmente la lista de asistentes y comunícate con ellos cuando lo necesites.'
  }
];

export function BenefitsSection({
  title = 'Todo lo que necesitas para tu evento',
  subtitle = 'Simplificamos la gestión de eventos para que te enfoques en lo que realmente importa',
  benefits = defaultBenefits,
}: Partial<BenefitsSectionProps> = {}) {
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
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon as LucideIcon;
            return (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
