import { NextRequest, NextResponse } from "next/server"
import { validateContactForm } from "@/lib/validation"
import { sendContactEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    const validation = validateContactForm({ name, email, phone, message })
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    await sendContactEmail({ name, email, phone, message })

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

