"use client";

import Link from "next/link"

const Footer = () => {
  const footerLinks = [
    { title: "Privacidad", href: "/privacidad" },
    { title: "Términos y Condiciones", href: "/terminos" },
    { title: "Cookies", href: "/cookies" },
    { title: "Uso Aceptable", href: "/uso-aceptable" },
    { title: "Propiedad Intelectual", href: "/propiedad-intelectual" },
    { title: "Cancelaciones y Reembolsos", href: "/cancelaciones" },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Los eventos más relevantes te encuentran a ti.</h3>
            <p className="text-lg text-gray-600">¡No dejes que te cuenten lo que está pasando!</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-gray-600 hover:text-[#F95F2E] transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500">© 2024 EventosApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
