import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, ChevronDown, Code2, ExternalLink, Mail, Menu, Minus, Network, X } from 'lucide-react'
import { aboutParagraphs, education, engineeringGroups, experiences, focusPath, identity, marqueeItems, navItems, projects, recognition, type Project } from './data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const
const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } } }

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ delay: reduce ? 0 : delay }}>{children}</motion.div>
}

function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="eyebrow">{index} /</span><h2>{title}</h2>{note && <span className="section-note">{note}</span>}</div>
}

function SignalMark() { return <span className="signal-mark" aria-hidden="true"><i /><i /><i /></span> }

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="wordmark" href="#top" onClick={() => setOpen(false)}><SignalMark /><span>HAROON HASAN</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
      {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
    </nav>
  </header>
}

function SystemVisual() {
  return <div className="system-visual" aria-label="Abstract computational system visual" role="img">
    <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="visual-orbit orbit-c" />
    <div className="visual-core"><span>HH</span><b /></div>
    <span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="node node-d" />
    <div className="scan-line" /><span className="visual-label label-a">SYS / 01</span><span className="visual-label label-b">ACTIVE</span><span className="visual-label label-c">AI + SYSTEMS</span>
  </div>
}

function Hero() {
  const reduce = useReducedMotion()
  const stagger = reduce ? 0 : 0.09
  return <section className="hero" id="top">
    <div className="hero-grid" />
    <div className="hero-copy">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: stagger }} className="eyebrow hero-kicker"><span className="status-dot" />{identity.role}</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .86, delay: stagger * 2 }}>EXPLORING AI,<br /><em>BUILDING REAL-WORLD</em><br />SYSTEMS,<br /><em>AND LEARNING BY SHIPPING.</em></motion.h1>
      <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: stagger * 4 }}>AI/ML student from Mumbai building projects, experimenting with intelligent systems, and learning through real-world execution.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: stagger * 5 }}><a className="button button-primary" href="#work">View work <ArrowDownRight size={16} /></a><a className="button button-quiet" href="#contact">Let’s connect <ArrowUpRight size={16} /></a></motion.div>
    </div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .15, ease }}><SystemVisual /></motion.div>
    <div className="hero-meta"><span>Based in / <b>Mumbai</b></span><span>Focus / <b>AI + systems</b></span><span>Status / <b className="accent-text">Building</b></span></div>
    <div className="hero-scroll"><span>Scroll to explore</span><ChevronDown size={16} /></div>
  </section>
}

function Marquee() { const items = [...marqueeItems, ...marqueeItems]; return <div className="marquee" aria-label="Areas of interest"><div className="marquee-track">{items.map((item, index) => <span key={`${item}-${index}`}>{item}<i>↗</i></span>)}</div></div> }

function About() { return <section className="section about-section" id="about"><div className="container"><SectionHeading index="01" title="About" note="the human behind the systems" /><div className="about-layout"><Reveal className="about-lead"><span className="display-quote">Learning by<br /><em>shipping.</em></span><span className="side-index">MUMBAI, INDIA</span></Reveal><div className="about-copy">{aboutParagraphs.map((paragraph, index) => <Reveal key={paragraph} delay={index * .05}><p className={index === 3 ? 'about-close' : ''}>{paragraph}</p></Reveal>)}</div></div></div></section> }

function AcademicTrajectory() { return <section className="section journey-section" id="journey"><div className="container"><SectionHeading index="02" title="Academic trajectory" note="a path still in motion" /><Reveal><div className="education-intro"><div><span className="eyebrow">Program</span><h3>{education.program}</h3><p>{education.college}<br />{education.university}</p></div><div className="education-years">{education.years}</div></div></Reveal><div className="semester-wrap"><div className="progress-line"><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }} /></div><div className="semester-grid">{education.semesters.map((semester, index) => <Reveal key={semester.label} delay={index * .08}><div className={`semester-card ${semester.state === 'current' ? 'is-current' : ''}`}><span className="eyebrow">{semester.label}</span><strong>{semester.value}</strong><span>{semester.detail}</span>{semester.state === 'complete' && <span className="semester-marker">●</span>}</div></Reveal>)}</div><div className="grade-shift"><span>Progression</span><strong>7.23 <i>→</i> 8.73</strong><small>+ 1.50 across the first two semesters</small></div></div></div></section> }

function Experience() { return <section className="section experience-section"><div className="container"><SectionHeading index="03" title="Experience" note="projects, teams, momentum" /><div className="experience-list">{experiences.map((experience, index) => <Reveal key={experience.number} delay={index * .08}><article className="experience-item"><span className="item-number">{experience.number}</span><div className="experience-main"><div className="experience-top"><span className="eyebrow">{experience.year}</span><span className="experience-badge">{experience.achievement}</span></div><h3>{experience.title}</h3><p>{experience.role}</p><span className="experience-detail">{experience.detail}</span></div><ArrowUpRight className="item-arrow" size={20} /></article></Reveal>)}</div></div></section> }

