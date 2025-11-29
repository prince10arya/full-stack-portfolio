const projects = [
  {
    title: "AI Research Agent",
    description:
      "AI Research Assistant using LangGraph and LangChain for autonomous academic research workflows",
    tech: ["Python", "Streamlit", "LangChain", "LangGraph"],
    link: "https://github.com/prince10arya/ai-researcher-agent",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Subscription Tracker API",
    description:
      "Scalable REST API with JWT authentication, MongoDB transactions, and automated renewal workflows",
    tech: ["Node.js", "Express.js", "MongoDB", "Upstash"],
    link: "https://github.com/prince10arya/subscription-tracker-api",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "E-Ticket Booking System",
    description:
      "Full-stack ticket booking system with Stripe payments and Clerk authentication",
    tech: ["React", "Express.js", "MongoDB", "Stripe"],
    link: "https://quickshow-e8i1.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    title: "QR File Sharing",
    description:
      "Web app to share files via QR codes, built with React and Node.js. A simple, fast, and hassle-free way for printing-shop customers to share documents without WhatsApp or Email. Customers scan a QR code → upload a file → shop staff download it from a secure dashboard.",
    tech: ["React", "Node.js", "Express.js", "Multer", "AWS S3 Bucket"],
    link: "https://qr-file-sharing.vercel.app/",
    image: "../../static/images/Screenshot (5).png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-5xl font-semibold text-center">Featured Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group h-[350px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500 hover:-translate-y-1 transition-all relative">
              <img src={project.image} alt={project.title} className="absolute inset-0 object-cover w-full h-full" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 transition-opacity opacity-0 bg-black/95 group-hover:opacity-100">
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm text-gray-400 rounded-md bg-zinc-800">{tech}</span>
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
