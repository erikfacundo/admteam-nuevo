const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admteam.com.ar"

interface MetadataOptions {
  title: string
  description: string
  keywords: string[]
  path: string
  ogTitle?: string
  ogDescription?: string
}

export function createMetadata({
  title,
  description,
  keywords,
  path,
  ogTitle,
  ogDescription,
}: MetadataOptions) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: `${siteUrl}${path}`,
      type: "website" as const,
      images: [`${siteUrl}/logo.png`],
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  }
}

