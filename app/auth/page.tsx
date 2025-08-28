'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import Navbar from '@/components/organisms/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (!isLogin && !name) {
      setError('Por favor ingresa tu nombre');
      return;
    }

    try {
      setIsSubmitting(true);
      
      if (isLogin) {
        await login(email, password);
        toast.success('¡Bienvenido de nuevo!');
        router.push('/dashboard');
      } else {
        // Handle signup logic here
        // For now, just log in the user
        await login(email, password);
        toast.success('¡Cuenta creada con éxito!');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      toast.error('Error al iniciar sesión');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar specialMode={true} />
      <div className="max-w-md mx-auto px-4 pt-20 pb-12">
        {/* Auth Toggle */}
        <div className="flex justify-center mb-10">
          <Tabs 
            defaultValue="login" 
            value={isLogin ? "login" : "signup"} 
            onValueChange={(value) => setIsLogin(value === "login")}
            className="w-full max-w-xs"
          >
            <TabsList className="bg-gray-100 p-1.5 h-auto rounded-xl w-full">
              <TabsTrigger
                value="login"
                className="flex-1 py-2 px-4 text-sm rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#F95F2E]"
              >
                Iniciar sesión
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="flex-1 py-2 px-4 text-sm rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#F95F2E]"
              >
                Crear cuenta
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Auth Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
            </h1>
            <p className="text-gray-500 text-sm">
              {isLogin 
                ? 'Ingresa con tu correo electrónico' 
                : 'Comienza tu experiencia en FOMO'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#F95F2E]/20"
                    required={!isLogin}
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#F95F2E]/20"
                  required
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-[#F95F2E]/20"
                  required
                  minLength={isLogin ? 1 : 6}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              {error && (
                <div className="text-red-500 text-sm text-center mb-4">
                  {error}
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-[#F95F2E] hover:bg-[#E55627] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F95F2E] h-12 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isLogin ? 'Iniciando sesión...' : 'Creando cuenta...'}
                  </>
                ) : (
                  <>
                    {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}