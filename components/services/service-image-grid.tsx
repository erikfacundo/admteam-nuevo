import { memo } from "react"
import Image from "next/image"

interface ServiceImageGridProps {
  images: readonly string[]
  title: string
  reverse?: boolean
}

function ServiceImageGridComponent({ images, title, reverse = false }: ServiceImageGridProps) {
  const gridCols = images.length > 2 ? "grid-cols-3" : "grid-cols-2"

  return (
    <div className={`grid gap-4 ${gridCols} ${reverse ? "lg:order-1" : ""}`}>
      {images.map((img, imgIndex) => (
        <div key={imgIndex} className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={img}
            alt={`${title} ${imgIndex + 1}`}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}

export const ServiceImageGrid = memo(ServiceImageGridComponent)

