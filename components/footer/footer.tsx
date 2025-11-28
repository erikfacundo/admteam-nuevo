"use client"

import Link from "next/link"
import { FooterLogo } from "./footer-logo"
import { FooterSocial } from "./footer-social"
import { FooterLinks } from "./footer-links"
import { FooterContact } from "./footer-contact"
import { FooterCTA } from "./footer-cta"
import { FOOTER_LINKS } from "@/lib/footer-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-adm-background border-t border-adm-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-adm-secondary/70 text-sm">
              Personalización, Detailing y Performance. Transformamos tu vehículo 
              en una obra de arte sobre ruedas.
            </p>
            <FooterSocial />
          </div>

          <FooterLinks title="Navegación" links={FOOTER_LINKS.navegacion} />
          <FooterLinks title="Servicios" links={FOOTER_LINKS.servicios} />
          <FooterContact />
        </div>

        <FooterCTA />

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

