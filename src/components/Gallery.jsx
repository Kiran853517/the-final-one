import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { galleryImages } from '../data/websiteData'

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically move one image at a time.
  // The direction is right-to-left for the incoming image, giving a smooth
  // continuous carousel effect without changing the lightbox behaviour.
  useEffect(() => {
    if (galleryImages.length <= 1) return undefined

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % galleryImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  function showPrevious() {
    setSelectedIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length)
  }

  function showNext() {
    setSelectedIndex((index) => (index + 1) % galleryImages.length)
  }

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Moments From Our Centre</h2>
        </div>

        <div className="gallery-carousel">
          <div className="gallery-viewport">
            <div
              className="gallery-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div
                  className="gallery-slide"
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(index)
                  }}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <div className="gallery-item">
                    <img src={image.src} alt={image.alt} loading={index < 4 ? 'eager' : 'lazy'} />
                    <div className="gallery-overlay">
                      <ZoomIn size={28} />
                      <span>View Image</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-dots" aria-label="Gallery slides">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close">
            <X size={30} />
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
