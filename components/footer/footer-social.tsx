import { memo } from "react"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { SOCIAL_LINKS } from "@/lib/constants"

const iconMap = {
  Facebook,
  Instagram,
  Youtube,
}

function FooterSocialComponent() {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap]
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
  )
}

export const FooterSocial = memo(FooterSocialComponent)

