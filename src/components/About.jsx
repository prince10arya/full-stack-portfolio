import { useEffect, useRef, useState } from 'react'
import './About.css'

export default function About() {
  const [counts, setCounts] = useState({ projects: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 15 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        projects: Math.min(Math.floor((targets.projects / steps) * step), targets.projects),
        years: Math.min(Math.floor((targets.years / steps) * step), targets.years),
        clients: Math.min(Math.floor((targets.clients / steps) * step), targets.clients)
      })
      if (step >= steps) clearInterval(timer)
    }, increment)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>Computer Science student at Lovely Professional University with expertise in full-stack development. Specialized in building scalable backend systems, AI-powered applications, and modern web solutions using React, Node.js, Python, and cloud technologies.</p>
          <div className="stats">
            <div className="stat-item">
              <h3>{counts.projects}+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
