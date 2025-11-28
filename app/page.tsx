import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

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

