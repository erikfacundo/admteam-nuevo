import {
  Wrench,
  Sun,
  Sparkles,
  Shield,
  Gauge,
  Settings,
  AlignCenter,
  Paintbrush,
} from "lucide-react"
import type { Service } from "@/types"
import { SERVICE_ROUTES } from "./constants"

export const SERVICES_DATA: Service[] = [
  {
    icon: Wrench,
    title: "Personalización de vehículos",
    description: "Transformamos tu auto según tus gustos. Modificaciones estéticas y de performance con los mejores materiales del mercado.",
    seoText: "Servicio de personalización automotriz profesional. Modificaciones de tuning, body kits, y mejoras de rendimiento.",
    route: SERVICE_ROUTES["Personalización de vehículos"],
  },
  {
    icon: Sun,
    title: "Polarizado profesional",
    description: "Polarizado de alta calidad con garantía. Protección UV, privacidad y estilo para tu vehículo.",
    seoText: "Polarizado automotriz profesional con películas de calidad premium. Protección solar y estética.",
    route: SERVICE_ROUTES["Polarizado profesional"],
  },
  {
    icon: Sparkles,
    title: "Detailing premium",
    description: "Detailing completo interior y exterior. Restauración de pintura, encerado, pulido y protección de acabados.",
    seoText: "Servicio de detailing automotriz premium. Limpieza profunda, pulido, encerado y protección de pintura.",
    route: SERVICE_ROUTES["Detailing premium"],
  },
  {
    icon: Shield,
    title: "PPF — Paint Protection Film",
    description: "Protección invisible para tu pintura. Película transparente que previene rayones, chips y desgaste.",
    seoText: "Instalación de PPF (Paint Protection Film) profesional. Protección de pintura con película transparente.",
    route: SERVICE_ROUTES["PPF — Paint Protection Film"],
  },
  {
    icon: Gauge,
    title: "Suspensiones deportivas",
    description: "Instalación y calibración de suspensiones deportivas. Mejora el manejo, estabilidad y estética de tu vehículo.",
    seoText: "Instalación de suspensiones deportivas y ajuste de altura. Mejora de performance y estética.",
  },
  {
    icon: Settings,
    title: "Mecánica general",
    description: "Servicio completo de mecánica automotriz. Mantenimiento, reparaciones y diagnóstico profesional.",
    seoText: "Taller mecánico especializado. Reparaciones, mantenimiento y diagnóstico de vehículos.",
    route: SERVICE_ROUTES["Mecánica general"],
  },
  {
    icon: AlignCenter,
    title: "Alineación y balanceo",
    description: "Alineación precisa y balanceo de ruedas. Extiende la vida útil de tus neumáticos y mejora la conducción.",
    seoText: "Servicio de alineación y balanceo de ruedas profesional. Mantenimiento de neumáticos y suspensión.",
  },
  {
    icon: Paintbrush,
    title: "Restauración estética",
    description: "Restauración completa de la estética de tu vehículo. Pintura, reparación de carrocería y acabados premium.",
    seoText: "Restauración estética automotriz. Reparación de carrocería, pintura y acabados de calidad.",
  },
]

