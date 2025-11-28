import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Settings, Zap, Wind, Gauge } from "lucide-react"
import Image from "next/image"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Mecánica Integral - Servicio Completo Automotriz | ADM TEAM",
  description: "Servicio completo de mecánica integral: mecánica general, electrónica e inyección, aire acondicionado, suspensión y frenos. Taller especializado en Parque Chas, CABA.",
  keywords: [
    "mecánica integral",
    "mecánica general autos",
    "electrónica automotriz",
    "inyección combustible",
    "aire acondicionado autos",
    "suspensión frenos",
    "diagnóstico computarizado",
    "taller mecánico Parque Chas"
  ],
  openGraph: {
    title: "Mecánica Integral | ADM TEAM",
    description: "Servicio completo de mecánica integral: mecánica general, electrónica, aire acondicionado y más.",
    url: `${siteUrl}/servicios/mecanica-integral`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/mecanica-integral`,
  },
}

const services = [
  {
    icon: Settings,
    title: "Mecánica General",
    description: "Fallas de motor, distribución, service o mantenimiento, sistemas de alimentación y encendido, transmisión, válvulas, medición de motor, hidráulica, embragues y más.",
    image: "/servicios/mecanica/diagnostico.jpg"
  },
  {
    icon: Zap,
    title: "Electrónica e Inyección",
    description: "Control, chequeo y cambio de inyectores. Sistema de encendido, lectura e interpretación de fallas. Diagnóstico Computarizado.",
    image: "/servicios/mecanica/diagnostico.jpg"
  },
  {
    icon: Wind,
    title: "Aire Acondicionado",
    description: "Reparación, cargas y mantenimiento de aire acondicionado. Antes de realizar la carga se realiza un control de pérdidas y fugas.",
    image: "/servicios/mecanica/diagnostico.jpg"
  },
  {
    icon: Gauge,
    title: "Suspensión y Frenos",
    description: "Control, cambio y mantenimiento de suspensión en general (amortiguadores, barras, bujes, brazos de dirección, etc). Discos, pastillas o campanas de freno.",
    image: "/servicios/personalizacion/suspension-1.jpg"
  },
]

export default function MecanicaIntegralPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Mecánica <span className="text-adm-primary">Integral</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              Servicio completo de mecánica automotriz para vehículos nacionales e importados. 
              Diagnóstico profesional, reparaciones y mantenimiento preventivo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-adm-background border-adm-primary/20 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
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
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              ¿Por qué elegir nuestro servicio de <span className="text-adm-primary">Mecánica Integral</span>?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Equipamiento de última generación para diagnóstico preciso</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Experiencia con vehículos nacionales e importados</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-adm-primary mt-1" />
                <p className="text-adm-secondary/80">Diagnóstico computarizado para identificar fallas rápidamente</p>
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
            Confía en nuestros expertos
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Solicita tu diagnóstico o presupuesto de reparación
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

