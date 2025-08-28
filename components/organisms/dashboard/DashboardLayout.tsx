'use client';

import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, Bell, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('profile-dropdown');
        dropdown?.classList.add('hidden');
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-[#F95F2E]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Floating Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-full">
        {/* Top Navigation */}
        <header className="sticky top-0 z-40 w-full bg-transparent">
          <div className="w-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo-fomo.png" 
                alt="FOMO Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Right side - Actions */}
            <div className="flex items-center space-x-2">
              {/* Create Event Button */}
              <div className="flex items-center space-x-2 bg-[#F95F2E] backdrop-blur-lg rounded-full p-1 shadow-lg border border-[#e65100] hover:bg-[#e65100] transition-colors">
                <Button 
                  variant="ghost" 
                  className="rounded-full h-10 px-4 text-sm font-medium text-white hover:bg-white/20 flex items-center space-x-2"
                  onClick={() => {
                    // Add your event creation logic here
                    console.log('Create new event clicked');
                  }}
                >
                  <span>+</span>
                  <span>Crear evento</span>
                </Button>
              </div>
              
              {/* Profile section */}
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-lg rounded-full p-1 shadow-lg border border-gray-100">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-10 w-10 hover:bg-gray-100"
                >
                  <Bell className="h-5 w-5 text-gray-600" />
                </Button>
                
                <div className="relative group" ref={dropdownRef}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-10 w-10 p-0 overflow-hidden"
                    onClick={() => {
                      const dropdown = document.getElementById('profile-dropdown');
                      dropdown?.classList.toggle('hidden');
                    }}
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#F95F2E] to-[#FF9A5A] flex items-center justify-center text-white font-semibold">
                      {user?.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                  </Button>
                
                  {/* Dropdown Menu */}
                  <div 
                    id="profile-dropdown" 
                    className="hidden absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'Usuario'}</p>
                      <p className="text-xs text-gray-500 truncate">{user?.email || 'usuario@ejemplo.com'}</p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          logout();
                          document.getElementById('profile-dropdown')?.classList.add('hidden');
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Cerrar sesión</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
