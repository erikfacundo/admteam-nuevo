import type { Metadata } from "next"
import { About } from "@/components/about/about"
import { Testimonials } from "@/components/testimonials/testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Historia y Valores | ADM TEAM",
  description: "Conoce la historia de ADM TEAM, nuestro equipo, misión y valores. Especialistas en personalización, detailing y performance automotriz con años de experiencia.",
  keywords: [
    "sobre ADM TEAM",
    "historia taller tuning",
    "equipo detailing",
    "misión valores automotriz",
    "taller especializado argentina",
    "experiencia personalización"
  ],
  openGraph: {
    title: "Sobre Nosotros | ADM TEAM",
    description: "Conoce la historia, misión y valores de ADM TEAM. Especialistas en personalización y detailing automotriz.",
    url: `${siteUrl}/sobre-nosotros`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/sobre-nosotros`,
  },
}

const stats = [
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Users, value: "500+", label: "Clientes satisfechos" },
  { icon: Target, value: "1000+", label: "Proyectos completados" },
  { icon: Zap, value: "100%", label: "Satisfacción garantizada" },
]

export default function SobreNosotrosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 lg:py-16 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Sobre <span className="text-adm-primary">Nosotros</span>
            </h1>
            <p className="text-lg sm:text-xl text-adm-secondary/80">
              Conoce quiénes somos, nuestra historia y nuestra pasión por transformar vehículos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="bg-adm-background border-adm-primary/20 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg bg-adm-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-adm-primary" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-adm-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-adm-secondary/70">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <About />
      <Testimonials />

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            ¿Quieres conocernos en persona?
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Visítanos en nuestro taller o contáctanos para más información
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

