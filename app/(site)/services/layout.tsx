import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Tutoring Services',
  description:
    'Explore Lev Learning Hub Centre tutoring services for primary school, high school, varsity students, and computer skills training in Pretoria and online.',
  path: '/services',
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
