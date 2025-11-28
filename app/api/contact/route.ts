import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validación básica
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // Aquí puedes integrar con tu servicio de email (SendGrid, Resend, etc.)
    // o guardar en una base de datos
    // Por ahora, solo simulamos el envío exitoso
    
    // Ejemplo con console.log (en producción, usar servicio de email)
    console.log("Nuevo mensaje de contacto:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrar con servicio de email
    // Ejemplo con Resend:
    // await resend.emails.send({
    //   from: 'contacto@admteam.com.ar',
    //   to: 'info@admteam.com.ar',
    //   subject: `Nuevo contacto de ${name}`,
    //   html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Teléfono: ${phone}</p><p>Mensaje: ${message}</p>`
    // })

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error al procesar el formulario:", error)
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    )
  }
}

