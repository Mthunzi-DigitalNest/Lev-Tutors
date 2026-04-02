import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Student Registration',
    description:
      'Legacy registration route for Lev Learning Hub Centre. This page redirects to the current student registration page.',
    path: '/quote',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children
}
