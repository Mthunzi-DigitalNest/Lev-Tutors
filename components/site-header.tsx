'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Learning Formats', href: '/learning-formats' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerBgClass = 'bg-primary'

  return (
    <header className={`${headerBgClass} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1 lg:py-1 min-h-14 lg:min-h-17">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Lev Tutors Hub – Home"
          >
            <span className={`inline-flex h-24 w-24 lg:h-28 lg:w-28 m-2 ${headerBgClass}`}>
              <Image
                src="/logo.png"
                alt="Lev Tutors Hub"
                width={112}
                height={112}
                className="h-full w-full object-contain p-1"
                priority
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors business-hover-lift',
                  pathname === link.href
                    ? 'text-accent bg-primary-foreground/10'
                    : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors business-hover-lift"
            >
              Register Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors business-hover-lift"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden border-t border-primary-foreground/10 ${headerBgClass} px-4 pb-4 pt-2`}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors business-hover-lift',
                  pathname === link.href
                    ? 'text-accent bg-primary-foreground/10'
                    : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold text-center hover:bg-accent/90 transition-colors business-hover-lift"
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
