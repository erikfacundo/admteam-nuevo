"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navegacion: [
      { href: "#inicio", label: "Inicio" },
      { href: "#servicios", label: "Servicios" },
      { href: "#galeria", label: "Galería" },
      { href: "#sobre-nosotros", label: "Sobre Nosotros" },
      { href: "#contacto", label: "Contacto" },
    ],
    servicios: [
      { href: "#servicios", label: "Personalización" },
      { href: "#servicios", label: "Polarizado" },
      { href: "#servicios", label: "Detailing" },
      { href: "#servicios", label: "PPF" },
      { href: "#servicios", label: "Suspensiones" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/admteam", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/admteam", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@admteam", label: "YouTube" },
  ]

  return (
    <footer className="bg-adm-background border-t border-adm-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="ADM TEAM Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-adm-secondary/70 text-sm">
              Personalización, Detailing y Performance. Transformamos tu vehículo 
              en una obra de arte sobre ruedas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-adm-primary/10 flex items-center justify-center text-adm-primary hover:bg-adm-primary hover:text-adm-contrast transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-bold text-adm-secondary mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold text-adm-secondary mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold text-adm-secondary mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5491166100650"
                  className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
                >
                  +54 9 11 6610-0650
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@admteam.com.ar"
                  className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
                >
                  info@admteam.com.ar
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/XDTRLaz2njCikGSY7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
                >
                  Gándara 3368, Parque Chas, CABA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Final */}
        <div className="border-t border-adm-primary/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-adm-secondary mb-4">
              ¿Listo para transformar tu vehículo?
            </h3>
            <p className="text-adm-secondary/70 mb-6 max-w-2xl mx-auto">
              Solicita tu turno ahora y descubre cómo podemos llevar tu auto al siguiente nivel
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-adm-primary text-adm-contrast font-bold hover:bg-adm-primary/90 transition-colors"
            >
              Solicitar turno
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-adm-primary/20 pt-8 text-center">
          <p className="text-adm-secondary/50 text-sm">
            © {currentYear} ADM TEAM. Todos los derechos reservados. |{" "}
            <Link
              href="#"
              className="hover:text-adm-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            {" | "}
            <Link
              href="#"
              className="hover:text-adm-primary transition-colors"
            >
              Términos y Condiciones
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

