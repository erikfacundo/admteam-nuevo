"use client"

import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { SectionContainer } from "@/components/sections/section-container"
import { SectionHeader } from "@/components/sections/section-header"
import { ContactInfo } from "./contact-info"
import { ContactForm } from "./contact-form"
import { ContactMap } from "./contact-map"

export function Contact() {
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  return (
    <SectionContainer id="contacto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Contáctanos"
          description="Estamos listos para transformar tu vehículo. Solicita tu turno ahora"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <ContactInfo />
            <ContactMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

