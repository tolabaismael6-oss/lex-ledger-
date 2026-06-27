import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsStrip } from "@/components/stats-strip"
import { About } from "@/components/about"
import { PracticeAreas } from "@/components/practice-areas"
import { Testimonials } from "@/components/testimonials"
import { CtaBand } from "@/components/cta-band"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsStrip />
      <About />
      <PracticeAreas />
      <Testimonials />
      <CtaBand />
      <SiteFooter />
    </main>
  )
}
