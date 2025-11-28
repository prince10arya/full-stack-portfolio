import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const glowRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const glowPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      currentRef.current.x += (positionRef.current.x - currentRef.current.x) * 0.15
      currentRef.current.y += (positionRef.current.y - currentRef.current.y) * 0.15
      
      glowPosition.current.x += (positionRef.current.x - glowPosition.current.x) * 0.08
      glowPosition.current.y += (positionRef.current.y - glowPosition.current.y) * 0.08

      if (dotRef.current && outlineRef.current && glowRef.current) {
        dotRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`
        outlineRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
        glowRef.current.style.transform = `translate(${glowPosition.current.x}px, ${glowPosition.current.y}px)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
