import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventDetailContent } from "@/components/event-detail-content"

interface EventDetailPageProps {
  params: {
    id: string
  }
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <EventDetailContent eventId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
