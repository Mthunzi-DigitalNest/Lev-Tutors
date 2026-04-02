import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Pricing & Packages',
  description: 'Transparent pricing for our expert tutoring services in Pretoria. Choose the package that best fits your academic goals.',
  path: '/pricing',
})

const monthlyFees = [
  { grade: 'Grade R', fee: 'R650' },
  { grade: 'Grade 1', fee: 'R680' },
  { grade: 'Grade 2', fee: 'R680' },
  { grade: 'Grade 3', fee: 'R680' },
  { grade: 'Grade 4', fee: 'R700' },
  { grade: 'Grade 5', fee: 'R700' },
  { grade: 'Grade 6', fee: 'R750' },
  { grade: 'Grade 7', fee: 'R780' },
  { grade: 'Grade 8', fee: 'R850' },
  { grade: 'Grade 9', fee: 'R900' },
  { grade: 'Grade 10', fee: 'R1 000' },
  { grade: 'Grade 11', fee: 'R1 400' },
  { grade: 'Grade 12', fee: 'R1 650' },
]

const flexibleOptions = [
  { option: 'Per Day (Casual Students)', price: 'R180' },
  { option: 'Per Hour (Advanced Students)', price: 'R150' },
]

const computerProgram = [
  { program: 'Computer Lessons', details: 'Fridays & Saturdays' },
  { program: 'Monthly Fee', details: 'R550' },
]

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Lev Learning Hub Centre pricing"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Pricing List 2026
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
              Transparent & Affordable Pricing
            </h1>
            <p className="text-navy-foreground/80 text-lg leading-relaxed italic">
              Empowering Young Minds to Think Beyond
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Fees Table */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Monthly Fees */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">Monthly Fees</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="py-4 px-6 text-left font-semibold">Grade</th>
                    <th className="py-4 px-6 text-right font-semibold">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyFees.map((row, i) => (
                    <tr
                      key={row.grade}
                      className={i % 2 === 0 ? 'bg-background' : 'bg-secondary'}
                    >
                      <td className="py-3 px-6 text-foreground">{row.grade}</td>
                      <td className="py-3 px-6 text-right font-semibold text-foreground">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Flexible Learning Options */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-emerald-600 mb-6">Flexible Learning Options</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="py-4 px-6 text-left font-semibold">Option</th>
                    <th className="py-4 px-6 text-right font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {flexibleOptions.map((row, i) => (
                    <tr
                      key={row.option}
                      className={i % 2 === 0 ? 'bg-background' : 'bg-secondary'}
                    >
                      <td className="py-3 px-6 text-foreground">{row.option}</td>
                      <td className="py-3 px-6 text-right font-semibold text-foreground">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Computer Lessons Program */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-amber-600 mb-6">Computer Lessons Program</h2>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-400 text-amber-900">
                    <th className="py-4 px-6 text-left font-semibold">Program</th>
                    <th className="py-4 px-6 text-right font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {computerProgram.map((row, i) => (
                    <tr
                      key={row.program}
                      className={i % 2 === 0 ? 'bg-amber-50' : 'bg-amber-100/50'}
                    >
                      <td className="py-3 px-6 text-foreground">{row.program}</td>
                      <td className="py-3 px-6 text-right font-semibold text-foreground">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Register CTA */}
          <div className="text-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Need a custom plan?</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We understand that every student's needs are different. If you require support for multiple subjects, 
            siblings, or long-term intensive preparation, contact us for a customised quotation tailored 
            to your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Request a Personalised Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}