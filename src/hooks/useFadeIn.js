import { useEffect, useRef } from 'react'

// A small, beginner-friendly hook that adds the "is-visible" class
// to an element once it scrolls into view. Combine it with the
// `.fade-up` CSS class (see index.css) to get a simple fade+slide-up effect.
//
// Usage:
//   const ref = useFadeIn()
//   <div ref={ref} className="fade-up">...</div>
export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // IntersectionObserver tells us when an element enters the screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target) // only animate once
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
