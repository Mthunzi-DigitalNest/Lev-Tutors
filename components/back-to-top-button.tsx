'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-accent text-accent-foreground shadow-md transition-all hover:bg-accent/90 business-hover-lift ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp className="mx-auto h-5 w-5" />
    </button>
  )
}
