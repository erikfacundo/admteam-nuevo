import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"
const businessName = "ADM TEAM"
const businessDescription = "ADM TEAM - Taller integral y detailing en Parque Chas, CABA. Especialistas en personalización automotriz, detailing premium, PPF (Paint Protection Film), polarizado profesional, mecánica integral, sacabollos, tratamientos cerámicos y más. Servicios para vehículos nacionales e importados."
const businessAddress = {
  streetAddress: "Gándara 3368",
  addressLocality: "Parque Chas",
  addressRegion: "Ciudad Autónoma de Buenos Aires",
  postalCode: "C1427",
  addressCountry: "AR"
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessName} - Personalización, Detailing y Performance | Taller de Tuning`,
    template: `%s | ${businessName}`
  },
  description: businessDescription,
  keywords: [
    "taller tuning",
    "personalización vehículos",
    "detailing premium",
    "polarizado profesional",
    "PPF paint protection film",
    "suspensiones deportivas",
    "mecánica automotriz",
    "alineación balanceo",
    "restauración estética",
    "tuning argentina",
    "modificación autos",
    "ADM TEAM",
    "taller Parque Chas",
    "sacabollos sin pintar",
    "tratamientos cerámicos",
    "mecánica integral",
    "taller CABA",
    "detailing Buenos Aires",
    "PPF STEK",
    "DYNOshield"
  ],
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: `${businessName} - Personalización, Detailing y Performance`,
    description: businessDescription,
    siteName: businessName,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${businessName} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} - Personalización, Detailing y Performance`,
    description: businessDescription,
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "CarModification", "CarDetailing"],
  "name": businessName,
  "image": `${siteUrl}/logo.png`,
  "logo": `${siteUrl}/logo.png`,
  "description": businessDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessAddress.streetAddress,
    "addressLocality": businessAddress.addressLocality,
    "addressRegion": businessAddress.addressRegion,
    "postalCode": businessAddress.postalCode,
    "addressCountry": businessAddress.addressCountry
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.5800",
    "longitude": "-58.4800"
  },
  "url": siteUrl,
  "telephone": "+5491166100650",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": businessAddress.addressLocality
  },
  "service": [
    "Personalización de vehículos",
    "Polarizado profesional",
    "Detailing premium",
    "PPF - Paint Protection Film",
    "Suspensiones deportivas",
    "Mecánica general",
    "Alineación y balanceo",
    "Restauración estética"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden w-full`}>
        <Navbar />
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

