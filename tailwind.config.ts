import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Colores del tema
      colors: {
        // Colores base
        white: '#FFFFFF',
        black: '#111827',
        
        // Primarios
        primary: {
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD5C3',
          300: '#FFB999',
          400: '#FF8F66',
          500: '#F95F2E', // Color principal naranja FOMO
          600: '#E64A19',
          700: '#C43B0E',
          800: '#9D3110',
          900: '#7F2B12',
          DEFAULT: '#F95F2E',
          foreground: '#FFFFFF',
        },
        
        // Secundarios
        secondary: {
          50: '#F5F6FF',
          100: '#EBECFF',
          200: '#D6D9FF',
          300: '#B8BDFF',
          400: '#8F97FF',
          500: '#736CED', // Color secundario púrpura/azul
          600: '#5B4FE0',
          700: '#4A3CC4',
          800: '#3E359E',
          900: '#2D2672',
          DEFAULT: '#736CED',
          foreground: '#FFFFFF',
        },
        
        // Escala de grises
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        // Estados
        success: {
          DEFAULT: '#10B981',
          foreground: '#FFFFFF',
        },
        error: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#F59E0B',
          foreground: '#FFFFFF',
        },
        info: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        
        // Fondo y superficie
        background: '#FFFFFF',
        foreground: '#111827',
        
        // Compatibilidad con shadcn/ui
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
