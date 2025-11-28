"use client"

import { useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { useIntersection } from "@/hooks/use-intersection"
import { SectionContainer } from "@/components/sections/section-container"
import { SectionHeader } from "@/components/sections/section-header"
import { fadeIn } from "@/lib/animations"
import { GALLERY_IMAGES } from "@/lib/gallery-data"
import { GalleryItem } from "./gallery-item"
import { GalleryLightbox } from "./gallery-lightbox"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useIntersection({ threshold: 0.1 })

  const handleImageClick = useCallback((id: number) => {
    setSelectedImage(id)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const images = useMemo(() => GALLERY_IMAGES, [])

  return (
    <>
      <SectionContainer id="galeria">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Nuestra Galería"
            highlight="Galería"
            description="Descubre nuestros trabajos más destacados en personalización y detailing"
          />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : {}}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {images.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onClick={handleImageClick}
                inView={inView}
              />
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      <GalleryLightbox
        selectedImage={selectedImage}
        images={images}
        onClose={handleClose}
      />
    </>
  )
}

