import { useLayoutEffect, useState, type MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { Moon, Sun } from 'lucide-react'
import {
  awards,
  internships,
  profileData,
  projectExperience,
  researchProjects,
} from './Data/portfolio'
import { getRevealRadius, nextTheme, resolveInitialTheme, type Theme } from './theme'

const navItems = [
  ['ABOUT', 'about'],
  ['PUBLICATIONS', 'research'],
  ['PROJECTS', 'projects'],
]

const cvUrl = `${import.meta.env.BASE_URL}CV_LAU_KIN_WANG.pdf`

const projectGroups = [
  ['Research Projects', projectExperience.filter((project) => project.category === 'research')],
  ['Fun Projects', projectExperience.filter((project) => project.category === 'fun')],
] as const

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: (event: MouseEvent<HTMLButtonElement>) => void }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme(
    localStorage.getItem('theme'),
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  ))

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#111714' : '#f6f7f3',
    )
  }, [theme])

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const updatedTheme = nextTheme(theme)
    localStorage.setItem('theme', updatedTheme)

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(updatedTheme)
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = bounds.left + bounds.width / 2
    const y = bounds.top + bounds.height / 2
    const radius = getRevealRadius(x, y, window.innerWidth, window.innerHeight)

    document.documentElement.style.setProperty('--theme-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-y', `${y}px`)
    document.documentElement.style.setProperty('--theme-radius', `${radius}px`)
    document.documentElement.classList.add('theme-transitioning')

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(updatedTheme))
    })

    void transition.finished.finally(() => {
      document.documentElement.classList.remove('theme-transitioning')
    })
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#about" aria-label="Homepage">
          Kin Wang Lau<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          <a href={cvUrl} target="_blank" rel="noreferrer">CV</a>
          <a href="#contact">CONTACT</a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </nav>
        <div className="mobile-controls">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={cvUrl} target="_blank" rel="noreferrer">CV</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        </nav>
      )}
    </header>
  )
}

function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Researcher · Developer · Designer</p>
            <h1>Kin Wang Lau</h1>
            <p className="hero-lead">
              I am an undergraduate student at Tsinghua University. My research interests include human-computer interaction, immersive systems, and interactive intelligence. Although I am not yet fully proficient in research, I hope to pursue a Master's and PhD degree to further my academic studies.
            </p>
            <p className="hero-detail">
              I have a very diverse range of research and creative interests, including virtual reality, human-computer interaction, digital twins, game development, and 3D production.
            </p>
          </div>
          <figure className="portrait-wrap">
            <img src={profileData.avatar} alt="Kin Wang Lau" />
          </figure>
        </section>

        <section className="section-shell focus-section" aria-labelledby="focus-title">
          <h2 className="section-title" id="focus-title">Research interests</h2>
          <dl className="focus-list">
            <div>
              <dt>Human–Computer Interaction</dt>
              <dd>Designing and studying interactions that help people work, learn, and create with emerging technologies.</dd>
            </div>
            <div>
              <dt>Immersive Systems</dt>
              <dd>Building VR and AR experiences around gesture, speech, culture, perception, and embodied participation.</dd>
            </div>
            <div>
              <dt>Interactive Intelligence</dt>
              <dd>Exploring human–AI collaboration, adaptive tools, robotics, and intelligent physical–digital environments.</dd>
            </div>
          </dl>
        </section>

        <section className="section-shell" id="research">
          <SectionTitle
            title="Selected research"
            intro="I build prototypes to investigate how interaction techniques change experience, participation, and understanding."
          />
          <div className="work-list">
            {researchProjects.map((item) => (
              <article className="work-row" key={item.title}>
                <div className="work-image"><img src={item.image} alt="" /></div>
                <div className="work-copy">
                  <div className="work-meta"><span>{item.year}</span>{item.status && <span>{item.status}</span>}</div>
                  <h3>{item.title}</h3>
                  {item.citation && (
                    <div className="publication-details">
                      <p className="publication-authors">
                        {item.citation.authors.map((author, index) => (
                          <span key={author}>
                            {index > 0 && ', '}
                            {author === item.citation.highlightAuthor ? <strong>{author}</strong> : author}
                          </span>
                        ))}
                      </p>
                      {(item.citation.publisher || item.citation.doi) && (
                        <p className="publication-venue">
                          {item.status}
                          {item.citation.publisher && <> · {item.citation.publisher}</>}
                          {item.citation.doi && <> · <a href={item.citation.doi} target="_blank" rel="noreferrer">DOI</a></>}
                        </p>
                      )}
                    </div>
                  )}
                  <p>{item.description}</p>
                  <ul className="tag-list" aria-label="Research topics">
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="projects">
          <SectionTitle
            title="Projects"
            intro="A selection of independent and team projects across real-time systems, graphics, simulation, and software development."
          />
          <div className="project-groups">
            {projectGroups.map(([groupTitle, projects], groupIndex) => (
              <section className="project-group" key={groupTitle} aria-labelledby={`project-group-${groupIndex}`}>
                <h3 className="project-group-title" id={`project-group-${groupIndex}`}>{groupTitle}</h3>
                <div className={`project-grid${projects.length % 2 ? ' project-grid--odd' : ''}`}>
                  {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                      <img src={project.image} alt="" />
                      <div className="project-body">
                        <p className="work-meta"><span>{project.year}</span><span>{project.role}</span></p>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <ul className="tag-list" aria-label="Technologies used">
                          {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section-shell" id="experience">
          <SectionTitle title="Education and experience" />
          <div className="timeline-columns">
            <div>
              <h3>Education</h3>
              {profileData.education.map((item) => (
                <article className="timeline-item" key={item.school}>
                  <time>{item.year}</time>
                  <h4>{item.school}</h4>
                  <p className="education-details"><span>{item.detail}</span><span>{item.degree}</span></p>
                </article>
              ))}
            </div>
            <div>
              <h3>Research & industry</h3>
              {internships.map((item) => (
                <article className="timeline-item" key={item.org}>
                  <time>{item.year}</time>
                  <h4>{item.org}</h4>
                  <p>{item.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell toolkit-section">
          <SectionTitle title="Toolkit" />
          <div className="toolkit-grid">
            {Object.entries(profileData.skills).map(([category, skills]) => (
              <div key={category}>
                <h3>{category}</h3>
                <ul className="skill-list" aria-label={`${category} skills`}>
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="language-block">
            <h3>Languages</h3>
            <dl className="language-list">
              {profileData.languages.map((item) => (
                <div key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{item.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-shell" id="awards">
          <SectionTitle title="Honors and awards" />
          <div className="award-list">
            {awards.map((award, index) => (
              <div className="award-row" key={`${award.title}-${index}`}>
                <span>{award.title}</span><time>{award.year}</time>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="section-shell footer-inner">
          <div>
            <p className="footer-title">Contact</p>
            <div className="footer-emails">
              {profileData.emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
