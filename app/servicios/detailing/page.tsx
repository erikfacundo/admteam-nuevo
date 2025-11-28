import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles, Droplets, Shield, Wrench } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Detailing Premium - Limpieza Profunda y Protección | ADM TEAM",
  description: "Servicio de detailing premium automotriz. Limpieza profunda, pulido, encerado, tratamiento cerámico y protección de pintura. Restaura tu vehículo con ADM TEAM.",
  keywords: [
    "detailing premium",
    "limpieza profunda autos",
    "pulido automotriz",
    "encerado profesional",
    "tratamiento cerámico",
    "protección pintura",
    "detailing argentina",
    "restauración pintura"
  ],
  openGraph: {
    title: "Detailing Premium | ADM TEAM",
    description: "Servicio de detailing premium automotriz. Limpieza profunda, pulido y protección de pintura.",
    url: `${siteUrl}/servicios/detailing`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/detailing`,
  },
}

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Profunda",
    description: "Limpieza exhaustiva interior y exterior. Eliminación de manchas, olores y suciedad acumulada."
  },
  {
    icon: Droplets,
    title: "Pulido y Encerado",
    description: "Pulido profesional para eliminar rayones y restaurar el brillo. Encerado de alta calidad para protección."
  },
  {
    icon: Shield,
    title: "Tratamiento Cerámico",
    description: "Aplicación de cerámico líquido o sólido para protección duradera y brillo excepcional."
  },
  {
    icon: Wrench,
    title: "Restauración de Pintura",
    description: "Corrección de defectos, eliminación de swirls y restauración completa del acabado original."
  },
]

export default function DetailingPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Detailing <span className="text-adm-primary">Premium</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              Servicio completo de detailing interior y exterior. Restauración de pintura, pulido, encerado 
              y protección de acabados con productos premium y técnicas profesionales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Nuestros Servicios de <span className="text-adm-primary">Detailing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-adm-background border-adm-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-adm-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-adm-secondary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-adm-secondary/70">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              ¿Por qué elegir nuestro Detailing Premium?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Productos de las mejores marcas del mercado (Menzerna, Sonax, Collinite)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Técnicas profesionales y equipamiento de última generación</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Atención al detalle y cuidado extremo de tu vehículo</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Garantía en todos nuestros trabajos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            Restaura el brillo de tu vehículo
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Solicita tu presupuesto de detailing premium
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

