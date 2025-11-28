import { useState, useCallback } from "react"

type FormStatus = "idle" | "success" | "error"

interface UseFormOptions<T> {
  initialValues: T
  onSubmit: (values: T) => Promise<void>
}

export function useForm<T extends Record<string, string>>({
  initialValues,
  onSubmit,
}: UseFormOptions<T>) {
  const [formData, setFormData] = useState<T>(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle")

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitStatus("idle")

      try {
        await onSubmit(formData)
        setSubmitStatus("success")
        setFormData(initialValues)
      } catch (error) {
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, initialValues, onSubmit]
  )

  const reset = useCallback(() => {
    setFormData(initialValues)
    setSubmitStatus("idle")
  }, [initialValues])

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    reset,
  }
}

