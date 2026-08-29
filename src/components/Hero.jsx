import { heroContent } from '../data/websiteData'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroContent.bgImage})` }}
    >
      {/* Two soft glowing circles just for a bit of decoration */}
      <div className="hero-glow one" />
      <div className="hero-glow two" />

      <div className="hero-content fade-up is-visible">
        <div className="hero-om">ॐ</div>
        <h1>{heroContent.heading}</h1>
        <h2>{heroContent.subheading}</h2>
        <p>{heroContent.description}</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Consultation
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
