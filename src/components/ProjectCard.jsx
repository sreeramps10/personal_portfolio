import { useState } from 'react'
import { FileText } from 'lucide-react'

const CATEGORY_COLORS = {
  'Robotics':                  '#2563EB',
  'Simulation & Research':     '#7C3AED',
  'Product Design':            '#059669',
  'Robot Mechanism':           '#EA580C',
  'Mechanism Design':          '#0891B2',
  'Unmanned Systems':          '#DC2626',
  'Precision Instrumentation': '#4F46E5',
  'Research':                  '#6B7280',
}

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const pdfUrl = `/pdfs/${encodeURIComponent(project.pdfFile)}`
  const accent = CATEGORY_COLORS[project.category] ?? '#2563EB'

  return (
    <div className="project-card" style={{ '--accent': accent }}>
      {project.image && (
        <div className="project-card__image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-card__accent" />
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className={`project-card__description${expanded ? ' project-card__description--expanded' : ''}`}>
          {project.description}
        </p>
        <button
          className="project-card__toggle"
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__pdf-btn"
        >
          <FileText size={15} />
          View Report
        </a>
      </div>
    </div>
  )
}
