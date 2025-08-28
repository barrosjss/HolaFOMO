import Navbar from "@/components/organisms/navbar"
import { EventDetailContent } from "@/components/organisms/event/EventDetailContent"

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
    </div>
  )
}
