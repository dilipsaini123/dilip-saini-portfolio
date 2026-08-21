import { useEffect, useRef, useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaCloud,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaLaptopCode,
  FaBrain,
  FaToolbox,
} from 'react-icons/fa'
import {
  profile,
  experience,
  projects,
  skills,
  education,
} from './data.js'

const skillIcons = [
  <FaCloud />, <FaServer />, <FaDatabase />, <FaNetworkWired />, <FaShieldAlt />,
  <FaChartLine />, <FaTools />, <FaLaptopCode />, <FaDatabase />, <FaBrain />, <FaToolbox />,
]

function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#home" className="nav-logo">
          Dilip <span>Saini</span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="hero-kicker">Hi, my name is</p>
          <h1>{profile.name}</h1>
          <h2>
            {profile.role} at <strong>{profile.company}</strong>
          </h2>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get In Touch
            </a>
            <a className="btn btn-outline" href="#experience">
              View My Work
            </a>
          </div>
          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <FaCode />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Dilip Saini" />
          </div>
        </div>
      </div>
    </header>
  )
}

function Stats() {
  return (
    <div className="container">
      <div className="stats">
        {profile.highlights.map((h) => (
          <div className="stat-card" key={h.label}>
            <div className="stat-value">{h.value}</div>
            <div className="stat-label">{h.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
          <p className="section-sub">
            My professional journey as a Software Engineer — from building .NET microservices to
            managing enterprise-scale Azure cloud infrastructure.
          </p>
        </Reveal>
        <div className="timeline">
          {experience.map((exp) => (
            <Reveal className="timeline-item" key={exp.company + exp.period}>
              <div className="exp-card">
                <div className="exp-head">
                  <div className="exp-title-group">
                    {exp.logo && (
                      <img className="company-logo" src={exp.logo} alt={`${exp.company} logo`} />
                    )}
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">
                        {exp.company} · <FaMapMarkerAlt style={{ fontSize: '0.8em' }} />{' '}
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {exp.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-sub">
            Products I have built and shipped — focused on performance, scalability, and automation.
          </p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((proj) => (
            <Reveal key={proj.name}>
              <div className="project-card">
                <div className="project-head">
                  {proj.logo && (
                    <img className="company-logo" src={proj.logo} alt={`${proj.org} logo`} />
                  )}
                  <div>
                    <div className="project-name">{proj.name}</div>
                    <div className="project-org">
                      {proj.org} · {proj.period}
                    </div>
                  </div>
                </div>
                <p className="project-desc">{proj.description}</p>
                <ul className="exp-points">
                  {proj.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="tags" style={{ marginTop: 16 }}>
                  {proj.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>
          <p className="section-sub">
            A broad toolkit spanning Azure cloud, .NET development, DevOps, and infrastructure as code.
          </p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, idx) => (
            <Reveal key={group.category}>
              <div className="skill-card">
                <div className="skill-cat">
                  {skillIcons[idx % skillIcons.length]} {group.category}
                </div>
                <div className="tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span>Education</span>
          </h2>
          <p className="section-sub">My academic background.</p>
        </Reveal>
        <div className="edu-grid">
          {education.map((edu) => (
            <Reveal key={edu.degree}>
              <div className="edu-card">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institute">{edu.institute}</div>
                <div className="edu-meta">
                  <span>{edu.period}</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            I'm open to new opportunities and collaborations. Whether you have a question or just
            want to say hi, my inbox is always open!
          </p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <FaEnvelope /> {profile.email}
            </a>
            <a className="btn btn-outline" href={`tel:${profile.phone.replace(/-/g, '')}`}>
              <FaPhone /> {profile.phone}
            </a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <section id="about" style={{ paddingTop: 40, paddingBottom: 0 }} />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · Built with React
        </div>
      </footer>
    </>
  )
}
