import { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  highlight?: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, highlight, description, children }: PageHeaderProps) {
  return (
    <section className="py-20 sm:py-24 bg-adm-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-adm-secondary">
            {title.split(" ").map((word, index, array) => {
              const isHighlight = highlight && word.toLowerCase().includes(highlight.toLowerCase())
              return (
                <span key={index}>
                  {isHighlight ? (
                    <span className="text-adm-primary">{word}</span>
                  ) : (
                    word
                  )}
                  {index < array.length - 1 && " "}
                </span>
              )
            })}
          </h1>
          {description && (
            <p className="text-xl text-adm-secondary/80 mb-8">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

