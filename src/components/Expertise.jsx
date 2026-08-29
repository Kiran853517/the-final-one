import { expertise } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Expertise() {
  const ref = useFadeIn()

  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Areas of Expertise</span>
          <h2 className="section-title">Where Our Guidance Comes From</h2>
        </div>

        <div ref={ref} className="fade-up">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`expertise-block ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="expertise-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="expertise-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
