import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'FOMO - Encuentra los mejores eventos',
  description: 'La plataforma que conecta tus pasiones con experiencias únicas',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          :root {
            --font-sans: ${GeistSans.style.fontFamily};
            --font-mono: ${GeistMono.style.fontFamily};
          }
          
          html {
            font-family: var(--font-sans);
            scroll-behavior: smooth;
          }
          
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
