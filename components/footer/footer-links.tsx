import { memo } from "react"
import Link from "next/link"
import { FOOTER_LINKS } from "@/lib/footer-data"

interface FooterLinksProps {
  title: string
  links: Array<{ href: string; label: string }>
}

function FooterLinksComponent({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-adm-secondary mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={link.href + index}>
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
  )
}

export const FooterLinks = memo(FooterLinksComponent)

