import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroContent() {
  return (
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
            <Button asChild size="lg" variant="default" className="group">
              <Link href="#contacto">
                Solicitar turno
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="#galeria">
                <Play className="mr-2 w-5 h-5" />
                Ver galería
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

