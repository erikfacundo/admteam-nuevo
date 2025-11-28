import { memo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  inView: boolean
}

function TestimonialCardComponent({ testimonial, index, inView }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <Card className="h-full bg-adm-background border-adm-primary/20 hover:border-adm-primary/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-adm-primary text-adm-primary"
              />
            ))}
          </div>
          <p className="text-adm-secondary/90 mb-4 italic">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="border-t border-adm-primary/20 pt-4">
            <p className="font-bold text-adm-secondary">
              {testimonial.name}
            </p>
            <p className="text-sm text-adm-primary">
              {testimonial.vehicle}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const TestimonialCard = memo(TestimonialCardComponent)

