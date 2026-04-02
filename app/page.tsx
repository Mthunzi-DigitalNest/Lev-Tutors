import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site' // Assuming siteConfig is available for URL

export const metadata: Metadata = buildPageMetadata({
  title: 'Home',
  description: 'Lev Learning Hub Centre: Expert tutoring and academic support in Pretoria for primary, high school, and varsity students. Unlock your full potential with personalised learning.',
  path: '/',
})

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lev Learning Hub Centre",
  "image": `${siteConfig.url}/logo.png`,
  "url": siteConfig.url,
  "telephone": "+27670279825",
  "email": "mailto:info@levlearning.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47 Robert Sobukwe Street",
    "addressLocality": "Sunnyside",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/18S1HPv9No/?mibextid=wwXIfr",
    "https://www.instagram.com/lev_tutors_?igsh=MWo0dGgyZG96cWk0cg%3D%3D&utm_source=qr",
    "https://www.tiktok.com/@lev.tutors.hub",
    "https://wa.me/27670279825"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lev Learning Hub Centre Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Primary School Tutoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High School Tutoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Varsity Student Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer Skills Training" } }
    ]
  }
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Your existing home page content goes here */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Lev Learning Hub Centre!</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your journey to academic excellence starts here.</p>
        <Link href="/about" className="mt-8 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg">Learn More About Us</Link>
      </section>
    </main>
  )
}