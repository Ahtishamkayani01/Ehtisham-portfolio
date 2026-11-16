import { Reveal } from "@/components/reveal"

// Grouped by how I actually use them, not by textbook category.
const groups = [
  {
    title: "Every day",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "TailwindCSS", "Redux Toolkit", "React Query", "HTML5, CSS3 & Sass"],
  },
  {
    title: "Often",
    items: ["Three.js", "React Three Fiber", "Redux", "Styled Components", "Material-UI", "Bootstrap", "Vue.js", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Performance",
    items: ["SSR / SSG", "Code splitting & lazy loading", "Memoization", "Image optimization", "CDN / CloudFront caching", "Core Web Vitals tuning", "Bundle analysis"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js & Express.js", "Go (Golang)", "MongoDB", "RESTful API design", "WebSockets", "Axios", "GraphQL (Saleor)", "Firebase"],
  },
  {
    title: "Architecture",
    items: ["Micro frontends", "Monorepos", "Design systems", "Reusable UI architecture"],
  },
  {
    title: "Testing & quality",
    items: ["Jest", "Cypress", "ESLint", "Prettier", "Husky pre-commit hooks"],
  },
  {
    title: "CI/CD & tools",
    items: ["GitHub Actions", "Git (GitFlow, trunk-based)", "Webpack & Babel", "Postman", "Chrome DevTools"],
  },
  {
    title: "AI & productivity",
    items: ["Claude Code", "GitHub Copilot", "AI-assisted code generation & review", "Prompt engineering for dev workflows"],
  },
  {
    title: "Team & design",
    items: ["Agile / Scrum", "Jira, Trello, Asana", "Confluence", "Figma", "Adobe XD"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-5 md:px-10 py-12 md:py-20 bg-paper-2">
      <div className="mx-auto max-w-[90rem] grid lg:grid-cols-12 gap-8 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.02em] text-ink">
            The <em className="text-signal">toolbox</em>
          </h2>
          <p className="mt-6 max-w-sm text-ink-2 leading-relaxed">
            What I reach for, roughly sorted by how often. The top column is where I&apos;m fastest.
          </p>
        </Reveal>
        <div className="lg:col-span-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone border-b border-ink/15 pb-3 mb-4">
                {g.title}
              </h3>
              <ul className={`space-y-1.5 ${i === 0 ? "text-ink text-lg" : "text-ink-2"}`}>
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
