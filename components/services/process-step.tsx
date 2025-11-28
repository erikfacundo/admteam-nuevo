import { memo } from "react"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

function ProcessStepComponent({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-adm-primary text-adm-contrast flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-adm-secondary mb-2">{title}</h3>
        <p className="text-adm-secondary/70">{description}</p>
      </div>
    </div>
  )
}

export const ProcessStep = memo(ProcessStepComponent)

