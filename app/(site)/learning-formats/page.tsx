import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, Home, Wifi, CheckCircle, X } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Learning Formats',
  description:
    'Compare centre-based, home-to-home, and online tutoring formats at Lev Learning Hub Centre to choose the best option for your learner.',
  path: '/learning-formats',
})

const formats = [
  {
    icon: Building2,
    title: 'Centre-Based Classes',
    tagline: 'Learn in our dedicated academic environment',
    description:
      'Our tutoring centre provides a focused, resource-rich learning environment designed specifically for academic success. Away from household distractions, learners benefit from structured sessions, access to materials, and a motivating academic atmosphere.',
    benefits: [
      'Structured, distraction-free environment',
      'Access to all teaching resources and materials',
      'Group and individual session options',
      'Consistent, dedicated study space',
      'On-site tutor availability and support',
      'Peer learning opportunities',
    ],
    ideal: 'Learners who struggle to focus at home or benefit from a dedicated study environment.',
    available: true,
  },
  {
    icon: Home,
    title: 'Home-to-Home Tutoring',
    tagline: 'Expert tutors come to your door',
    description:
      'For families who prefer the convenience of learning at home, our qualified tutors travel directly to you. Home-to-home tutoring offers the ultimate in flexibility and comfort, with completely personalised one-on-one attention in a familiar setting.',
    benefits: [
      'Maximum convenience — no travel required',
      'Fully personalised one-on-one sessions',
      'Flexible scheduling to suit your routine',
      'Familiar, comfortable learning environment',
      'No time lost to commuting',
      'Parents can observe progress directly',
    ],
    ideal: 'Busy families, learners with transport challenges, or those needing maximum one-on-one focus.',
    available: true,
  },
  {
    icon: Wifi,
    title: 'Online Classes',
    tagline: 'Quality tutoring from anywhere in the world',
    description:
      'Our interactive online tutoring platform brings expert academic support directly to your screen. Using modern video tools, digital whiteboards, and shared resources, online sessions are as effective as in-person — with the added advantage of complete location flexibility.',
    benefits: [
      'Learn from anywhere — home, travel, or abroad',
      'Flexible scheduling across time zones',
      'Recorded sessions available for revision',
      'Digital resources shared instantly',
      'Interactive whiteboards and screen sharing',
      'No commuting — session begins on time',
    ],
    ideal: 'Learners in remote areas, those with busy schedules, or who prefer digital learning environments.',
    available: true,
  },
]

const comparisonRows = [
  { feature: 'One-on-One Sessions', centre: true, home: true, online: true },
  { feature: 'Group Sessions', centre: true, home: false, online: true },
  { feature: 'No Travel Required', centre: false, home: true, online: true },
  { feature: 'On-Site Resources', centre: true, home: false, online: false },
  { feature: 'Recorded Sessions', centre: false, home: false, online: true },
  { feature: 'Flexible Scheduling', centre: true, home: true, online: true },
  { feature: 'Tutor Comes to You', centre: false, home: true, online: false },
  { feature: 'Available Nationwide', centre: false, home: false, online: true },
]

export default function LearningFormatsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Lev Learning Hub Centre learning formats"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              How We Teach
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
              Learning Formats
            </h1>
            <p className="text-navy-foreground/80 text-lg leading-relaxed">
              We offer three flexible tutoring formats to suit every learner's lifestyle,
              location, and preference. All formats deliver the same high-quality instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Format Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {formats.map((format, idx) => (
              <div
                key={format.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? '' : ''
                }`}
              >
                {/* Icon & Title block */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <format.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {format.title}
                  </h2>
                  <p className="text-accent font-semibold text-sm mb-4">{format.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {format.description}
                  </p>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-foreground mb-1">Ideal for:</p>
                    <p className="text-sm text-muted-foreground">{format.ideal}</p>
                  </div>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Choose This Format <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Benefits */}
                <div className={`rounded-2xl overflow-hidden border border-border bg-card ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative h-52 flex">
                    <Image
                      src={
                        idx === 0
                          ? '/images/pic2.jpg'
                          : idx === 1
                          ? '/images/classroom-1.jpg'
                          : '/images/classroom-2.jpg'
                      }
                      alt={format.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/65" />
                    <div className="absolute bottom-4 left-5">
                      <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <format.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-5">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {format.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Side-by-Side
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Format Comparison
            </h2>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-6 py-4 text-sm font-semibold">Feature</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold">Centre-Based</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold">Home-to-Home</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold">Online</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-secondary'}>
                    <td className="px-6 py-4 text-sm text-foreground">{row.feature}</td>
                    <td className="px-4 py-4 text-center">
                      {row.centre ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.home ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {row.online ? (
                        <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-foreground text-balance mb-4">
            Choose Your Learning Format
          </h2>
          <p className="text-accent-foreground/80 leading-relaxed mb-8">
            Not sure which format is right for you? Request a quote and our team will help
            you choose the best option for your learner's needs and lifestyle.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-navy-foreground rounded-xl font-semibold text-base hover:bg-navy/90 transition-colors"
          >
            Register Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
