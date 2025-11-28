import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"

interface NavbarLinksProps {
  onLinkClick?: () => void
  className?: string
}

export function NavbarLinks({ onLinkClick, className = "" }: NavbarLinksProps) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={`text-adm-secondary hover:text-adm-primary transition-colors font-medium ${className}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

