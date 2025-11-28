import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceImageGrid } from "./service-image-grid"

interface ServiceSectionProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  images?: readonly string[]
  index: number
}

function ServiceSectionComponent({ icon: Icon, title, description, images, index }: ServiceSectionProps) {
  const isReverse = index % 2 === 1

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isReverse ? "lg:flex-row-reverse" : ""}`}>
      <div className={isReverse ? "lg:order-2" : ""}>
        <Card className="bg-adm-background border-adm-primary/20 h-full">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-adm-primary" />
            </div>
            <h3 className="text-2xl font-bold text-adm-secondary mb-3">
              {title}
            </h3>
            <p className="text-adm-secondary/70 leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
      {images && (
        <ServiceImageGrid images={images} title={title} reverse={isReverse} />
      )}
    </div>
  )
}

export const ServiceSection = memo(ServiceSectionComponent)

