"use client"

import { memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useForm } from "@/hooks/use-form"
import type { ContactFormData } from "@/types"

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

async function submitContactForm(data: ContactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Error al enviar el formulario")
  }
}

function ContactFormComponent() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } = useForm({
    initialValues: initialFormData,
    onSubmit: submitContactForm,
  })

  return (
    <Card className="bg-adm-background border-adm-primary/20">
      <CardHeader>
        <CardTitle className="text-adm-secondary">Solicitar turno</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-adm-secondary">
              Nombre completo
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-adm-background border-adm-primary/20 text-adm-secondary"
              placeholder="Tu nombre"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-adm-secondary">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-adm-background border-adm-primary/20 text-adm-secondary"
              placeholder="tu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-adm-secondary">
              Teléfono
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-adm-background border-adm-primary/20 text-adm-secondary"
              placeholder="+54 9 11 6610-0650"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-adm-secondary">
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-adm-background border-adm-primary/20 text-adm-secondary min-h-[120px]"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
              ¡Mensaje enviado! Te contactaremos pronto.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
              Error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}

          <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Enviar mensaje
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export const ContactForm = memo(ContactFormComponent)

