import type { Metadata } from "next"
import { Contact } from "@/components/contact"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

export const metadata: Metadata = {
  title: "Contacto - Solicita tu Turno | ADM TEAM",
  description: "Contacta con ADM TEAM. Solicita tu turno, presupuesto o consulta. Teléfono, WhatsApp, email y ubicación. Estamos para ayudarte con tu proyecto.",
  keywords: [
    "contacto ADM TEAM",
    "solicitar turno taller",
    "presupuesto personalización",
    "teléfono taller tuning",
    "whatsapp detailing",
    "ubicación taller automotriz",
    "horarios atención"
  ],
  openGraph: {
    title: "Contacto | ADM TEAM",
    description: "Contacta con ADM TEAM. Solicita tu turno, presupuesto o consulta sobre tu proyecto.",
    url: `${siteUrl}/contacto`,
    type: "website",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contacto`,
  },
}

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <section className="py-12 sm:py-16 bg-adm-background border-b border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
              Contáctanos
            </h1>
            <p className="text-lg sm:text-xl text-adm-secondary/80">
              Estamos listos para transformar tu vehículo. Solicita tu turno, presupuesto o consulta.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}

