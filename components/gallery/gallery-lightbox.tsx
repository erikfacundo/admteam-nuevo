import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import type { GalleryImage } from "@/types"

interface GalleryLightboxProps {
  selectedImage: number | null
  images: GalleryImage[]
  onClose: () => void
}

function GalleryLightboxComponent({ selectedImage, images, onClose }: GalleryLightboxProps) {
  const image = images.find((img) => img.id === selectedImage)

  return (
    <AnimatePresence mode="wait">
      {selectedImage !== null && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 text-adm-secondary hover:text-adm-primary transition-colors z-[101] bg-adm-background/80 rounded-full p-2 hover:bg-adm-primary/20"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-6xl w-full h-[90vh] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full bg-adm-background rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain p-4"
                sizes="90vw"
                unoptimized
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const GalleryLightbox = memo(GalleryLightboxComponent)

