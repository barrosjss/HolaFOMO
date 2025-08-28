'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User as UserIcon, ArrowRight, Smartphone } from 'lucide-react';

type FormMode = 'login' | 'register';

// Animation variants
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" as const
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.2,
      ease: "easeIn" as const
    }
  }
} as const;

const toggleVariants = {
  active: { 
    backgroundColor: '#F95F2E',
    color: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },
  inactive: { 
    backgroundColor: 'transparent',
    color: '#6B7280',
    boxShadow: 'none'
  }
};

export function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const [mode, setMode] = useState<FormMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    countryCode: '+52', // Default to Mexico
    email: '',
    password: ''
  });
  
  // Check for mode in URL params
  useEffect(() => {
    const urlMode = searchParams?.get('mode') as FormMode;
    if (urlMode === 'register') {
      setMode('register');
    }
  }, [searchParams]);

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      countryCode: '+52',
      email: '',
      password: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa tu correo electrónico',
        variant: 'destructive',
      });
      return false;
    }

    if (!formData.password) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa tu contraseña',
        variant: 'destructive',
      });
      return false;
    }

    if (mode === 'register' && !formData.firstName) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa tu nombre',
        variant: 'destructive',
      });
      return false;
    }

    if (mode === 'register' && !formData.lastName) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa tu apellido',
        variant: 'destructive',
      });
      return false;
    }

    if (mode === 'register' && !formData.phone) {
      toast({
        title: 'Error',
        description: 'Por favor ingresa tu número de celular',
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would validate credentials with your backend
      if (formData.email && formData.password) {
        // Store auth state in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
        }));
        
        // Show loading toast
        const loadingToast = toast({
          title: mode === 'login' ? 'Iniciando sesión...' : 'Creando cuenta...',
          description: 'Por favor espera un momento...',
        });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update to success toast
        toast({
          ...loadingToast,
          title: mode === 'login' ? '¡Bienvenido de nuevo!' : '¡Cuenta creada!',
          description: mode === 'login' 
            ? 'Has iniciado sesión correctamente.'
            : 'Tu cuenta ha sido creada con éxito.',
          variant: 'default',
        });

        // Redirect to dashboard
        router.push('/dashboard');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Credenciales inválidas. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {mode === 'login' ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
          </h1>
          <p className="text-sm text-gray-500">
            {mode === 'login' 
              ? 'Inicia sesión para continuar' 
              : 'Regístrate para empezar a crear eventos'}
          </p>
        </div>

        {/* Toggle Switch */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-1 mt-6 mb-2 max-w-xs mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex relative">
            <motion.div 
              className="absolute inset-0 bg-[#F95F2E] rounded-lg z-0"
              layout
              variants={toggleVariants}
              initial={false}
              animate={mode === 'login' ? 'active' : 'inactive'}
              style={{
                left: mode === 'login' ? '0%' : '50%',
                right: mode === 'login' ? '50%' : '0%',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            />
            <motion.button
              type="button"
              onClick={() => setMode('login')}
              className="relative z-10 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              animate={mode === 'login' ? 'active' : 'inactive'}
              variants={toggleVariants}
            >
              Iniciar sesión
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setMode('register')}
              className="relative z-10 flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              animate={mode === 'register' ? 'active' : 'inactive'}
              variants={toggleVariants}
            >
              Registrarse
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Form */}
      <div className="px-8 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="pl-9 h-10 text-sm rounded-lg"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {mode === 'register' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-9 h-10 text-sm rounded-lg"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-10 text-sm rounded-lg"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de celular
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-28 h-10 text-sm border border-[#E6E7EB] rounded-lg pl-3 pr-8 appearance-none bg-white bg-no-repeat bg-[right_0.5rem_center] focus:outline-none focus:ring-0"
                      style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M7 10l5 5 5-5\'/%3E%3C/svg%3E")',
                        backgroundSize: '1rem',
                      }}
                    >
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+57">🇨🇴 +57</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-10 text-sm rounded-lg pl-3 w-full"
                      placeholder="Número de celular"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              {mode === 'login' && (
                <Link 
                  href="/forgot-password" 
                  className="text-xs text-[#F95F2E] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                className="pl-9 h-10 text-sm rounded-lg"
                placeholder="••••••••"
              />
            </div>
            {mode === 'register' && (
              <p className="text-xs text-gray-500 mt-1 px-1">
                La contraseña debe tener al menos 6 caracteres.
              </p>
            )}
          </div>

          <AnimatePresence mode="wait">
            <Button 
              type="submit" 
              className="w-full h-10 rounded-lg bg-[#F95F2E] hover:bg-[#F95F2E]/90 text-white font-medium text-sm"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </div>
              ) : (
                <>
                  {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </AnimatePresence>
        </form>
      </div>

      <div className="px-8 py-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
        <div className="text-center text-xs text-gray-500">
          <p className="text-xs text-gray-400">
            Al continuar, aceptas nuestros{' '}
            <Link href="/terms" className="text-[#8b5cf6] hover:underline hover:text-[#7c3aed] transition-colors">
              Términos de servicio
            </Link>{' '}
            y{' '}
            <Link href="/privacy" className="text-[#8b5cf6] hover:underline hover:text-[#7c3aed] transition-colors">
              Política de privacidad
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
