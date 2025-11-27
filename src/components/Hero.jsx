import ThreeCube from './ThreeCube'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <h1 className="glitch" data-text="Hi, I'm Prince">Hi, I'm Prince</h1>
        <h2 className="typewriter">Full Stack Developer</h2>
        <p className="hero-description">Crafting scalable backend solutions & elegant user experiences</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-3d">
        <ThreeCube />
      </div>
    </section>
  )
}
