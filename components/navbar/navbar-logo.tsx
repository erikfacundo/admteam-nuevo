import Image from "next/image"
import Link from "next/link"

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16">
        <Image
          src="/logo.png"
          alt="ADM TEAM Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}

