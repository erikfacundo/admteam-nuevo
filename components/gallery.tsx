"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { useInView } from "react-intersection-observer"

// Array de imágenes de la galería
const galleryImages = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/image-${i + 1}.jpg`,
  alt: `Proyecto ADM TEAM ${i + 1}`,
}))

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <section id="galeria" className="py-20 sm:py-24 lg:py-32 bg-adm-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
              Nuestra <span className="text-adm-primary">Galería</span>
            </h2>
            <p className="text-lg sm:text-xl text-adm-secondary/80 max-w-2xl mx-auto">
              Descubre nuestros trabajos más destacados en personalización y detailing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence mode="wait">
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-adm-secondary hover:text-adm-primary transition-colors z-[101] bg-adm-background/80 rounded-full p-2 hover:bg-adm-primary/20"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
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
                {galleryImages.find(img => img.id === selectedImage) && (
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)!.src}
                    alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                    fill
                    className="object-contain p-4"
                    sizes="90vw"
                    unoptimized
                    priority
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

