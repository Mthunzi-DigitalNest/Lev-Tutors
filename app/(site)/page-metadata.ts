import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Expert Tutors in Pretoria',
  description:
    'Lev Learning Hub Centre provides primary school, high school, varsity, and computer skills tutoring in Pretoria with centre-based, home, and online options.',
  path: '/',
})