function Engineering() { return <section className="section engineering-section"><div className="container"><SectionHeading index="04" title="Engineering" note="tools in the making" /><div className="engineering-layout"><div className="skill-groups">{engineeringGroups.map((group, index) => <Reveal key={group.label} delay={index * .04}><div className="skill-group"><span className="eyebrow">{group.label}</span><div>{group.items.map((item) => <span key={item} className="skill-pill">{item}</span>)}</div></div></Reveal>)}</div><Reveal className="focus-card"><span className="eyebrow">Current focus / learning direction</span><h3>Building the<br /><em>next layer.</em></h3><div className="focus-path">{focusPath.map((item, index) => <div className="focus-step" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < focusPath.length - 1 && <Minus size={13} />}</div>)}</div><p>This is a learning and research direction — not a claim of professional expertise.</p></Reveal></div></div></section> }

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'creator') return <div className="project-visual creator-visual"><div className="visual-topbar"><span /><span /><b>CREATORAI / STUDIO</b><small>● LIVE</small></div><div className="creator-columns"><div className="creator-sidebar"><i /><i /><i /><i /></div><div className="creator-board"><span className="eyebrow">Content map / 06 outputs</span><div className="board-lines"><i /><i /><i /><i /></div><div className="board-panels"><b>SHORTS</b><b>THREADS</b><b>NEWSLETTER</b></div></div></div><div className="visual-foot">INPUT: LONG-FORM RECORDING <span>→</span> OUTPUT: REUSABLE CONTENT</div></div>
  if (project.visual === 'elia') return <div className="project-visual elia-visual"><div className="elia-ring" /><div className="elia-ring ring-two" /><div className="elia-core"><span>ELIA</span><small>MARKETING<br />COMMAND CENTER</small></div><div className="elia-node n1">SIGNAL</div><div className="elia-node n2">AGENT</div><div className="elia-node n3">CAMPAIGN</div><span className="achievement-stamp">FINALIST</span></div>
  return <div className="project-visual date-visual"><div className="terminal-head"><span>date-intelligence-engine.py</span><small>Python</small></div><pre>{`$ python date_engine.py --date 06/10/2026\n\nGREGORIAN   06 OCT 2026\nHIJRI       24 RABI II 1448\nSHAKA       14 BHADRA 1948\nZODIAC      LIBRA\n\nON THIS DAY  /  context loaded_`}</pre></div>
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) { return <Reveal className={`project-card-wrap ${featured ? 'featured' : ''}`}><article className={`project-card ${featured ? 'is-featured' : ''}`}><div className="project-card-head"><div><span className="eyebrow">{project.number} / {project.eyebrow}</span><h3>{project.title}</h3></div>{project.achievement && <span className="project-achievement">{project.achievement}</span>}</div><div className="project-card-body"><div className="project-copy"><p className="project-summary">{project.summary}</p><p>{project.description}</p>{project.context && <span className="project-context">{project.context}{project.role && <> <i>·</i> {project.role}</>}</span>}{project.year && <span className="project-context">Year / {project.year}</span>}<div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>{project.links.length > 0 && <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}<ExternalLink size={13} /></a>)}</div>}</div><div className="project-art"><ProjectVisual project={project} /></div></div>{project.workflow && <div className="workflow"><span className="eyebrow">Workflow</span><div>{project.workflow.map((step, index) => <span key={step}>{step}{index < project.workflow!.length - 1 && <i>→</i>}</span>)}</div></div>}{project.features && <div className="feature-list"><span className="eyebrow">Features</span><div>{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></div>}</article></Reveal> }

function Projects() { return <section className="section projects-section" id="work"><div className="container"><SectionHeading index="05" title="Selected work" note="things made real" /><div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0} />)}</div></div></section> }

function Recognition() { return <section className="section recognition-section"><div className="container"><SectionHeading index="06" title="Recognition" note="signals along the way" /><div className="recognition-grid">{recognition.map((item, index) => <Reveal key={`${item.issuer}-${item.title}`} delay={index * .05}><article className={`recognition-card ${item.featured ? 'is-featured' : ''}`}><span className="recognition-index">0{index + 1}</span><span className="eyebrow">{item.type}</span><h3>{item.title}</h3><p>{item.issuer}</p>{item.featured && <span className="recognition-line">FINALIST / 2026</span>}</article></Reveal>)}</div><div className="philosophy"><span className="eyebrow">A note to self</span><h3>Still learning.<br />Still building.<br /><em>Still shipping.</em></h3><p>The goal isn’t to know everything.<br />It’s to keep building until the ideas become real.</p></div></div></section> }

function Contact() { return <section className="section contact-section" id="contact"><div className="container"><SectionHeading index="07" title="Let’s build" note="open to the next problem" /><div className="contact-layout"><Reveal><h2>Let’s build<br /><em>something.</em></h2><p>Have an idea, project, collaboration, or opportunity?<br />Let’s talk.</p></Reveal><Reveal className="contact-links" delay={.1}><a href={`mailto:${identity.email}`}><span><Mail size={17} />Email</span><strong>{identity.email}</strong><ArrowUpRight size={18} /></a><a href={identity.github} target="_blank" rel="noreferrer"><span><Code2 size={17} />GitHub</span><strong>haroon-hasan110</strong><ArrowUpRight size={18} /></a><a href={identity.linkedin} target="_blank" rel="noreferrer"><span><Network size={17} />LinkedIn</span><strong>haroon-hasan</strong><ArrowUpRight size={18} /></a></Reveal></div></div></section> }

function Footer() { return <footer className="site-footer"><div><a className="wordmark" href="#top"><SignalMark /><span>HAROON HASAN</span></a><p>{identity.role}</p><p>{identity.location}</p></div><div className="footer-links"><a href={`mailto:${identity.email}`}>Email</a><a href={identity.github} target="_blank" rel="noreferrer">GitHub</a><a href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div><span className="copyright">HAROON HASAN © 2026</span></footer> }

export default function App() { return <><Navbar /><main><Hero /><Marquee /><About /><AcademicTrajectory /><Experience /><Engineering /><Projects /><Recognition /><Contact /></main><Footer /></> }
