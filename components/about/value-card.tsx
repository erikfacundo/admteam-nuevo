import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ValueCardProps {
  value: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
  }
  index: number
  inView: boolean
}

function ValueCardComponent({ value, index, inView }: ValueCardProps) {
  const Icon = value.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    >
      <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 rounded-lg bg-adm-primary/10 flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-adm-primary" />
          </div>
          <h4 className="text-xl font-bold text-adm-secondary mb-2">
            {value.title}
          </h4>
          <p className="text-adm-secondary/70">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const ValueCard = memo(ValueCardComponent)

