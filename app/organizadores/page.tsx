import { Navbar } from "@/components/organisms/navbar"
import { OrganizerHero } from "@/components/organizer-hero"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/organisms/footer"

export default function OrganizadoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <OrganizerHero />
        <BenefitsSection />
        <HowItWorksSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
