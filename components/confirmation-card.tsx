import Link from "next/link"

export default function ConfirmationCard() {
  return (
    <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 md:p-12 text-center">
        <div className="w-auto mx-auto mb-6">
          <img
            src="/goodbye-illustration.png"
            alt="Ilustración de despedida"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Listo! Ya tenemos tu opinión 🔥</h1>

        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto">
          Gracias por contarnos cómo viviste la experiencia. Esto no se queda en una encuesta más: lo usamos para
          mejorar todo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/eventos"
            className="bg-[#F47B56] hover:bg-[#e06a45] text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Descubrir eventos
          </Link>
          <Link
            href="/"
            className="border border-[#F47B56] text-[#F47B56] hover:bg-gray-50 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-500">
            ¿Tienes alguna pregunta?{" "}
            <a href="/contacto" className="text-[#F47B56] hover:underline">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
