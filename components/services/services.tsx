"use client"

import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { SectionContainer } from "@/components/sections/section-container"
import { SectionHeader } from "@/components/sections/section-header"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { SERVICES_DATA } from "@/lib/services-data"
import { ServiceCard } from "./service-card"

export function Services() {
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  return (
    <SectionContainer id="servicios">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Nuestros Servicios"
          highlight="Servicios"
          description="Soluciones integrales para personalizar, proteger y mejorar tu vehículo"
        />

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              variants={staggerItem}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}

