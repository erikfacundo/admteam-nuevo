"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Wrench,
  Sun,
  Sparkles,
  Shield,
  Gauge,
  Settings,
  AlignCenter,
  Paintbrush,
  Info
} from "lucide-react"
import { useInView } from "react-intersection-observer"

const services = [
  {
    icon: Wrench,
    title: "Personalización de vehículos",
    description: "Transformamos tu auto según tus gustos. Modificaciones estéticas y de performance con los mejores materiales del mercado.",
    seoText: "Servicio de personalización automotriz profesional. Modificaciones de tuning, body kits, y mejoras de rendimiento."
  },
  {
    icon: Sun,
    title: "Polarizado profesional",
    description: "Polarizado de alta calidad con garantía. Protección UV, privacidad y estilo para tu vehículo.",
    seoText: "Polarizado automotriz profesional con películas de calidad premium. Protección solar y estética."
  },
  {
    icon: Sparkles,
    title: "Detailing premium",
    description: "Detailing completo interior y exterior. Restauración de pintura, encerado, pulido y protección de acabados.",
    seoText: "Servicio de detailing automotriz premium. Limpieza profunda, pulido, encerado y protección de pintura."
  },
  {
    icon: Shield,
    title: "PPF — Paint Protection Film",
    description: "Protección invisible para tu pintura. Película transparente que previene rayones, chips y desgaste.",
    seoText: "Instalación de PPF (Paint Protection Film) profesional. Protección de pintura con película transparente."
  },
  {
    icon: Gauge,
    title: "Suspensiones deportivas",
    description: "Instalación y calibración de suspensiones deportivas. Mejora el manejo, estabilidad y estética de tu vehículo.",
    seoText: "Instalación de suspensiones deportivas y ajuste de altura. Mejora de performance y estética."
  },
  {
    icon: Settings,
    title: "Mecánica general",
    description: "Servicio completo de mecánica automotriz. Mantenimiento, reparaciones y diagnóstico profesional.",
    seoText: "Taller mecánico especializado. Reparaciones, mantenimiento y diagnóstico de vehículos."
  },
  {
    icon: AlignCenter,
    title: "Alineación y balanceo",
    description: "Alineación precisa y balanceo de ruedas. Extiende la vida útil de tus neumáticos y mejora la conducción.",
    seoText: "Servicio de alineación y balanceo de ruedas profesional. Mantenimiento de neumáticos y suspensión."
  },
  {
    icon: Paintbrush,
    title: "Restauración estética",
    description: "Restauración completa de la estética de tu vehículo. Pintura, reparación de carrocería y acabados premium.",
    seoText: "Restauración estética automotriz. Reparación de carrocería, pintura y acabados de calidad."
  },
]

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="servicios" className="py-20 sm:py-24 lg:py-32 bg-adm-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
              Nuestros <span className="text-adm-primary">Servicios</span>
            </h2>
            <p className="text-lg sm:text-xl text-adm-secondary/80 max-w-2xl mx-auto">
              Soluciones integrales para personalizar, proteger y mejorar tu vehículo
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-adm-primary/10 flex flex-col">
                    <CardHeader className="flex-1">
                      <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-adm-primary" />
                      </div>
                      <CardTitle className="text-xl text-adm-secondary">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-adm-secondary/70">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <p className="text-sm text-adm-secondary/60 mb-4 hidden">
                        {service.seoText}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group"
                        asChild
                      >
                        <Link href={
                          service.title === "Personalización de vehículos" ? "/servicios/personalizacion" :
                          service.title === "Detailing premium" ? "/servicios/detailing" :
                          service.title === "PPF — Paint Protection Film" ? "/servicios/ppf" :
                          service.title === "Polarizado profesional" ? "/servicios/polarizado" :
                          service.title === "Mecánica general" ? "/servicios/mecanica-integral" :
                          "/servicios"
                        }>
                          <Info className="mr-2 w-4 h-4" />
                          Más info
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

