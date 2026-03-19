'use client'

import { useEffect } from 'react'

export function ScrollFloatIn() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animated = new WeakSet<Element>()
    const targets = document.querySelectorAll<HTMLElement>('section, [data-scroll-float]')

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-fade-float-visible'))
      return
    }

    targets.forEach((target) => target.classList.add('fade-float-init'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animated.has(entry.target)) {
            return
          }

          const element = entry.target as HTMLElement
          animated.add(element)
          observer.unobserve(element)
          element.classList.add('is-fade-float-visible')
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
