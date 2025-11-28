import { Wrench, Sparkles, Gauge, Shield } from "lucide-react"

export const PERSONALIZACION_SERVICES = [
  {
    icon: Wrench,
    title: "Modificaciones Estéticas",
    description: "Body kits, spoilers, difusores y accesorios de alta calidad para transformar la apariencia de tu vehículo.",
    images: ["/servicios/personalizacion/audiocar-1.jpg", "/servicios/personalizacion/audiocar-2.jpg", "/servicios/personalizacion/audiocar-3.jpg"]
  },
  {
    icon: Sparkles,
    title: "Mejoras de Performance",
    description: "Chips, escape deportivo, admisión de aire y modificaciones del motor para aumentar potencia y rendimiento."
  },
  {
    icon: Gauge,
    title: "Suspensiones y Ruedas",
    description: "Instalación de suspensiones deportivas, ajuste de altura y montaje de llantas y neumáticos de alto rendimiento.",
    images: ["/servicios/personalizacion/suspension-1.jpg", "/servicios/personalizacion/suspension-2.jpg", "/servicios/personalizacion/suspension-3.jpg"]
  },
  {
    icon: Shield,
    title: "Protección y Detailing",
    description: "PPF, encerado, pulido y tratamientos de protección para mantener tu vehículo como nuevo."
  },
] as const

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Consulta y Presupuesto",
    description: "Analizamos tu proyecto y te brindamos un presupuesto detallado."
  },
  {
    number: 2,
    title: "Planificación",
    description: "Diseñamos el plan de trabajo y seleccionamos los mejores materiales."
  },
  {
    number: 3,
    title: "Ejecución",
    description: "Realizamos las modificaciones con precisión y cuidado extremo."
  },
  {
    number: 4,
    title: "Entrega y Garantía",
    description: "Te entregamos tu vehículo transformado con garantía en todos nuestros trabajos."
  },
] as const

