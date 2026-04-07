import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Learning Formats', href: '/learning-formats' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Register Now', href: '/register' },
  { label: 'Contact Us', href: '/contact' },
]

const services = [
  'Primary School Tutoring',
  'High School Tutoring',
  'Varsity Student Support',
  'Computer Skills Training',
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex w-full items-center justify-center mb-4" aria-label="Lev Tutors Hub – Home">
              <span className="inline-flex h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src="/logo.png"
                  alt="Lev Tutors Hub"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </span>
            </Link>
            <p className="text-sm text-navy-foreground/70 leading-relaxed mb-5 text-center">
              Expert tutoring and academic support for learners of all levels. Building bright
              futures, one student at a time.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/share/18S1HPv9No/?mibextid=wwXIfr"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-navy-foreground/10 hover:bg-gold/20 flex items-center justify-center transition-colors business-hover-lift"
              >
                <Facebook className="w-4 h-4 text-navy-foreground/70" />
              </a>
              <a
                href="https://www.instagram.com/lev_tutors_?igsh=MWo0dGgyZG96cWk0cg%3D%3D&utm_source=qr"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-navy-foreground/10 hover:bg-gold/20 flex items-center justify-center transition-colors business-hover-lift"
              >
                <Instagram className="w-4 h-4 text-navy-foreground/70" />
              </a>
              <a
                href="https://www.tiktok.com/@lev.tutors.hub"
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-navy-foreground/10 hover:bg-gold/20 flex items-center justify-center transition-colors business-hover-lift"
              >
                <svg className="w-4 h-4 text-navy-foreground/70 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.96.44.53 1.11.88 1.79.94.7.05 1.41-.18 1.97-.61.55-.37.92-.97.92-1.64.07-4.46.03-8.93.03-13.39z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-navy-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 hover:text-gold transition-colors business-hover-lift"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-navy-foreground uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-navy-foreground/70 hover:text-gold transition-colors business-hover-lift"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-navy-foreground uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+27670279825" className="text-sm text-navy-foreground/70 hover:text-gold transition-colors block business-hover-lift">
                    067 027 9825
                  </a>
                  <a href="tel:+27614603297" className="text-sm text-navy-foreground/70 hover:text-gold transition-colors block business-hover-lift">
                    061 460 3297
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@levlearning.co.za" className="text-sm text-navy-foreground/70 hover:text-gold transition-colors business-hover-lift">
                  info@levlearning.co.za
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-navy-foreground/70">
                  47 Robert Sobukwe Street,<br />Sunnyside, Pretoria
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-sm text-navy-foreground/70">
                  <p>Mon – Fri: 8:00 – 18:00</p>
                  <p>Sat: 8:00 – 13:00</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-foreground/50">
            &copy; {new Date().getFullYear()} Lev Learning Hub Centre. All rights reserved.
          </p>
          <p className="text-xs text-navy-foreground/40">
            Developed by{' '}
            <a
              href="https://mthunzidigitalnest.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-foreground/50 hover:text-gold transition-colors"
            >
              Mthunzi DigitalNest
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
