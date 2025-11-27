import './Projects.css'

const projects = [
  {
    title: 'AI Research Agent',
    description: 'AI Research Assistant using LangGraph and LangChain for autonomous academic research workflows',
    tech: ['Python', 'Streamlit', 'LangChain', 'LangGraph'],
    link: 'https://github.com/prince10arya/ai-researcher-agent'
  },
  {
    title: 'Subscription Tracker API',
    description: 'Scalable REST API with JWT authentication, MongoDB transactions, and automated renewal workflows',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Upstash'],
    link: 'https://github.com/prince10arya/subscription-tracker-api'
  },
  {
    title: 'E-Ticket Booking System',
    description: 'Full-stack ticket booking system with Stripe payments and Clerk authentication',
    tech: ['React', 'Express.js', 'MongoDB', 'Stripe'],
    link: 'https://quickshow-e8i1.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
