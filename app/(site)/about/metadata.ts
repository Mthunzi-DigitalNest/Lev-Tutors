import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About Us',
  description:
    'Learn more about Lev Learning Hub Centre, our mission, values, and commitment to personalised academic support for learners across South Africa.',
  path: '/about',
})
