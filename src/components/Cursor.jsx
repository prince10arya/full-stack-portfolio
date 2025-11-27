import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      currentRef.current.x += (positionRef.current.x - currentRef.current.x) * 0.15
      currentRef.current.y += (positionRef.current.y - currentRef.current.y) * 0.15

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`
        outlineRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
