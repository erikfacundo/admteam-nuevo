import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sun, Shield, Eye } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Polarizado Profesional - 3 Tonalidades | ADM TEAM",
  description: "Polarizado profesional de autos y camionetas con tecnología nano cerámica SMART series. Tres tonalidades disponibles: claro, intermedio y oscuro. Protección UV y reducción de calor en Parque Chas, CABA.",
  keywords: [
    "polarizado profesional",
    "polarizado autos",
    "polarizado camionetas",
    "nano cerámica",
    "películas ventanas",
    "protección UV",
    "polarizado claro intermedio oscuro",
    "Parque Chas polarizado"
  ],
  openGraph: {
    title: "Polarizado Profesional | ADM TEAM",
    description: "Polarizado profesional con tecnología nano cerámica. Tres tonalidades disponibles.",
    url: `${siteUrl}/servicios/polarizado`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/polarizado`,
  },
}

const tonalidades = [
  {
    name: "Claro",
    description: "Polarizado claro que permite mayor visibilidad manteniendo protección UV y reducción de calor."
  },
  {
    name: "Intermedio",
    description: "Balance perfecto entre privacidad y visibilidad. La opción más elegida por nuestros clientes."
  },
  {
    name: "Oscuro",
    description: "Máxima privacidad y protección. Ideal para quienes buscan un acabado más discreto."
  },
]

const benefits = [
  {
    icon: Sun,
    title: "Protección UV",
    description: "Bloquea los rayos UV dañinos, protegiendo tu piel y el interior de tu vehículo."
  },
  {
    icon: Shield,
    title: "Reducción de Calor",
    description: "Reduce significativamente el calor interior, mejorando el confort durante el verano."
  },
  {
    icon: Eye,
    title: "Privacidad",
    description: "Aumenta la privacidad y seguridad dentro del vehículo sin comprometer la visibilidad."
  },
]

export default function PolarizadoPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Polarizado <span className="text-adm-primary">Profesional</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-4">
              Mejora la privacidad, seguridad y comodidad de tu auto con nuestros servicios de polarizado de autos y camionetas.
            </p>
            <p className="text-lg text-adm-secondary/70 mb-8">
              Utilizamos láminas de alta calidad que bloquean los rayos UV y reducen el calor, brindándote un ambiente interior más fresco y protegido.
            </p>
            <p className="text-lg text-adm-primary font-bold mb-8">
              Avanzada tecnología de nano cerámica con ultra-performance! Estos films para ventanas de nuestra SMART series 
              mejoran los niveles de control solar, no se decoloran y dejan un acabado espectacular sobre tu vehículo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Tonalidades de <span className="text-adm-primary">Polarizado</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tonalidades.map((tonalidad, index) => (
              <Card key={index} className="bg-adm-background border-adm-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-lg bg-adm-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8 text-adm-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-adm-primary mb-3">
                    {tonalidad.name}
                  </h3>
                  <p className="text-adm-secondary/70">
                    {tonalidad.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Beneficios del <span className="text-adm-primary">Polarizado</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-adm-background border-adm-primary/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-adm-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-adm-secondary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-adm-secondary/70">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              DYNOflex - Protección de <span className="text-adm-primary">Parabrisas</span>
            </h2>
            <p className="text-lg text-adm-secondary/80 text-center mb-8">
              Película exterior para parabrisas de STEK. Viaja por las rutas de nuestro país con una protección cristalina 
              que previene impactos y mantiene tu parabrisas en perfecto estado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            Elige tu tonalidad ideal
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Solicita tu presupuesto de polarizado profesional
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

