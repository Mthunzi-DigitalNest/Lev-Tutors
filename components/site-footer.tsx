import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Learning Formats', href: '/learning-formats' },
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
                <svg className="w-4 h-4 text-navy-foreground/70 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.06 3.43-.01 6.85-.02 10.28-.01 1.35-.3 2.77-1.1 3.88-1.18 1.73-3.39 2.62-5.45 2.41-2.06-.11-4.06-1.31-5.02-3.14-1.1-2.02-1.01-4.69.24-6.6 1.01-1.61 2.87-2.65 4.77-2.63.1 1.43.02 2.86.02 4.28-.84-.04-1.72.15-2.4.68-.84.62-1.2 1.73-1.01 2.75.14 1.05.97 1.96 2.01 2.18 1.18.28 2.51-.15 3.23-1.14.45-.6.57-1.36.55-2.1-.02-3.61-.01-7.22-.01-10.83.01-1.39.01-2.78.01-4.17Z"/></svg>
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
            Empowering learners across South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
