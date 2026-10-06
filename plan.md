# Haroon Hasan Portfolio — Implementation Plan

## Product scope
A single-page, managed Webdev portfolio for Haroon Hasan: an AI/ML student, builder, and researcher from Mumbai. The site communicates active learning and real shipping without inventing employment, credentials, expertise, projects, results, awards, or certifications.

## Design direction
- **Design movement:** cinematic editorial engineering / quiet futurism.
- **Core principles:** restrained contrast, technical clarity, generous rhythm, and real-but-ambitious storytelling.
- **Color philosophy:** near-black charcoal provides a gallery-like stage; warm off-white type keeps the site human; cool muted grays create hierarchy; a controlled chartreuse accent signals activity and intelligence without turning the page neon.
- **Layout paradigm:** a long-form editorial rail with asymmetric hero composition, full-bleed rhythm breaks, numbered section markers, and project cards that alternate between dense evidence and open space instead of a uniform dashboard grid.
- **Signature elements:** a faint coordinate grid, lime signal line, and abstract computational system orb made from CSS/SVG rings, nodes, and scan lines.
- **Interaction philosophy:** interactions reveal structure rather than decorate it: anchors glide, cards lift a few pixels, visual systems drift slowly, and hover states expose metadata.
- **Animation:** Framer Motion entrance stagger in the hero, scroll-triggered upward reveals, one slow ambient visual float, restrained hover scale, and a continuous low-contrast marquee. Respect `prefers-reduced-motion` via CSS and Framer Motion settings.
- **Typography system:** Space Grotesk for display and body; IBM Plex Mono for labels, metadata, and technical fragments. Large display headlines use tight tracking and clamp-based sizing; body copy stays readable and narrow.
- **Brand essence:** a young AI/ML builder turning experiments into shipped systems — thoughtful, kinetic, real.
- **Brand voice:** direct, reflective, builder-minded. Example lines: “Learning by shipping.” and “Still learning. Still building. Still shipping.”
- **Wordmark & logo:** wordmark paired with a compact three-line “signal bracket” mark, reused as the nav mark and section detail.
- **Signature brand color:** signal chartreuse `#c7f36b`.

## Implementation approach
- Use React + TypeScript + Vite with Tailwind CSS, Framer Motion, and Lucide React.
- Keep all factual content in `src/data/portfolio.ts`; components receive structured props and render reusable sections.
- Build a semantic one-page document with anchor IDs: `about`, `work`, `journey`, `contact`.
- Use CSS for the abstract hero computational visual rather than an unverified stock/person image. Project visuals are non-deceptive CSS interface/terminal treatments because no source screenshots are present in the workspace.
- Use native `mailto:` and external links with `target="_blank" rel="noreferrer"`.
- No server/database is required; serve the built static frontend on port 3000.

## Project structure
- `src/data/portfolio.ts`: identity, links, academic, experience, engineering, projects, recognition.
- `src/components/`: Navbar, Hero, Marquee, SectionHeading, About, AcademicTrajectory, Experience, Engineering, CurrentFocus, Projects, Recognition, Contact, Footer, and shared visual/button primitives.
- `src/App.tsx`: page composition and section ordering.
- `src/index.css`: Tailwind layers plus the site’s editorial design tokens, grid/noise, marquee, and responsive rules.
- `public/manus-routes.json`: declared `/` route for Preview/deployment discovery.
- `app.config.ts`: project logo metadata.

## Boundaries
- Do not add YouTube Video Dubbing AI to main work.
- Do not label learning technologies as professional expertise.
- Do not invent Semester 3 CGPA.
- Do not claim formal employment or internship.
- Do not publish automatically; build and checkpoint only unless publication is explicitly requested.
