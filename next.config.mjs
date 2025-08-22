/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Cambia esto si deseas habilitar la optimización
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"], // Agrega el dominio aquí
  },
};

export default nextConfig;
