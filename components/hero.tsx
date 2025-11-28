"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/portada.mp4" type="video/mp4" />
          {/* Fallback si el video no carga */}
          <div className="w-full h-full bg-gradient-to-br from-adm-background via-adm-background to-adm-primary/20" />
        </video>
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-adm-secondary leading-tight">
              ADM TEAM:{" "}
              <span className="text-adm-primary">Personalización</span>,{" "}
              <span className="text-adm-primary">Detailing</span> y{" "}
              <span className="text-adm-primary">Performance</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-adm-secondary/90 mb-8 max-w-2xl mx-auto"
            >
              Transformamos tu vehículo en una obra de arte sobre ruedas. 
              Especialistas en tuning, detailing premium y modificaciones de alto rendimiento.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                variant="default"
                className="group"
              >
                <Link href="#contacto">
                  Solicitar turno
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group"
              >
                <Link href="#galeria">
                  <Play className="mr-2 w-5 h-5" />
                  Ver galería
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-adm-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-adm-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

