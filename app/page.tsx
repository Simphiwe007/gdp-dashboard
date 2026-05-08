import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ResultsSection } from "@/components/results-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BrandShowcaseSection } from "@/components/brand-showcase-section"
import { TrustSection } from "@/components/trust-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <HowItWorksSection />
      <BrandShowcaseSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
