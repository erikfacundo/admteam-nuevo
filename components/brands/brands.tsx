"use client"

import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { fadeIn } from "@/lib/animations"
import { BRANDS_DATA } from "@/lib/brands-data"
import { BrandItem } from "./brand-item"

export function Brands() {
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  return (
    <section className="py-12 sm:py-16 bg-adm-background border-y border-adm-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={fadeIn}
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
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center"
        >
          {BRANDS_DATA.map((brand, index) => (
            <BrandItem
              key={brand.name}
              brand={brand}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

