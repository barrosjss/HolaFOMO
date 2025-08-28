"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Plus, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Inicio",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      name: "Crear",
      icon: Plus,
      href: "/dashboard/create",
      active: pathname.startsWith("/dashboard/create"),
    },
    {
      name: "Historial",
      icon: Clock,
      href: "/dashboard/history",
      active: pathname.startsWith("/dashboard/history"),
    },
    {
      name: "Perfil",
      icon: User,
      href: "/dashboard/profile",
      active: pathname.startsWith("/dashboard/profile"),
    },
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-100 overflow-hidden">
        <ul className="flex flex-col space-y-1">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "w-12 h-12 flex items-center justify-center rounded-full transition-colors relative",
                  item.active
                    ? "text-[#F95F2E]"
                    : "text-gray-600 hover:bg-gray-100"
                )}
                title={item.name}
              >
                <div className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                  item.active ? "bg-[#F95F2E]/10" : ""
                )}>
                  <item.icon className="w-5 h-5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
