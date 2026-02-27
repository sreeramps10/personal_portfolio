import ProjectCard from './ProjectCard'
import { assignmentProjects, engineeringProjects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">

        <div className="section__header">
          <span className="section__label">Mechanical Design</span>
          <h2 className="section__title">Engineering Projects</h2>
          <p className="section__subtitle">
            A selection of design assignments, research work, and mechanism designs
            from my experience as a mechanical engineer.
          </p>
        </div>

        <div className="projects__subsection">
          <h3 className="projects__subsection-title">Design Assignments</h3>
          <div className="projects__grid">
            {assignmentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="projects__subsection">
          <h3 className="projects__subsection-title">Projects</h3>
          <div className="projects__grid">
            {engineeringProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
