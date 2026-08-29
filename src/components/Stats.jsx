import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/websiteData'

// A single animated number. It counts up from 0 to `target`
// once the number scrolls into view.
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(element)
    return () => observer.disconnect()

    // Simple counting animation using setInterval.
    function animateCount() {
      const duration = 1500 // total animation time in ms
      const steps = 50
      const stepTime = duration / steps
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)
    }
  }, [target])

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
