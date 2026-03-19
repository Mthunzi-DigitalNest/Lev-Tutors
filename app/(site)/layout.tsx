import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackToTopButton } from '@/components/back-to-top-button'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { ScrollFloatIn } from '@/components/scroll-float-in'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsAppButton />
      <BackToTopButton />
      <ScrollFloatIn />
    </>
  )
}
