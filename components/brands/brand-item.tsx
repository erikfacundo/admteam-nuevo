import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface BrandItemProps {
  brand: { name: string; src: string }
  index: number
  inView: boolean
}

function BrandItemComponent({ brand, index, inView }: BrandItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className="flex items-center justify-center p-4 bg-adm-background/50 rounded-lg hover:bg-adm-primary/5 transition-colors"
    >
      <div className="relative w-full h-12 sm:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
        <Image
          src={brand.src}
          alt={brand.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
          unoptimized
        />
      </div>
    </motion.div>
  )
}

export const BrandItem = memo(BrandItemComponent)

