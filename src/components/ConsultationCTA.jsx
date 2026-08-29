import { Phone } from 'lucide-react'
import { siteConfig } from '../data/websiteData'

function WhatsAppIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.97L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.16-3.45-8.45ZM12.07 21.8a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.9 9.9Zm5.42-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  )
}

export default function ConsultationCTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <h2 className="section-title">Ready to Find Clarity?</h2>
        <p>
          Book a personalized consultation and receive guidance based on your individual needs.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Consultation
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn btn-outline">
            <Phone size={16} /> Call Now
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
