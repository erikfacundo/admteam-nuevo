import Image from "next/image"
import Link from "next/link"

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-16 h-16">
        <Image
          src="/logo.png"
          alt="ADM TEAM Logo"
          fill
          className="object-contain"
        />
      </div>
    </Link>
  )
}

