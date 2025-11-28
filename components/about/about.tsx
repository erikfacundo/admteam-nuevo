"use client"

import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { SectionContainer } from "@/components/sections/section-container"
import { SectionHeader } from "@/components/sections/section-header"
import { fadeInUp } from "@/lib/animations"
import { ABOUT_VALUES } from "@/lib/about-data"
import { ValueCard } from "./value-card"

export function About() {
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  return (
    <SectionContainer id="sobre-nosotros">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : {}}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Sobre Nosotros" highlight="Nosotros" />

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : {}}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <h3 className="text-2xl font-bold text-adm-primary mb-4">Nuestra Historia</h3>
            <p className="text-lg text-adm-secondary/90 mb-6">
              Bienvenidos a ADM TEAM, donde nos especializamos en brindar servicios integrales de 
              <strong className="text-adm-primary"> mecánica</strong>, <strong className="text-adm-primary">estética automotriz</strong> y 
              <strong className="text-adm-primary"> mantenimiento preventivo</strong> para vehículos tanto 
              <strong className="text-adm-primary"> nacionales</strong> como <strong className="text-adm-primary">importados</strong>. 
              Con años de experiencia en el sector automotriz, nuestra misión es asegurar que cada vehículo 
              que pasa por nuestras manos reciba el más alto nivel de cuidado y atención.
            </p>
            <p className="text-lg text-adm-secondary/90 mb-6">
              Desde nuestros inicios, nos comprometimos a ofrecer un <strong className="text-adm-primary">servicio de calidad</strong> 
              y a lograr la <strong className="text-adm-primary">satisfacción</strong> total de nuestros clientes. Hemos construido 
              nuestra reputación sobre la base de la <strong className="text-adm-primary">confianza</strong> y la 
              <strong className="text-adm-primary"> excelencia</strong> en cada trabajo, lo que nos ha permitido establecernos 
              como líderes en el mercado automotriz en <strong className="text-adm-primary">Parque Chas, CABA</strong>.
            </p>
            <p className="text-lg text-adm-secondary/90 mb-6">
              Nuestro compromiso se refleja en la excelencia de cada proyecto, ya sea una 
              <strong className="text-adm-primary"> reparación automotriz</strong>, un servicio de 
              <strong className="text-adm-primary"> detailing</strong> especializado, o la aplicación de técnicas avanzadas en 
              <strong className="text-adm-primary"> sacabollos</strong> y <strong className="text-adm-primary">pintura automotriz</strong>. 
              Además, somos pioneros en el uso de <strong className="text-adm-primary">PPF (Paint Protection Film)</strong> de alta calidad, 
              incluyendo productos de la marca <strong className="text-adm-primary">STEK</strong> y la línea 
              <strong className="text-adm-primary"> DYNO</strong>, para proteger la estética y el valor de cada vehículo.
            </p>

            <h3 className="text-2xl font-bold text-adm-primary mb-4 mt-8">Nuestra Misión</h3>
            <p className="text-lg text-adm-secondary/90 mb-6">
              Proporcionar servicios de personalización, detailing y performance de la más alta calidad, 
              superando las expectativas de nuestros clientes y estableciendo nuevos estándares en la 
              industria automotriz.
            </p>

            <h3 className="text-2xl font-bold text-adm-primary mb-4 mt-8">Nuestros Valores</h3>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ABOUT_VALUES.map((value, index) => (
            <ValueCard
              key={value.title}
              value={value}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}

