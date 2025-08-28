import Navbar from "@/components/organisms/navbar"
import { OrganizerHero } from "@/components/organisms/organizer/OrganizerHero"
import { BenefitsSection } from "@/components/organisms/home/benefits-section"
import { HowItWorksSection } from "@/components/organisms/home/how-it-works-section"
import { ComparisonSection } from "@/components/organisms/home/comparison-section"
import { TestimonialsSection } from "@/components/organisms/home/testimonials-section"
import { PricingSection } from "@/components/organisms/home/pricing-section"
import { FinalCTASection } from "@/components/organisms/home/final-cta-section"
import { FAQSection } from "@/components/organisms/home/faq-section"

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
    </div>
  )
}
