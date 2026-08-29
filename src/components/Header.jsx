import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '../data/websiteData'

// The nav items. `id` must match the section id in App.jsx (e.g. id="about").
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Pujas', id: 'pujas' },
  { label: 'Contact', id: 'contact' },
]

export default function Header() {
  // `scrolled` tells us whether the user has scrolled down the page.
  // We use it to switch the navbar from transparent -> solid white.
  const [scrolled, setScrolled] = useState(false)

  // `menuOpen` controls the mobile hamburger menu.
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    // Cleanup: remove the listener when the component unmounts.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth-scrolls to a section by its id, then closes the mobile menu.
  function scrollToSection(id) {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-om">ॐ</span>
          <div className="brand-text">
            <h1>{siteConfig.shortName} Astrology Centre</h1>
            <p>{siteConfig.tagline}</p>
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button style={{width:"70px"}} key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            <Phone size={16} /> Book Consultation
          </button>

          {/* Hamburger icon toggles the mobile menu open/closed */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
