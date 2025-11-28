import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { GalleryImage } from "@/types"

interface GalleryItemProps {
  image: GalleryImage
  index: number
  onClick: (id: number) => void
  inView: boolean
}

function GalleryItemComponent({ image, index, onClick, inView }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
      onClick={() => onClick(image.id)}
    >
      <div className="relative w-full h-full bg-adm-background/50">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-adm-primary/0 group-hover:bg-adm-primary/20 transition-colors duration-300" />
    </motion.div>
  )
}

export const GalleryItem = memo(GalleryItemComponent)

