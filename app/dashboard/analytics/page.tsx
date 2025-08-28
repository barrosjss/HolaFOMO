import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Ticket, DollarSign, BarChart, TrendingUp, Download } from "lucide-react";

export default function AnalyticsPage() {
  // Mock data - in a real app, this would come from an API
  const stats = [
    {
      title: "Eventos totales",
      value: "24",
      change: "+12%",
      description: "desde el mes pasado",
      icon: Calendar,
    },
    {
      title: "Asistentes totales",
      value: "1,842",
      change: "+24%",
      description: "desde el mes pasado",
      icon: Users,
    },
    {
      title: "Tickets vendidos",
      value: "2,456",
      change: "+18%",
      description: "desde el mes pasado",
      icon: Ticket,
    },
    {
      title: "Ingresos totales",
      value: "$48,750",
      change: "+32%",
      description: "desde el mes pasado",
      icon: DollarSign,
    },
  ];

  const topEvents = [
    {
      id: 1,
      title: 'Concierto de Rock en Vivo',
      date: '15 Dic 2024',
      attendees: 350,
      revenue: 8750,
      ticketsSold: 350,
      capacity: 400,
    },
    {
      id: 2,
      title: 'Taller de Fotografía',
      date: '18 Dic 2024',
      attendees: 45,
      revenue: 5400,
      ticketsSold: 45,
      capacity: 50,
    },
    {
      id: 3,
      title: 'Feria Gastronómica',
      date: '20 Ene 2025',
      attendees: 1200,
      revenue: 18000,
      ticketsSold: 1200,
      capacity: 1500,
    },
  ];

  return (
    <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard del Organizador</h2>
          <p className="text-muted-foreground">
            Estadísticas y análisis de rendimiento de tus eventos
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">{stat.change}</span> {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Revenue Chart */}
          <Card className="col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ingresos</CardTitle>
                <Button variant="outline" size="sm" className="ml-auto gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Exportar
                  </span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Gráfico de ingresos (próximamente)
              </div>
            </CardContent>
          </Card>

          {/* Top Events */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Eventos más populares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEvents.map((event) => (
                  <div key={event.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{event.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Asistentes</span>
                        <span className="font-medium">
                          {event.attendees.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#F95F2E]"
                          style={{
                            width: `${(event.attendees / event.capacity) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ingresos</span>
                      <span className="font-medium">${event.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {/* NPS Score */}
          <Card>
            <CardHeader>
              <CardTitle>NPS Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold">72</div>
                      <div className="text-sm text-muted-foreground">de 100</div>
                    </div>
                  </div>
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#F95F2E"
                      strokeWidth="10"
                      strokeDasharray="282.743"
                      strokeDashoffset={282.743 * 0.28} // 100% - 72%
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>Excelente! Tu NPS está por encima del promedio.</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: 'María González',
                    event: 'Concierto de Rock en Vivo',
                    comment: 'Excelente organización y gran ambiente. ¡Volvería sin duda!',
                    rating: 5,
                    date: 'Hace 2 días',
                  },
                  {
                    id: 2,
                    name: 'Carlos Rodríguez',
                    event: 'Taller de Fotografía',
                    comment: 'Buen contenido pero el lugar estaba un poco pequeño.',
                    rating: 4,
                    date: 'Hace 1 semana',
                  },
                ].map((feedback) => (
                  <div key={feedback.id} className="space-y-2 border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{feedback.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {feedback.date}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {feedback.event}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">"{feedback.comment}"</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
