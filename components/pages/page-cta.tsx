import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PageCTAProps {
  title: string
  description: string
  buttonText: string
  href: string
}

export function PageCTA({ title, description, buttonText, href }: PageCTAProps) {
  return (
    <section className="py-20 bg-adm-background border-t border-adm-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-adm-secondary">
          {title}
        </h2>
        <p className="text-lg text-adm-secondary/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button asChild size="lg" variant="default">
          <Link href={href}>
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

