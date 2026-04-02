'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumb() {
  const pathname = usePathname()
  
  // Don't show breadcrumbs on the home page
  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-xs font-medium text-muted-foreground">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="hover:text-primary flex items-center transition-colors"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join('/')}`
            const isLast = index === segments.length - 1
            const name = segment
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (l) => l.toUpperCase())

            return (
              <li key={path} className="flex items-center">
                <ChevronRight className="w-3.5 h-3.5 mx-1 text-muted-foreground/50" />
                {isLast ? (
                  <span className="text-foreground font-semibold" aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link href={path} className="hover:text-primary transition-colors">
                    {name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}