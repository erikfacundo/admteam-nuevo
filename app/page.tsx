import { Hero } from "@/components/hero/hero"
import { Services } from "@/components/services/services"
import { Brands } from "@/components/brands/brands"
import { Gallery } from "@/components/gallery/gallery"
import { About } from "@/components/about/about"
import { Testimonials } from "@/components/testimonials/testimonials"
import { Contact } from "@/components/contact/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brands />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

