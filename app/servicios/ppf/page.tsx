import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Shield, Eye, Droplets, Sparkles } from "lucide-react"
import Image from "next/image"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "PPF - Paint Protection Film - Protección de Pintura | ADM TEAM",
  description: "Instalación profesional de PPF (Paint Protection Film). Protección invisible contra rayones, chips, impactos y desgaste. Película transparente de alta calidad.",
  keywords: [
    "PPF paint protection film",
    "protección pintura auto",
    "película transparente",
    "protección contra rayones",
    "PPF argentina",
    "instalación PPF",
    "protección carrocería",
    "película invisible"
  ],
  openGraph: {
    title: "PPF - Paint Protection Film | ADM TEAM",
    description: "Instalación profesional de PPF. Protección invisible contra rayones, chips y desgaste.",
    url: `${siteUrl}/servicios/ppf`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/servicios/ppf`,
  },
}

const benefits = [
  {
    icon: Shield,
    title: "Protección Total",
    description: "Protege tu pintura contra rayones, chips de piedras, impactos menores y desgaste por uso diario."
  },
  {
    icon: Eye,
    title: "Invisible",
    description: "Película completamente transparente que no altera la apariencia de tu vehículo."
  },
  {
    icon: Droplets,
    title: "Auto-limpieza",
    description: "Superficie hidrofóbica que repele agua y facilita el lavado, manteniendo tu auto más limpio."
  },
  {
    icon: Sparkles,
    title: "Duradero",
    description: "Duración de hasta 10 años con mantenimiento adecuado. Garantía incluida."
  },
]

export default function PPFPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-24 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              PPF - Paint Protection <span className="text-adm-primary">Film</span>
            </h1>
            <p className="text-xl text-adm-secondary/80 mb-8">
              Protección invisible para tu pintura. Película transparente de alta calidad que previene rayones, 
              chips, impactos y desgaste, manteniendo tu vehículo como nuevo por años.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Beneficios del <span className="text-adm-primary">PPF</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Productos <span className="text-adm-primary">DYNO</span> Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "DYNOshield", desc: "Recubrimiento superior hidrofóbico que realza el brillo. Tecnología de autoinmunidad y autocontracción.", image: "/servicios/ppf/dynosheild.jpg" },
              { name: "DYNOblack matte", desc: "Acabado negro mate resistente al amarillamiento y excepcional resistencia a la contaminación.", image: "/servicios/ppf/DYNOblackmatte.jpg" },
              { name: "DYNOcarbon", desc: "Estructura de fibra de carbono con grosor de 8 mil. Protección real contra pinchazos y manchas.", image: "/servicios/ppf/dynocarbon.jpg" },
              { name: "DYNOmatt", desc: "Transforma cualquier color en acabado mate deportivo. No importa el color de tu auto.", image: "/servicios/ppf/dynosheild.jpg" },
              { name: "DYNOblack gloss", desc: "Acabado negro de alto brillo, hidrofóbico, resistente a manchas de agua y anti-amarilleo.", image: "/servicios/ppf/DYNOblackgloss.jpg" },
              { name: "DYNOblack-carbon matte", desc: "Fibra de carbono negro mate altamente resistente a la decoloración con el tiempo.", image: "/servicios/ppf/DYNOblackcarbonmatte.jpg" },
              { name: "DYNOgray", desc: "Transforma cualquier color original en un elegante gris claro con protección duradera.", image: "/servicios/ppf/dynogrey.jpg" },
              { name: "DYNOred", desc: "Hidrofóbico, estirable y altamente resistente a manchas, productos químicos y contaminación.", image: "/servicios/ppf/DYNOred.jpg" },
            ].map((product, index) => (
              <Card key={index} className="bg-adm-background border-adm-primary/20 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-adm-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-adm-secondary/70">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              DYNOflex - Protección de <span className="text-adm-primary">Parabrisas</span>
            </h2>
            <p className="text-lg text-adm-secondary/80 text-center mb-8">
              Película exterior para parabrisas de STEK. Viaja por las rutas de nuestro país con una protección cristalina 
              que previene impactos y mantiene tu parabrisas en perfecto estado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/servicios/ppf/dynoflex.jpg"
                  alt="DYNOflex protección parabrisas"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/servicios/ppf/dynoflex-2.jpg"
                  alt="DYNOflex protección parabrisas 2"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              Áreas de Aplicación
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Capó completo</p>
              </div>
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Paragolpes delantero</p>
              </div>
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Espejos retrovisores</p>
              </div>
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Guardabarros delanteros</p>
              </div>
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Puertas</p>
              </div>
              <div className="p-4 bg-adm-background/50 rounded-lg border border-adm-primary/20">
                <p className="text-adm-secondary font-medium">Cobertura completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background border-t border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
            Protege tu inversión
          </h2>
          <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
            Solicita tu presupuesto de instalación de PPF
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

