import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
