import { Navbar } from "@/components/organisms/navbar"
import { Footer } from "@/components/organisms/footer"
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
      <main>
        <EventDetailContent eventId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
