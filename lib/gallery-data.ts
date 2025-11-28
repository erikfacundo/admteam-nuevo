import type { GalleryImage } from "@/types"

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/image-${i + 1}.jpg`,
  alt: `Proyecto ADM TEAM ${i + 1}`,
}))

