import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NavbarLinks } from "./navbar-links"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-adm-background/98 backdrop-blur-md border-t border-adm-primary/20"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            <NavbarLinks
              onLinkClick={onClose}
              className="block py-2"
            />
            <Button
              asChild
              variant="default"
              size="lg"
              className="w-full mt-4"
            >
              <Link href="#contacto" onClick={onClose}>
                Solicitar turno
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

