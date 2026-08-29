const marqueeText =
  'ॐ Vedic Astrology  •  ॐ Vastu Shastra  •  ॐ Kundali  •  ॐ Spiritual Guidance  •  ॐ Marriage Consultation  •  ॐ Career Guidance  •  '

export default function Marquee() {
  return (
    <div className="marquee-section">
      {/* We repeat the text twice so the scrolling loop looks seamless. */}
      <div className="marquee-track">
        <span>{marqueeText.repeat(2)}</span>
      </div>
    </div>
  )
}
