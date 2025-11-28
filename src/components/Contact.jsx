import { useState } from 'react'

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
    <section id="contact" className="py-20 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-2 gap-12">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors" />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none" />
            <button type="submit" className="px-8 py-3 bg-indigo-600 rounded-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">Send Message</button>
          </form>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <p className="text-gray-400">prince10arya@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎓</span>
              <p className="text-gray-400">Lovely Professional University</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <p className="text-gray-400">Punjab, India</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/prince10arya" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500 transition-colors">GitHub</a>
              <a href="#" className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500 transition-colors">LinkedIn</a>
              <a href="#" className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-indigo-500 transition-colors">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
