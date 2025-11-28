interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  console.log("Nuevo mensaje de contacto:", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    timestamp: new Date().toISOString(),
  })
}

