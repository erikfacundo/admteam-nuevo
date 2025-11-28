import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Wrench, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Sacabollos - Reparación Sin Pintar | ADM TEAM",
  description: "Servicio profesional de sacabollos sin dañar la pintura original. Reparación de granizo, golpes de estacionamiento y abolladuras. Técnica innovadora que preserva el valor de tu vehículo en Parque Chas, CABA.",
  keywords: [
    "sacabollos sin pintar",
    "reparación granizo",
    "reparación abolladuras",
    "paintless dent repair",
    "PDR",
    "reparación sin pintura",
    "sacabollos profesional",
    "Parque Chas sacabollos"
  ],
  openGraph: {
    title: "Sacabollos - Reparación Sin Pintar | ADM TEAM",
    description: "Servicio profesional de sacabollos sin dañar la pintura original. Reparación de granizo y abolladuras.",
    url: `${siteUrl}/servicios/sacabollos`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/sacabollos`,
  },
}

const services = [
  "Reparación por daños de granizo",
  "Reparación por golpes de estacionamiento",
  "Reparación de abolladuras en general"
]

export default function SacabollosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Sacabollos - <span className="text-adm-primary">Reparación Sin Pintar</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              La <strong className="text-adm-primary">reparación sin pintar</strong> es una técnica innovadora 
              que permite eliminar abolladuras y golpes en la carrocería de tu vehículo sin necesidad de aplicar pintura.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-adm-background border-adm-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-adm-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-adm-secondary mb-4">
                    Técnica Profesional
                  </h2>
                  <p className="text-adm-secondary/70 mb-6 leading-relaxed">
                    Utilizando herramientas especializadas, nuestro equipo de expertos puede restaurar la superficie 
                    original de tu automóvil, manteniendo su acabado y evitando el tiempo de espera que conlleva una 
                    pintura convencional.
                  </p>
                  <p className="text-adm-secondary/70 leading-relaxed">
                    Este método es ideal para daños menores y asegura resultados impecables, preservando el valor de tu vehículo. 
                    ¡Deja que tu auto luzca como nuevo sin comprometer su originalidad!
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/servicios/sacabollos/sacabollo-1.jpg"
                  alt="Sacabollos trabajo 1"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/servicios/sacabollos/sacabollo-2.jpg"
                  alt="Sacabollos trabajo 2"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/servicios/sacabollos/sacabollo-3.jpg"
                  alt="Sacabollos trabajo 3"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-adm-secondary">
              Servicios de <span className="text-adm-primary">Sacabollos</span>
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="bg-adm-background border-adm-primary/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-adm-primary" />
                    </div>
                    <p className="text-lg text-adm-secondary font-medium">
                      {service}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            Repara tu vehículo sin pintar
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Preserva el valor original de tu auto con nuestra técnica de sacabollos profesional
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

