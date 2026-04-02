import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Pricing',
    description:
      'View our transparent and affordable tutoring rates for students in Pretoria.',
    path: '/pricing',
  }),
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
