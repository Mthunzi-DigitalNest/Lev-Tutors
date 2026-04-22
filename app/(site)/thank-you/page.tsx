import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Home, MessageCircle, Phone, Mail } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Thank You',
    description:
      'Thank you for contacting Lev Learning Hub Centre. Your enquiry has been received and our team will respond within 24 hours.',
    path: '/thank-you',
  }),
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-[calc(100vh-160px)] flex items-center bg-background py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-accent/15 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            Thank You — We Received Your Enquiry!
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-3">
            Your submission has been successfully received. A member of our team will
            review your details and get back to you within{' '}
            <span className="font-semibold text-foreground">24 hours</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            In the meantime, feel free to explore our website or reach out to us directly
            if you have any urgent questions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
            <a
              href="https://wa.me/27670279825"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-base hover:bg-[#22c45e] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact on WhatsApp
            </a>
          </div>

          {/* Quick contact strip */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-5">
              Need to reach us immediately?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27670279825"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                067 027 9825
              </a>
              <a
                href="mailto:info@levtutors.co.za"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@levtutors.co.za
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
