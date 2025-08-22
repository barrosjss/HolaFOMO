import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from 'lucide-react'

export function CreatorBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-[#736CED] to-[#736CED]/80 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
          <div className="relative p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Sparkles className="h-8 w-8" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">¿Eres creador de eventos?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Publica tus eventos gratis y llega a más personas. Conecta con tu audiencia y haz crecer tu comunidad.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-white text-[#736CED] hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Empieza ahora
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
