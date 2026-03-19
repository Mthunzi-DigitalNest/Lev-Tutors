import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/learning-formats',
    '/contact',
    '/register',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/register' || route === '/contact' ? 0.9 : 0.8,
  }))
}
