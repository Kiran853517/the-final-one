import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { videos } from '../data/websiteData'

export default function Videos() {
  // Stores which video is open in the modal (or null if none is open).
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Wisdom</span>
          <h2 className="section-title">Wisdom & Spiritual Guidance</h2>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.title} onClick={() => setActiveVideo(video)}>
              <video src={video.src} muted preload="metadata" aria-label={video.title} />
              <div className="video-overlay">
                <div className="play-btn">
                  <Play size={22} fill="currentColor" />
                </div>
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple modal — only rendered when a video has been clicked */}
      {activeVideo && (
        <div className="lightbox" onClick={() => setActiveVideo(null)}>
          <button className="lightbox-close" onClick={() => setActiveVideo(null)}>
            <X size={30} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <video className="lightbox-video" src={activeVideo.src} controls autoPlay playsInline />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: 16 }}>{activeVideo.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
