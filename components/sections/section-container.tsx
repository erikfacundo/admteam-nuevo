import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id?: string
  children: ReactNode
  className?: string
  variant?: "default" | "bordered"
}

export function SectionContainer({ id, children, className, variant = "default" }: SectionContainerProps) {
  const baseClasses = "py-20 sm:py-24 lg:py-16 bg-adm-background"
  const variantClasses = variant === "bordered" ? "border-y border-adm-primary/20" : ""

  return (
    <section id={id} className={cn(baseClasses, variantClasses, className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

