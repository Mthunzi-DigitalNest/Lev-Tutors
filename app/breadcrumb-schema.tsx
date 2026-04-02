'use client'

import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/site'

export function BreadcrumbSchema() {
  const pathname = usePathname()
  
  // Split the path into segments and remove empty strings
  const segments = pathname.split('/').filter(Boolean)

  const breadcrumbs = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteConfig.url,
    },
  ]

  // Build the list for sub-pages
  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    // Convert "learning-formats" to "Learning Formats"
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())

    breadcrumbs.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `${siteConfig.url}${path}`,
    })
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}