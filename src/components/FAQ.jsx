import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/websiteData'

export default function FAQ() {
  // openIndex stores WHICH question is currently open (its position in the array).
  // null means "none open". Because it's a single value (not an array),
  // only one question can be open at a time — exactly what we want.
  const [openIndex, setOpenIndex] = useState(null)

  function toggleQuestion(index) {
    // If the clicked question is already open, close it (set to null).
    // Otherwise, open the clicked one.
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={item.question} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleQuestion(index)}>
                {item.question}
                <ChevronDown className="chevron" size={20} />
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
