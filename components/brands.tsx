"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const brands = [
  { name: "Menzerna", src: "/marcas/menzerna.webp" },
  { name: "Alcance", src: "/marcas/alcance.webp" },
  { name: "Collinite", src: "/marcas/collinite.webp" },
  { name: "Hendlex", src: "/marcas/hendlex.webp" },
  { name: "Soft", src: "/marcas/soft.webp" },
  { name: "Rupes", src: "/marcas/rupes.webp" },
  { name: "Sonax", src: "/marcas/sonax.webp" },
  { name: "Vonix", src: "/marcas/vonix.webp" },
]

export function Brands() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 sm:py-16 bg-adm-background border-y border-adm-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm sm:text-base text-adm-secondary/60 uppercase tracking-wider mb-2">
            Marcas Premium
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-adm-secondary">
            Trabajamos con las mejores marcas del mercado
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center p-4 bg-adm-background/50 rounded-lg hover:bg-adm-primary/5 transition-colors"
            >
              <div className="relative w-full h-12 sm:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

