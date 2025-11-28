import { useEffect, useRef } from 'react'

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

  return (
    <section id="skills" className="py-20 px-[5%]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-indigo-500 hover:-translate-y-1 transition-all">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-medium mb-4">{skill.name}</h3>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="skill-progress h-full bg-indigo-500 rounded-full transition-all duration-1000" data-progress={skill.progress} style={{ width: 0 }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
