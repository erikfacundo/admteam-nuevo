export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const

export const CONTACT_INFO = {
  phone: "+5491166100650",
  whatsapp: "+5491166100650",
  email: "info@admteam.com.ar",
  address: "Gándara 3368",
  city: "Parque Chas, CABA",
  mapsUrl: "https://maps.app.goo.gl/XDTRLaz2njCikGSY7",
  hours: {
    weekdays: "9:00 - 18:00",
    saturday: "9:00 - 13:00",
  },
} as const

export const SOCIAL_LINKS = [
  { icon: "Facebook", href: "https://facebook.com/admteam", label: "Facebook" },
  { icon: "Instagram", href: "https://instagram.com/admteam", label: "Instagram" },
  { icon: "Youtube", href: "https://youtube.com/@admteam", label: "YouTube" },
] as const

export const SERVICE_ROUTES: Record<string, string> = {
  "Personalización de vehículos": "/servicios/personalizacion",
  "Detailing premium": "/servicios/detailing",
  "PPF — Paint Protection Film": "/servicios/ppf",
  "Polarizado profesional": "/servicios/polarizado",
  "Mecánica general": "/servicios/mecanica-integral",
} as const

