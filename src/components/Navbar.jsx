import { useState, useEffect } from 'react'
import './Navbar.css'

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
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="logo">Prince<span className="dot">.</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
