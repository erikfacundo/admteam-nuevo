import type { Metadata } from "next"
import { Gallery } from "@/components/gallery/gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Galería de Trabajos - Personalización y Detailing | ADM TEAM",
  description: "Galería de nuestros trabajos en personalización automotriz, detailing premium, PPF, polarizado y modificaciones. Descubre la calidad ADM TEAM.",
  keywords: [
    "galería tuning",
    "trabajos personalización",
    "proyectos detailing",
    "galería PPF",
    "modificaciones automotrices",
    "antes y después detailing",
    "proyectos automotrices argentina"
  ],
  openGraph: {
    title: "Galería de Trabajos | ADM TEAM",
    description: "Galería de nuestros trabajos en personalización automotriz, detailing premium y modificaciones.",
    url: `${siteUrl}/galeria`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/galeria`,
  },
}

export default function GaleriaPage() {
  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 bg-adm-background border-b border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Nuestra <span className="text-adm-primary">Galería</span>
            </h1>
            <p className="text-lg sm:text-xl text-adm-secondary/80 mb-8">
              Descubre nuestros trabajos más destacados en personalización, detailing y modificaciones. 
              Cada proyecto es único y refleja nuestra pasión por la excelencia.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">
                Solicitar tu proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Gallery />
      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            ¿Te gustó lo que viste?
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Transforma tu vehículo con la misma calidad y dedicación
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

