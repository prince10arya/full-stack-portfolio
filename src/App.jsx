import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; 2024 Prince. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
