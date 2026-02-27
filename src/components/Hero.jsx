import { ArrowDown, FileText, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Open to new opportunities
        </div>

        <h1 className="hero__title">
          Hi, I'm{' '}
          <span className="hero__title-accent">Sreeram Padmesh</span>
        </h1>

        <p className="hero__role">Mechanical Design Engineer</p>

        <p className="hero__description">
          Designing precision-engineered solutions at the intersection of robotics,
          mechanism design, and simulation — from concept to detailed CAD.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            Explore Projects <ArrowDown size={16} />
          </a>
          <a
            href="/pdfs/Sreeram_Mech_Design.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <FileText size={16} /> View Resume
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll down">
        <span>scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}
