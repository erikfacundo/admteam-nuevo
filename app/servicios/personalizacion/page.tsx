import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Wrench, Sparkles, Gauge, Shield } from "lucide-react"
import Image from "next/image"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Personalización de Vehículos - Tuning y Modificaciones | ADM TEAM",
  description: "Servicio profesional de personalización automotriz. Modificaciones estéticas, body kits, mejoras de performance y tuning. Transforma tu vehículo con ADM TEAM.",
  keywords: [
    "personalización vehículos",
    "tuning automotriz",
    "modificaciones autos",
    "body kits",
    "mejoras performance",
    "customización automotriz",
    "tuning argentina",
    "modificaciones estéticas"
  ],
  openGraph: {
    title: "Personalización de Vehículos | ADM TEAM",
    description: "Servicio profesional de personalización automotriz. Modificaciones estéticas y de performance.",
    url: `${siteUrl}/servicios/personalizacion`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/personalizacion`,
  },
}

const services = [
  {
    icon: Wrench,
    title: "Modificaciones Estéticas",
    description: "Body kits, spoilers, difusores y accesorios de alta calidad para transformar la apariencia de tu vehículo.",
    images: ["/servicios/personalizacion/audiocar-1.jpg", "/servicios/personalizacion/audiocar-2.jpg", "/servicios/personalizacion/audiocar-3.jpg"]
  },
  {
    icon: Sparkles,
    title: "Mejoras de Performance",
    description: "Chips, escape deportivo, admisión de aire y modificaciones del motor para aumentar potencia y rendimiento."
  },
  {
    icon: Gauge,
    title: "Suspensiones y Ruedas",
    description: "Instalación de suspensiones deportivas, ajuste de altura y montaje de llantas y neumáticos de alto rendimiento.",
    images: ["/servicios/personalizacion/suspension-1.jpg", "/servicios/personalizacion/suspension-2.jpg", "/servicios/personalizacion/suspension-3.jpg"]
  },
  {
    icon: Shield,
    title: "Protección y Detailing",
    description: "PPF, encerado, pulido y tratamientos de protección para mantener tu vehículo como nuevo."
  },
]

export default function PersonalizacionPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Personalización de <span className="text-adm-primary">Vehículos</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              Transformamos tu vehículo según tus gustos y necesidades. Modificaciones estéticas y de performance 
              con los mejores materiales y técnicas del mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Nuestros Servicios de <span className="text-adm-primary">Personalización</span>
          </h2>
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Card className="bg-adm-background border-adm-primary/20 h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-adm-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-adm-secondary mb-3">
                          {service.title}
                        </h3>
                        <p className="text-adm-secondary/70 leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  {service.images && (
                    <div className={`grid gap-4 ${service.images.length > 2 ? 'grid-cols-3' : 'grid-cols-2'} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {service.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`${service.title} ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              Proceso de Trabajo
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adm-primary text-adm-contrast flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-adm-secondary mb-2">Consulta y Presupuesto</h3>
                  <p className="text-adm-secondary/70">Analizamos tu proyecto y te brindamos un presupuesto detallado.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adm-primary text-adm-contrast flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-adm-secondary mb-2">Planificación</h3>
                  <p className="text-adm-secondary/70">Diseñamos el plan de trabajo y seleccionamos los mejores materiales.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adm-primary text-adm-contrast flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-adm-secondary mb-2">Ejecución</h3>
                  <p className="text-adm-secondary/70">Realizamos las modificaciones con precisión y cuidado extremo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adm-primary text-adm-contrast flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-adm-secondary mb-2">Entrega y Garantía</h3>
                  <p className="text-adm-secondary/70">Te entregamos tu vehículo transformado con garantía en todos nuestros trabajos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            ¿Listo para personalizar tu vehículo?
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Solicita tu presupuesto sin compromiso
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contacto">
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

