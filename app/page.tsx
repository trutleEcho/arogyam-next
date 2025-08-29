import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Features } from "@/components/features"
import { Security } from "@/components/security"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Security />
      {/*<ApiSection />*/}
      {/*<Pricing />*/}
      <Testimonials />
      <Footer />
    </main>
  )
}
