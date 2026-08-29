import * as Icons from 'lucide-react'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { quickServices } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'
import { useEffect, useRef } from 'react'

export default function QuickServices() {
  const ref = useFadeIn()
  const sliderRef = useRef(null)

  const slide = (direction) => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: direction * 320,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const timer = window.setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth
      const nextPosition = slider.scrollLeft + 320
      slider.scrollTo({
        left: nextPosition >= maxScroll - 8 ? 0 : nextPosition,
        behavior: 'smooth',
      })
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="quick-services">
      <div className="container">
        <div ref={ref} className="quick-showcase fade-up">
          <div className="quick-heading">
            <div>
              <span className="section-eyebrow">Begin Your Journey</span>
              <h2>Popular Guidance Services</h2>
              <p>Begin with a focused consultation and discover the right path for your needs.</p>
            </div>
            <div className="quick-slider-controls" aria-label="Service slider controls">
              <button type="button" onClick={() => slide(-1)} aria-label="Previous services">
                <ArrowLeft size={18} />
              </button>
              <button type="button" onClick={() => slide(1)} aria-label="Next services">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div ref={sliderRef} className="quick-slider">
            {quickServices.map((service) => {
              const Icon = Icons[service.icon]
              return (
                <article className="quick-card" key={service.title}>
                  <div className="quick-card-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="quick-card-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#services" className="card-link">
                    Explore →
                  </a>
                </article>
              )
            })}
          </div>

          <div className="quick-explore">
            <div className="quick-explore-copy">
              <Sparkles size={20} />
              <span>Looking for something more specific?</span>
            </div>
            <a href="#services" className="btn btn-dark-outline">
              Explore Other Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
