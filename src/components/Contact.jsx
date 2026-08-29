import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { serviceOptions, siteConfig } from '../data/websiteData'
import { emailConfig } from '../emailConfig'

// The "shape" of an empty form — used to reset the form after submit.
const emptyForm = {
  fullName: '',
  phone: '',
  email: '',
  dob: '',
  timeOfBirth: '',
  placeOfBirth: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  // When a visitor comes from the Pujas page, preselect the puja service
  // and include the selected ritual in the message.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    const puja = params.get('puja')

    if (service || puja) {
      setFormData((current) => ({
        ...current,
        service: service || current.service,
        message: puja
          ? `I would like to enquire about ${puja}.`
          : current.message,
      }))
    }

    // When arriving from a ritual enquiry, move directly to the
    // "Request a Consultation" section after the page has rendered.
    if (window.location.hash === '#contact' || sessionStorage.getItem('scrollToConsultation') === 'true') {
      sessionStorage.removeItem('scrollToConsultation')
      window.setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 150)
    }
  }, [])

  // Runs on every keystroke / change in any input field.
  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Very simple validation — checks the required fields are filled in
  // and that the email/phone look roughly correct.
  function validate() {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.'

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.dob) newErrors.dob = 'Date of birth is required.'
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = 'Place of birth is required.'
    if (!formData.service) newErrors.service = 'Please select a service.'

    return newErrors
  }

  async function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page

    const validationErrors = validate()
    setErrors(validationErrors)
    setSendError('')

    // If there are no error messages, the form is valid — send the email.
    if (Object.keys(validationErrors).length === 0) {
      setSending(true)

      // Field names here must match the {{variables}} used in the EmailJS
      // template (see src/emailConfig.js for setup instructions).
      const templateParams = {
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        dob: formData.dob,
        time_of_birth: formData.timeOfBirth || 'Not provided',
        place_of_birth: formData.placeOfBirth,
        service: formData.service,
        message: formData.message || 'No additional message.',
      }

      try {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          { publicKey: emailConfig.publicKey }
        )

        setSubmitted(true)
        setFormData(emptyForm)
        setTimeout(() => setSubmitted(false), 5000)
      } catch (err) {
        console.error('EmailJS send failed:', err)
        setSendError(
          'Sorry, something went wrong sending your request. Please try again, or contact us directly by phone or WhatsApp.'
        )
      } finally {
        setSending(false)
      }
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Request a Consultation</h2>
        </div>

        <div className="contact-grid">
          {/* ---- LEFT: the form ---- */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="form-success">
                Thank you! Your consultation request has been received. We will contact you soon.
              </div>
            )}

            {sendError && <div className="form-error-banner">{sendError}</div>}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="form-error">{errors.fullName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                {errors.dob && <p className="form-error">{errors.dob}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="timeOfBirth">Time of Birth</label>
                <input
                  id="timeOfBirth"
                  name="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="placeOfBirth">Place of Birth</label>
              <input
                id="placeOfBirth"
                name="placeOfBirth"
                type="text"
                placeholder="City, State, Country"
                value={formData.placeOfBirth}
                onChange={handleChange}
              />
              {errors.placeOfBirth && <p className="form-error">{errors.placeOfBirth}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && <p className="form-error">{errors.service}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us briefly what guidance you are looking for..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
              style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
            >
              {sending ? 'Sending...' : 'Submit Consultation Request'}
            </button>
          </form>

          {/* ---- RIGHT: contact info ---- */}
          <div>
            <div className="contact-info-card">
              <div className="contact-info-row">
                <div className="icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>{siteConfig.address}</p>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="icon-wrap">
                  <Phone size={18} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{siteConfig.email}</p>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="icon-wrap">
                  <Clock size={18} />
                </div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <div className="contact-quick-buttons" style={{ marginBottom: 20 }}>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn btn-primary">
                <Phone size={16} /> Call
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-dark-outline">
                <Mail size={16} /> Email
              </a>
            </div>

            {/* Google Maps placeholder — replace src with your real location embed */}
            <iframe
              className="map-frame"
              src={siteConfig.mapEmbedUrl}
              title="Centre location on map"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
