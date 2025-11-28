import { memo } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

function FooterContactComponent() {
  return (
    <div>
      <h3 className="text-lg font-bold text-adm-secondary mb-4">
        Contacto
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
          >
            {CONTACT_INFO.phone}
          </a>
        </li>
        <li className="flex items-start space-x-3">
          <Mail className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
          >
            {CONTACT_INFO.email}
          </a>
        </li>
        <li className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-adm-primary flex-shrink-0 mt-0.5" />
          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-adm-secondary/70 hover:text-adm-primary transition-colors text-sm"
          >
            {CONTACT_INFO.address}, {CONTACT_INFO.city}
          </a>
        </li>
      </ul>
    </div>
  )
}

export const FooterContact = memo(FooterContactComponent)

