"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScroll } from "@/hooks/use-scroll"
import { slideDown } from "@/lib/animations"
import { NavbarLogo } from "./navbar-logo"
import { NavbarLinks } from "./navbar-links"
import { MobileMenu } from "./mobile-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = useScroll(20)

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={slideDown}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-adm-background/95 backdrop-blur-md border-b border-adm-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavbarLogo />

          <div className="hidden md:flex items-center space-x-8">
            <NavbarLinks />
            <Button asChild variant="default" size="lg" className="ml-4">
              <Link href="#contacto">Solicitar turno</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-adm-secondary hover:text-adm-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.nav>
  )
}

