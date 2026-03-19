import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Student Registration',
  description:
    'Register for tutoring with Lev Learning Hub Centre. Submit your learner details, preferred subjects, and learning format for personalised academic support.',
  path: '/register',
})

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children
}
