import type { Metadata } from "next"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Servicios de Personalización, Detailing y Performance | ADM TEAM",
  description: "Servicios profesionales de personalización automotriz, detailing premium, PPF, polarizado, suspensiones deportivas, mecánica y restauración estética. Transformamos tu vehículo.",
  keywords: [
    "servicios tuning",
    "personalización vehículos",
    "detailing premium",
    "polarizado profesional",
    "PPF paint protection film",
    "suspensiones deportivas",
    "mecánica automotriz",
    "alineación balanceo",
    "restauración estética",
    "servicios automotrices argentina"
  ],
  openGraph: {
    title: "Servicios de Personalización y Detailing | ADM TEAM",
    description: "Servicios profesionales de personalización automotriz, detailing premium, PPF, polarizado y más. Transformamos tu vehículo.",
    url: `${siteUrl}/servicios`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios`,
  },
}

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 lg:py-32 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Nuestros <span className="text-adm-primary">Servicios</span>
            </h1>
            <p className="text-lg sm:text-xl text-adm-secondary/80 mb-8">
              Soluciones integrales para personalizar, proteger y mejorar tu vehículo. 
              Trabajamos con las mejores marcas y técnicas del mercado.
            </p>
            <Button asChild size="lg" variant="default">
              <Link href="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Services />
      <Brands />
      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            ¿Listo para transformar tu vehículo?
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Contáctanos y recibe un presupuesto personalizado para tu proyecto
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="/contacto">
              Contactar ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

