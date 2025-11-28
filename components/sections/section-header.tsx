import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface SectionHeaderProps {
  title: string
  highlight?: string
  description?: string
  className?: string
}

export function SectionHeader({ title, highlight, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
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
      </h2>
      {description && (
        <p className="text-lg sm:text-xl text-adm-secondary/80 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}

