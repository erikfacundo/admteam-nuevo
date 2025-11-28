import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT_INFO } from "@/lib/constants"

function ContactMapComponent() {
  return (
    <Card className="bg-adm-background border-adm-primary/20">
      <CardContent className="p-0">
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276843!2d-58.4800!3d-34.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a123456789%3A0x1234567890abcdef!2sG%C3%A1ndara%203368%2C%20Parque%20Chas%2C%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export const ContactMap = memo(ContactMapComponent)

