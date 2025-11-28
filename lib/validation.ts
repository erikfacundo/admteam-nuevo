export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

export function validateRequired(value: string | undefined | null): boolean {
  return Boolean(value && value.trim().length > 0)
}

export function validateContactForm(data: {
  name?: string
  email?: string
  phone?: string
  message?: string
}): { valid: boolean; error?: string } {
  if (!validateRequired(data.name)) {
    return { valid: false, error: "El nombre es requerido" }
  }

  if (!validateRequired(data.email)) {
    return { valid: false, error: "El email es requerido" }
  }

  if (!validateEmail(data.email!)) {
    return { valid: false, error: "Email inválido" }
  }

  if (!validateRequired(data.phone)) {
    return { valid: false, error: "El teléfono es requerido" }
  }

  if (!validateRequired(data.message)) {
    return { valid: false, error: "El mensaje es requerido" }
  }

  return { valid: true }
}

