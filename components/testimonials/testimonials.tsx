"use client"

import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { SectionContainer } from "@/components/sections/section-container"
import { SectionHeader } from "@/components/sections/section-header"
import { fadeIn } from "@/lib/animations"
import { TESTIMONIALS_DATA } from "@/lib/testimonials-data"
import { TestimonialCard } from "./testimonial-card"

export function Testimonials() {
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  return (
    <SectionContainer>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : {}}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Lo que dicen nuestros Clientes"
          highlight="Clientes"
          description="La satisfacción de nuestros clientes es nuestra mejor carta de presentación"
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}

