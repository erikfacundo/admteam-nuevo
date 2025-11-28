import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Info } from "lucide-react"
import type { Service } from "@/types"
import { SERVICE_ROUTES } from "@/lib/constants"

interface ServiceCardProps {
  service: Service
  index: number
  variants: {
    hidden: { opacity: number; y: number }
    visible: { opacity: number; y: number; transition: { duration: number } }
  }
}

function ServiceCardComponent({ service, index, variants }: ServiceCardProps) {
  const Icon = service.icon
  const route = service.route || SERVICE_ROUTES[service.title] || "/servicios"

  return (
    <motion.div variants={variants}>
      <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-adm-primary/10 flex flex-col">
        <CardHeader className="flex-1">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-adm-primary" />
          </div>
          <CardTitle className="text-xl text-adm-secondary">
            {service.title}
          </CardTitle>
          <CardDescription className="text-adm-secondary/70">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <p className="text-sm text-adm-secondary/60 mb-4 hidden">
            {service.seoText}
          </p>
          <Button variant="outline" size="sm" className="w-full group" asChild>
            <Link href={route}>
              <Info className="mr-2 w-4 h-4" />
              Más info
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const ServiceCard = memo(ServiceCardComponent)

