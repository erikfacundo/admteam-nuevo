import type { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"
import { PageHeader } from "@/components/pages/page-header"
import { PageCTA } from "@/components/pages/page-cta"
import { ServiceSection } from "@/components/services/service-section"
import { ProcessStep } from "@/components/services/process-step"
import { PERSONALIZACION_SERVICES, PROCESS_STEPS } from "@/lib/service-pages-data"

export const metadata: Metadata = createMetadata({
  title: "Personalización de Vehículos - Tuning y Modificaciones | ADM TEAM",
  description: "Servicio profesional de personalización automotriz. Modificaciones estéticas, body kits, mejoras de performance y tuning. Transforma tu vehículo con ADM TEAM.",
  keywords: [
    "personalización vehículos",
    "tuning automotriz",
    "modificaciones autos",
    "body kits",
    "mejoras performance",
    "customización automotriz",
    "tuning argentina",
    "modificaciones estéticas"
  ],
  path: "/servicios/personalizacion",
  ogTitle: "Personalización de Vehículos | ADM TEAM",
  ogDescription: "Servicio profesional de personalización automotriz. Modificaciones estéticas y de performance.",
})

export default function PersonalizacionPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Personalización de Vehículos"
        highlight="Vehículos"
        description="Transformamos tu vehículo según tus gustos y necesidades. Modificaciones estéticas y de performance con los mejores materiales y técnicas del mercado."
      />

      <section className="py-20 bg-adm-background border-y border-adm-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-adm-secondary">
            Nuestros Servicios de <span className="text-adm-primary">Personalización</span>
          </h2>
          <div className="space-y-12">
            {PERSONALIZACION_SERVICES.map((service, index) => (
              <ServiceSection
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                images={service.images}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-adm-secondary">
              Proceso de Trabajo
            </h2>
            <div className="space-y-6">
              {PROCESS_STEPS.map((step) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="¿Listo para personalizar tu vehículo?"
        description="Solicita tu presupuesto sin compromiso"
        buttonText="Solicitar presupuesto"
        href="/contacto"
      />
    </div>
  )
}

