import * as Icons from 'lucide-react'
import { services } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Services() {
  const ref = useFadeIn()

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">Guidance for Every Challenge</h2>
          <p className="section-subtitle">
            Explore our range of Vedic astrology and Vastu services, each personalized to your
            unique chart and circumstances.
          </p>
        </div>

        <div ref={ref} className="services-grid fade-up">
          {services.map((service) => {
            const Icon = Icons[service.icon]
            return (
              <div className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="icon-wrap">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="card-link">
                Enquiry →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
