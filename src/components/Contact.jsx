import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📧</span>
              <p>kumarprince729781@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="icon">🎓</span>
              <p>Lovely Professional University</p>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <p>Punjab, India</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/prince10arya" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
