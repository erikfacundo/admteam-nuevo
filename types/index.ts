export interface NavLink {
  href: string
  label: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  seoText: string
  route?: string
}

export interface Testimonial {
  name: string
  vehicle: string
  rating: number
  text: string
}

export interface ContactFormData extends Record<string, string> {
  name: string
  email: string
  phone: string
  message: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export type FormStatus = "idle" | "success" | "error"

