import { ArrowLeft, Sparkles } from 'lucide-react'
import { pujas, siteConfig } from './data/websiteData'

export default function PujasPage() {
  return (
    <div className="pujas-page">
      <header className="pujas-page-header">
        <div className="container pujas-page-header-inner">
          <a href="/" className="pujas-brand">
            <span className="brand-om">ॐ</span>
            <span>{siteConfig.shortName}</span>
          </a>
          <a href="/" className="pujas-back">
            <ArrowLeft size={17} /> Back to Home
          </a>
        </div>
      </header>

      <main>
        <section className="pujas-page-hero">
          <div className="pujas-page-hero-glow" />
          <div className="container">
            <span className="section-eyebrow">Sacred Practices</span>
            <h1>Special Poojas & Spiritual Rituals</h1>
            <p>
              Explore traditional devotional practices and spiritual remedies
              offered with reverence, care and personalized guidance.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Our Offerings</span>
              <h2 className="section-title">Sacred Guidance, Thoughtfully Presented</h2>
              <p className="section-subtitle">
                Choose a ritual that resonates with your intention and speak with us
                to understand the appropriate process.
              </p>
            </div>

            <div className="puja-grid puja-page-grid">
              {pujas.map((puja) => (
                <article className="puja-card" key={puja.title}>
                  <img src={puja.image} alt={puja.title} />
                  <div className="puja-card-body">
                    <h3>{puja.title}</h3>
                    <p>{puja.description}</p>
                    <a
                      href={`/index.html?service=Puja%20%26%20Spiritual%20Remedies&puja=${encodeURIComponent(puja.title)}#contact`}
                      className="card-link"
                      onClick={() => {
                        // Take the visitor directly to the Request a Consultation section.
                        // The query parameters also pre-fill the selected puja in the form.
                        sessionStorage.setItem('scrollToConsultation', 'true')
                      }}
                    >
                      Enquire About This Ritual →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="pujas-page-footer">
        <div className="container">
          <Sparkles size={18} />
          <span>{siteConfig.siteName}</span>
        </div>
      </footer>
    </div>
  )
}
