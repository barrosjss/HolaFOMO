import Navbar from "@/components/organisms/navbar"
import { HeroSection } from "@/components/organisms/home/HeroSection"
import { EventsSection } from "@/components/organisms/events/EventsSection"
import { CreatorBanner } from "@/components/organisms/creator/CreatorBanner"
import Footer from "@/components/organisms/footer"

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
