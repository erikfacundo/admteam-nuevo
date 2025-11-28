"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-32 bg-adm-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-adm-secondary">
            Contáctanos
          </h2>
          <p className="text-lg sm:text-xl text-adm-secondary/80 max-w-2xl mx-auto">
            Estamos listos para transformar tu vehículo. Solicita tu turno ahora
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
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
                    <a
                      href="tel:+5491166100650"
                      className="text-adm-primary hover:underline"
                    >
                      +54 9 11 6610-0650
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
                      href="https://wa.me/5491166100650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-adm-primary hover:underline"
                    >
                      +54 9 11 6610-0650
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-adm-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-adm-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-adm-secondary mb-1">Email</h4>
                    <a
                      href="mailto:info@admteam.com.ar"
                      className="text-adm-primary hover:underline"
                    >
                      info@admteam.com.ar
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
                      Gándara 3368<br />
                      Parque Chas, CABA
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
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="bg-adm-background border-adm-primary/20">
              <CardContent className="p-0">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276843!2d-58.4800!3d-34.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a123456789%3A0x1234567890abcdef!2sG%C3%A1ndara%203368%2C%20Parque%20Chas%2C%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
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
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                      placeholder="+54 11 XXXX-XXXX"
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

