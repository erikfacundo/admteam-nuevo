import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles, Droplets, Shield, Wrench } from "lucide-react"
import Image from "next/image"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Tratamientos Cerámicos y Limpieza de Interiores | ADM TEAM",
  description: "Tratamientos cerámicos premium, limpieza profunda de interiores y preparación para venta. Servicios de detailing completo con productos de alta calidad en Parque Chas, CABA.",
  keywords: [
    "tratamiento cerámico",
    "limpieza interiores autos",
    "preparación venta vehículo",
    "detailing completo",
    "corrección laca",
    "descontaminación clay bar",
    "tratamientos automotriz",
    "Parque Chas detailing"
  ],
  openGraph: {
    title: "Tratamientos Cerámicos y Limpieza | ADM TEAM",
    description: "Tratamientos cerámicos premium, limpieza profunda de interiores y preparación para venta.",
    url: `${siteUrl}/servicios/tratamientos`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/tratamientos`,
  },
}

const services = [
  {
    icon: Sparkles,
    title: "Tratamientos Cerámicos",
    description: "Arrancamos con el lavado del vehículo, luego lo descontaminamos con la clay bar, le hacemos corrección más refinado de laca y por último lo sellamos. ¡IMPORTANTE: Traer el vehículo lavado!",
    images: ["/servicios/tratamientos/ceramico-1.jpg", "/servicios/tratamientos/ceramico-2.jpg", "/servicios/tratamientos/ceramico-3.jpg"]
  },
  {
    icon: Droplets,
    title: "Limpieza y Desinfección de Interiores",
    description: "Iniciamos con un exhaustivo lavado de los interiores del vehículo, eliminando polvo y suciedad. Utilizamos máquina de extracción. Nuestra limpieza incluye tapicería, alfombras y superficies, asegurando que tu automóvil luzca y se sienta como nuevo.",
    images: ["/servicios/tratamientos/interior-1.jpg", "/servicios/tratamientos/interior-2.jpg"]
  },
  {
    icon: Shield,
    title: "Preparación para la Venta",
    description: "Lavado de motor, limpieza de interiores y corrección de laca. Preparamos tu vehículo para que luzca impecable al momento de venderlo, maximizando su valor de reventa.",
    images: ["/servicios/tratamientos/preventa-1.jpg", "/servicios/tratamientos/preventa-2.jpg", "/servicios/tratamientos/preventa-3.jpg"]
  },
]

export default function TratamientosPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Tratamientos <span className="text-adm-primary">Cerámicos</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              Servicios completos de tratamientos cerámicos, limpieza profunda de interiores y preparación 
              para venta. Utilizamos productos premium y técnicas profesionales para garantizar resultados excepcionales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
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
                        <h3 className="text-2xl font-bold text-adm-secondary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-adm-secondary/70 leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`grid grid-cols-${service.images.length > 2 ? '3' : '2'} gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            ¿Necesitas un tratamiento para tu vehículo?
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

