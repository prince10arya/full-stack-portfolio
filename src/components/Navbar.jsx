import { useState, useEffect } from 'react'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setHidden(currentScroll > lastScroll && currentScroll > 100)
      setLastScroll(currentScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <nav className={`fixed top-0 w-full px-[5%] py-5 flex justify-between items-center bg-black/90 backdrop-blur-lg z-50 border-b border-zinc-800 transition-transform ${hidden ? '-translate-y-full' : ''}`}>
      <div className="text-2xl font-semibold">Prince<span className="text-indigo-500">.</span></div>
      <ul className="flex gap-8 list-none">
        <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
        <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}
