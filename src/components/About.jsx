const subjects = [
  'Mechanics of Solids',
  'Advanced Mechanics of Solids',
  'Fluid Mechanics',
  'Heat Transfer',
  'Applied Thermodynamics',
  'Material Science & Engineering',
  'Mechanisms and Machines',
  'Manufacturing Processes',
  'Advanced Manufacturing Processes',
  'Design of Machine Elements',
  'Computer-Aided Design',
  'Vibrations and Control',
  'Engineering Optimization',
  'Engines, Motors & Mobility',
  'Primemovers & Fluid Machinery',
  'Robotics',
  'AI for Robotics',
]

const skills = [
  'Fusion 360 / AutoCAD',
  'ANSYS / ABAQUS',
  'Robotic Kinematics',
  'DFM / Rapid Prototyping',
  'Python',
  'Machine Learning',
  'AI for Robotics',
  'GD&T',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Engineer by training,<br />builder by nature</h2>
        </div>

        <div className="about__grid">
          <div className="about__bio">
            <p>
              I'm a final-year Mechanical Engineering student at BITS Pilani, Goa
              (CGPA 8.70, graduating June 2026), with hands-on experience in mechanical
              design, CAD modelling, and CAE simulation. My work spans Fusion 360 and
              AutoCAD for design through to ABAQUS and ANSYS for finite element validation —
              from precision grippers and robot end effectors to numerical optimisation for
              material characterisation.
            </p>
            <p>
              I'm passionate about bridging mechanical engineering with emerging technologies —
              building autonomous robot simulations in Python, applying machine learning to
              engineering problems, and exploring AI for robotics. I thrive at the
              intersection of analytical rigour and hands-on problem-solving.
            </p>

            <p>
              Away from engineering, I'm a semi-professional footballer — I've represented
              my college in the Goa Football League (Third and Second Division) and competed
              in multiple inter-college tournaments.
            </p>
          </div>

          <div>
            <p className="about__skills-title">Tools &amp; Expertise</p>
            <div className="skills__grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  <span className="skill-item__dot" />
                  {skill}
                </div>
              ))}
            </div>

            <p className="about__skills-title" style={{ marginTop: '28px' }}>Coursework</p>
            <div className="skills__grid">
              {subjects.map((subject) => (
                <div key={subject} className="skill-item">
                  <span className="skill-item__dot" />
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
