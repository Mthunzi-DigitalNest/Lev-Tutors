import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'

type SeoInput = {
  title: string
  description: string
  path: string
}

export function buildPageMetadata({ title, description, path }: SeoInput): Metadata {
  const canonical = path.startsWith('/') ? path : `/${path}`

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 512,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
  }
}
