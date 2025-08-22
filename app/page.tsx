import { Navbar } from "@/components/organisms/navbar"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { CreatorBanner } from "@/components/creator-banner"
import { Footer } from "@/components/organisms/footer"

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <EventsSection />
          <CreatorBanner />
        </main>
        <Footer />
      </div>
    </>
  )
}
