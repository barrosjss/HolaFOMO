"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Ticket, Mail, Phone, MapPin, Bell, Lock, CreditCard, User, Globe } from "lucide-react";

type Role = 'organizer' | 'attendee';

export default function SettingsPage() {
  const [activeRole, setActiveRole] = useState<Role>('organizer');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">
          Gestiona la configuración de tu cuenta y preferencias
        </p>
      </div>

      {/* Role Toggle */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setActiveRole('organizer')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg flex items-center space-x-2 ${
              activeRole === 'organizer'
                ? 'bg-[#F95F2E] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Organizador</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveRole('attendee')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg flex items-center space-x-2 ${
              activeRole === 'attendee'
                ? 'bg-[#F95F2E] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Ticket className="h-4 w-4" />
            <span>Asistente</span>
          </button>
        </div>
      </div>

      {activeRole === 'organizer' ? (
        <OrganizerSettings />
      ) : (
        <AttendeeSettings />
      )}
    </div>
  );
}

function OrganizerSettings() {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList>
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Perfil
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notificaciones
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Facturación
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          Seguridad
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Perfil del Organizador</CardTitle>
            <CardDescription>
              Actualiza la información de tu perfil de organizador.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <Button variant="outline" size="sm">Cambiar logo</Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, GIF o PNG. Tamaño máximo 2MB
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nombre de la Empresa</Label>
                  <Input id="company-name" defaultValue="Mi Empresa SAS" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nit">NIT</Label>
                  <Input id="nit" defaultValue="900.123.456-7" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" defaultValue="contacto@miempresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" defaultValue="+57 300 123 4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" defaultValue="Carrera 15 # 88-64, Bogotá" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">Guardar cambios</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>
              Configura cómo recibes notificaciones sobre tus eventos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-medium">Nuevas ventas</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir notificaciones cuando se realicen nuevas ventas
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-medium">Preguntas de asistentes</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir notificaciones cuando los asistentes pregunten algo
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-medium">Recordatorios de pago</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir recordatorios de pagos pendientes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Facturación</CardTitle>
            <CardDescription>
              Gestiona tu suscripción y métodos de pago.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Plan Actual</h4>
                  <div className="flex items-center space-x-2">
                    <span>Plan Empresarial</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Activo
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    $99,900/mes - Facturación mensual
                  </p>
                </div>
                <Button variant="outline">Cambiar plan</Button>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Método de pago</h4>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                    <span className="text-xs font-medium">VISA</span>
                  </div>
                  <span>•••• •••• •••• 4242</span>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Cambiar
                  </Button>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Próxima factura</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Factura #INV-00123</p>
                    <p className="text-sm text-muted-foreground">
                      Próximo cargo: 15 de cada mes
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver factura
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Seguridad</CardTitle>
            <CardDescription>
              Actualiza tu contraseña y configura la autenticación de dos factores.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Contraseña actual</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva contraseña</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Autenticación de dos factores</h4>
                    <p className="text-sm text-muted-foreground">
                      Añade una capa adicional de seguridad a tu cuenta
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">Actualizar seguridad</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function AttendeeSettings() {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList>
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Perfil
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notificaciones
        </TabsTrigger>
        <TabsTrigger value="privacy" className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          Privacidad
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Mi Perfil</CardTitle>
            <CardDescription>
              Actualiza tu información personal y preferencias de cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <Button variant="outline" size="sm">Cambiar foto</Button>
                <p className="text-xs text-muted-foreground">
                  JPG, GIF o PNG. Tamaño máximo 2MB
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" defaultValue="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" defaultValue="Pérez" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" defaultValue="juan@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <div className="flex space-x-2">
                    <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>+57</option>
                      <option>+1</option>
                      <option>+52</option>
                    </select>
                    <Input id="phone" type="tel" defaultValue="300 123 4567" />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Biografía</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Cuéntanos sobre ti..." 
                    defaultValue="Apasionado por los eventos y experiencias inolvidables."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit">Guardar cambios</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Preferencias de notificación</CardTitle>
            <CardDescription>
              Personaliza cómo recibes notificaciones sobre eventos y actividades.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Recordatorios de eventos</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir recordatorios antes de los eventos a los que asistes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Actualizaciones de eventos</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir notificaciones sobre cambios en los eventos
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Ofertas y promociones</h4>
                  <p className="text-sm text-muted-foreground">
                    Recibir ofertas especiales y descuentos
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="privacy">
        <Card>
          <CardHeader>
            <CardTitle>Privacidad y Seguridad</CardTitle>
            <CardDescription>
              Controla tu privacidad y configura la seguridad de tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Cambiar contraseña</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password-attendee">Contraseña actual</Label>
                    <Input id="current-password-attendee" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password-attendee">Nueva contraseña</Label>
                    <Input id="new-password-attendee" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password-attendee">Confirmar nueva contraseña</Label>
                    <Input id="confirm-password-attendee" type="password" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Autenticación de dos factores</h4>
                    <p className="text-sm text-muted-foreground">
                      Añade una capa adicional de seguridad a tu cuenta
                    </p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium">Visibilidad del perfil</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="profile-visibility">Perfil público</Label>
                        <p className="text-sm text-muted-foreground">
                          Hacer que tu perfil sea visible para otros usuarios
                        </p>
                      </div>
                      <Switch id="profile-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="activity-visibility">Mostrar eventos asistidos</Label>
                        <p className="text-sm text-muted-foreground">
                          Mostrar los eventos a los que has asistido en tu perfil
                        </p>
                      </div>
                      <Switch id="activity-visibility" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="destructive" className="w-full sm:w-auto">
                  Eliminar cuenta
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">
                  Al eliminar tu cuenta, se eliminarán todos tus datos de forma permanente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
