import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0 })
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
    const targets = { projects: 15, years: 2, clients: 50 }
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
    <section id="about" className="py-20 px-[5%]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-12">About Me</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12">
          <p className="text-xl text-gray-400 leading-relaxed mb-12">Computer Science student at Lovely Professional University with expertise in full-stack development. Specialized in building scalable backend systems, AI-powered applications, and modern web solutions using React, Node.js, Python, and cloud technologies.</p>
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-5xl text-indigo-500 font-semibold mb-2">{counts.projects}+</h3>
              <p className="text-gray-400">Projects</p>
            </div>
            <div>
              <h3 className="text-5xl text-indigo-500 font-semibold mb-2">{counts.years}+</h3>
              <p className="text-gray-400">Years Exp</p>
            </div>
            <div>
              <h3 className="text-5xl text-indigo-500 font-semibold mb-2">{counts.clients}+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
