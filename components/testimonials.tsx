"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    vehicle: "BMW M3 E46",
    rating: 5,
    text: "Excelente trabajo en el detailing de mi M3. El equipo de ADM TEAM es profesional y el resultado superó mis expectativas. Totalmente recomendado.",
  },
  {
    name: "María González",
    vehicle: "Audi A4",
    rating: 5,
    text: "Instalaron el PPF en mi Audi y quedó perfecto. Muy cuidadosos con el vehículo y el resultado es impecable. Volveré sin dudas.",
  },
  {
    name: "Juan Pérez",
    vehicle: "Mercedes AMG",
    rating: 5,
    text: "El mejor taller de tuning que conozco. Hicieron modificaciones increíbles en mi AMG. Profesionales de verdad.",
  },
  {
    name: "Ana Rodríguez",
    vehicle: "VW Golf GTI",
    rating: 5,
    text: "Servicio de polarizado excelente. Buena atención, precio justo y trabajo de calidad. Muy satisfecha con el resultado.",
  },
  {
    name: "Roberto Silva",
    vehicle: "Ford Mustang",
    rating: 5,
    text: "Restauración estética perfecta. Mi Mustang quedó como nuevo. El equipo sabe lo que hace y se nota la pasión por su trabajo.",
  },
  {
    name: "Laura Fernández",
    vehicle: "Porsche 911",
    rating: 5,
    text: "Detailing premium de primera. Cuidaron cada detalle de mi 911. El servicio es excepcional y el resultado espectacular.",
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-adm-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
            Lo que dicen nuestros <span className="text-adm-primary">Clientes</span>
          </h2>
          <p className="text-lg sm:text-xl text-adm-secondary/80 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-adm-primary text-adm-primary"
                      />
                    ))}
                  </div>
                  <p className="text-adm-secondary/90 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-adm-primary/20 pt-4">
                    <p className="font-bold text-adm-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-adm-primary">
                      {testimonial.vehicle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

