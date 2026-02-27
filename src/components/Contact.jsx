import { Mail, Linkedin, Github, Phone } from 'lucide-react'

const contactLinks = [
  {
    label: 'Phone',
    href: 'tel:+917604853985',
    icon: <Phone size={20} />,
    text: '+91 76048 53985',
    external: false,
  },
  {
    label: 'Email',
    href: 'mailto:sreerampadmesh@gmail.com',
    icon: <Mail size={20} />,
    text: 'sreerampadmesh@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sreeram-ps/',
    icon: <Linkedin size={20} />,
    text: 'linkedin.com/in/sreeram-ps',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sreeramps10',
    icon: <Github size={20} />,
    text: 'github.com/sreeramps10',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div className="section__header">
          <span className="section__label">Contact</span>
          <h2 className="section__title">Let's Connect</h2>
          <p className="section__subtitle">
            I'm always open to discussing new opportunities, interesting projects,
            or just connecting with fellow engineers.
          </p>
        </div>

        <div className="contact__links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="contact__link"
            >
              {link.icon}
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
