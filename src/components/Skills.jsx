import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  { icon: '🐍', name: 'Python', progress: 85 },
  { icon: '☕', name: 'Java', progress: 80 },
  { icon: '⚛️', name: 'React', progress: 88 },
  { icon: '🟢', name: 'Node.js', progress: 90 },
  { icon: '🗄️', name: 'MongoDB', progress: 85 },
  { icon: '🐳', name: 'Docker', progress: 75 },
  { icon: '⚡', name: 'FastAPI', progress: 82 },
  { icon: '🍃', name: 'Spring Boot', progress: 78 }
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.skill-progress')
            if (progress) {
              progress.style.width = progress.dataset.progress + '%'
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div className="skill-progress" data-progress={skill.progress}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
