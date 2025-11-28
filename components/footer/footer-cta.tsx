import Link from "next/link"

export function FooterCTA() {
  return (
    <div className="border-t border-adm-primary/20 pt-8 mb-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-adm-secondary mb-4">
          ¿Listo para transformar tu vehículo?
        </h3>
        <p className="text-adm-secondary/70 mb-6 max-w-2xl mx-auto">
          Solicita tu turno ahora y descubre cómo podemos llevar tu auto al siguiente nivel
        </p>
        <Link
          href="#contacto"
          className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-adm-primary text-adm-contrast font-bold hover:bg-adm-primary/90 transition-colors"
        >
          Solicitar turno
        </Link>
      </div>
    </div>
  )
}

