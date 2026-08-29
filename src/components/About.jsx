import { CheckCircle2 } from 'lucide-react'
import { aboutContent } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="about-grid fade-up">
          <div className="about-image-wrap">
            <img src={aboutContent.image} alt="Our astrologer during a consultation" />
          </div>

          <div className="about-content">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">{aboutContent.heading}</h2>

            {aboutContent.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <ul className="trust-points">
              {aboutContent.trustPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} /> {point}
                </li>
              ))}
            </ul>

            <a href="#services" className="btn btn-dark-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
