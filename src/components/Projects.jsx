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
    <section id="projects" className="py-20 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group h-[350px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500 hover:-translate-y-1 transition-all relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
              <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800 rounded-md text-sm text-gray-400">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
