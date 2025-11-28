import ThreeCube from './ThreeCube'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-[5%] gap-16">
      <div className="flex-1">
        <h1 className="text-6xl font-bold mb-2">Hi, I'm Prince</h1>
        <h2 className="text-3xl text-indigo-500 mb-4 font-medium">Full Stack Developer</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-lg">Crafting scalable backend solutions & elegant user experiences</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-indigo-600 rounded-lg hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">View Work</a>
          <a href="#contact" className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-all">Get In Touch</a>
        </div>
      </div>
      <div className="flex-1 h-[500px]">
        <ThreeCube />
      </div>
    </section>
  )
}
