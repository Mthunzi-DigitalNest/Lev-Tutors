import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BackToTopButton } from '@/components/back-to-top-button'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'
import { ScrollFloatIn } from '@/components/scroll-float-in'
import { BreadcrumbSchema } from '@/app/breadcrumb-schema'
import { Breadcrumb } from '@/components/breadcrumb'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema />
      <SiteHeader />
      <Breadcrumb />
      {children}
      <SiteFooter />
      <FloatingWhatsAppButton />
      <BackToTopButton />
      <ScrollFloatIn />
    </>
  )
}
