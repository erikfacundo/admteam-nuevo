import { memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

function ContactInfoComponent() {
  return (
    <Card className="bg-adm-background border-adm-primary/20">
      <CardHeader>
        <CardTitle className="text-adm-secondary">Información de contacto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-adm-primary" />
          </div>
          <div>
            <h4 className="font-bold text-adm-secondary mb-1">Teléfono</h4>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-adm-primary hover:underline">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-adm-primary" />
          </div>
          <div>
            <h4 className="font-bold text-adm-secondary mb-1">WhatsApp</h4>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-adm-primary hover:underline"
            >
              {CONTACT_INFO.whatsapp}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-adm-primary" />
          </div>
          <div>
            <h4 className="font-bold text-adm-secondary mb-1">Email</h4>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-adm-primary hover:underline">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-adm-primary" />
          </div>
          <div>
            <h4 className="font-bold text-adm-secondary mb-1">Dirección</h4>
            <p className="text-adm-secondary/80">
              {CONTACT_INFO.address}<br />
              {CONTACT_INFO.city}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-adm-primary" />
          </div>
          <div>
            <h4 className="font-bold text-adm-secondary mb-1">Horarios</h4>
            <p className="text-adm-secondary/80">
              Lunes a Viernes: {CONTACT_INFO.hours.weekdays}<br />
              Sábados: {CONTACT_INFO.hours.saturday}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const ContactInfo = memo(ContactInfoComponent)

