export type LinkItem = { label: string; href: string; external?: boolean }

export type Project = {
  number: string
  title: string
  eyebrow: string
  summary: string
  description: string
  role?: string
  context?: string
  year?: string
  achievement?: string
  stack: string[]
  links: LinkItem[]
  visual: 'creator' | 'elia' | 'date'
  workflow?: string[]
  features?: string[]
}

export const identity = {
  name: 'Haroon Hasan',
  role: 'AI/ML Developer • Builder • Researcher',
  location: 'Mumbai, India',
  email: 'haroonhasan10614@gmail.com',
  github: 'https://github.com/haroon-hasan110',
  linkedin: 'https://www.linkedin.com/in/haroon-hasan-b32b07375',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = ['Python', 'AI/ML', 'Build', 'Ship', 'Learn', 'Hackathons', 'Systems', 'Experiment', 'Open Source']

export const aboutParagraphs = [
  'I’m Haroon Hasan — an AI/ML student and builder from Mumbai, currently exploring how intelligent systems move from ideas to real products.',
  'I learn by building. From Python tools and AI pipelines to hackathon projects and agent-based systems, I like taking an idea, experimenting with it, breaking it, and turning it into something that actually works.',
  'I’m currently deepening my foundations in Machine Learning, with my path moving toward Advanced ML → LLMs & GenAI → Deep Learning → Agentic AI.',
  'Still learning. Still building. Still shipping.',
]

export const education = {
  college: 'Elphinstone College, Fort, Mumbai',
  university: 'Dr. Homi Bhabha State University, Mumbai',
  program: 'B.Sc Artificial Intelligence & Machine Learning',
  years: '2025 — 2028',
  semesters: [
    { label: 'SEM 01', value: '7.23', detail: 'CGPA', state: 'complete' },
    { label: 'SEM 02', value: '8.73', detail: 'CGPA · A+', state: 'complete' },
    { label: 'SEM 03', value: '—', detail: 'CURRENT', state: 'current' },
  ],
}

export const experiences = [
  { number: '01', title: 'SUPERvity AutoPilot Hackathon', year: '2026', role: 'AI/ML + Agent Builder', achievement: 'FINALIST', detail: 'Project: ELIA — Marketing Command Center' },
  { number: '02', title: 'HACKATHON TEAM LEAD', year: '2026', role: 'Team Lead', achievement: 'COLLABORATION', detail: 'Hackathon project collaboration and building with a team.' },
]

export const engineeringGroups = [
  { label: 'Languages & foundations', items: ['Python', 'C++', 'SQL', 'HTML/CSS'] },
  { label: 'Tools & delivery', items: ['Git', 'GitHub', 'Docker', 'FastAPI'] },
  { label: 'Tools / platforms', items: ['Ollama', 'n8n', 'Supervity', 'OpenAI', 'Claude', 'Gemini'] },
]

export const focusPath = ['Machine Learning', 'Advanced ML', 'LLM / GenAI', 'Deep Learning', 'Agentic AI']

export const projects: Project[] = [
  {
    number: '01', title: 'CreatorAI', eyebrow: 'Featured system / Bit N Build ’26', summary: 'One recording. An entire content pipeline.',
    description: 'CreatorAI is a creator-content operations workspace that transforms long-form recordings and transcripts into reusable content through an AI-assisted workflow.',
    role: 'Lead', context: 'Built by Hackcartel for Bit N Build ’26.', stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'Supabase', 'Ollama'],
    links: [
      { label: 'GitHub', href: 'https://github.com/haroon-hasan110/Hackcartel_maharashtra_round.git', external: true },
      { label: 'Live demo', href: 'https://creatorai-rthi.onrender.com/', external: true },
    ],
    visual: 'creator', workflow: ['Upload', 'Analysis', 'Content map', 'Studio', 'Repurpose', 'Export'],
  },
  {
    number: '02', title: 'ELIA — Marketing Command Center', eyebrow: 'Hackathon project / 2026', summary: 'An intelligent workspace for orchestrating marketing workflows.',
    description: 'An AI-powered marketing command center built during the Supervity AutoPilot Hackathon, focused on orchestrating intelligent marketing workflows.',
    role: 'AI/ML + Agent Builder', context: 'Supervity AutoPilot Hackathon', year: '2026', achievement: 'FINALIST', stack: ['AI / ML', 'Agent workflows', 'Marketing systems'], links: [], visual: 'elia',
  },
  {
    number: '03', title: 'Date Intelligence Engine', eyebrow: 'Python tool / cultural context', summary: 'One date, many ways to understand it.',
    description: 'A Python-based date intelligence tool that converts a Gregorian date into multiple calendar and cultural representations while generating zodiac information and historical context.',
    stack: ['Python'], links: [{ label: 'GitHub', href: 'https://github.com/haroon-hasan110/date-intelligence-engine.git', external: true }], visual: 'date',
    features: ['Gregorian Calendar', 'Islamic / Hijri Calendar', 'Hindu / Shaka Calendar', 'Zodiac', 'Personality Traits', 'On This Day'],
  },
]

export const recognition = [
  { issuer: 'Kaggle', title: 'Intro to Programming', type: 'Certificate' },
  { issuer: 'Kaggle', title: 'Intro to AI Ethics', type: 'Certificate' },
  { issuer: 'Supervity AutoPilot Hackathon', title: 'Certificate of Participation', type: 'Achievement' },
  { issuer: 'Supervity AutoPilot Hackathon', title: 'FINALIST', type: 'Recognition', featured: true },
]
