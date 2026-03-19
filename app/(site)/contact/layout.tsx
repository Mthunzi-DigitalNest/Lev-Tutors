import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us',
  description:
    'Contact Lev Learning Hub Centre for tutoring enquiries, WhatsApp support, phone assistance, or directions to our Pretoria learning centre.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
