import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/websiteData'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  function goToPrevious() {
    // Adding "+ length" before "% length" wraps the index around from 0 back to the last item.
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  function goToNext() {
    setActiveIndex((activeIndex + 1) % testimonials.length)
  }

  const current = testimonials[activeIndex]

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-avatar">{current.name.charAt(0)}</div>

            <div className="testimonial-stars">
              {/* Draw one filled star for each rating point (out of 5) */}
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < current.rating ? 'currentColor' : 'none'} />
              ))}
            </div>

            <p className="testimonial-review">"{current.review}"</p>
            <div className="testimonial-name">{current.name}</div>
            <div className="testimonial-location">{current.location}</div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={goToPrevious} aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>

            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button className="slider-btn" onClick={goToNext} aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
