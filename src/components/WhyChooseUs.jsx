import * as Icons from 'lucide-react'
import { whyChooseUs } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function WhyChooseUs() {
  const ref = useFadeIn()

  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title">Why Choose Our Centre?</h2>
        </div>

        <div ref={ref} className="why-grid fade-up">
          {whyChooseUs.map((item) => {
            const Icon = Icons[item.icon]
            return (
              <div className="why-card" key={item.title}>
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
