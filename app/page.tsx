import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"
import { SearchHero } from "@/components/search-hero"

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <SearchHero />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
