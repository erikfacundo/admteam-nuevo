"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Users, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Trabajamos solo con materiales y productos de primera línea para garantizar resultados excepcionales."
  },
  {
    icon: Users,
    title: "Experiencia",
    description: "Años de experiencia en el mercado automotriz, especializados en tuning y personalización."
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada detalle cuenta. Nos enfocamos en la perfección en cada proyecto que realizamos."
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Siempre al día con las últimas tendencias y tecnologías en el mundo del tuning."
  },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="sobre-nosotros" className="py-20 sm:py-24 lg:py-32 bg-adm-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
            Sobre <span className="text-adm-primary">Nosotros</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-lg bg-adm-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-adm-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-adm-secondary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-adm-secondary/70">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

