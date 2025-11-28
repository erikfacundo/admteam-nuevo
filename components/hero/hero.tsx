"use client"

import { HeroVideo } from "./hero-video"
import { HeroContent } from "./hero-content"
import { HeroScrollIndicator } from "./hero-scroll-indicator"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <HeroVideo />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  )
}

