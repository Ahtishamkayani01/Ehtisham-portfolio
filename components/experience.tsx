import { ArrowUpRight, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "PayOn",
    companyUrl: "https://payon.app/",
    location: "Remote",
    period: "Jun 2026 — Present",
    current: true,
    description: [
      "Building the frontend of PayOn, an intelligent transactional orchestration platform for the HoReCa (hotel, restaurant, café) industry that redefines how dining operations manage orders, payments and table flows",
      "Architecting scalable React.js/Next.js interfaces that turn complex real-time transactional data into intuitive staff-facing dashboards and guest-facing payment flows",
      "Implementing live order management, bill-splitting and payment orchestration across a multitenant SaaS platform serving restaurants and hospitality venues",
      "Defining API contracts and data models with backend and product teams for real-time, WebSocket-driven order and payment events",
      "Establishing frontend standards, component architecture and CI/CD practices for a greenfield product",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company: "Alpha Squad",
    companyUrl: "https://www.alphasquad.studio/",
    location: "Islamabad, Pakistan",
    period: "Feb 2023 — May 2026",
    current: false,
    description: [
      "Led a team of frontend engineers: mentorship, task assignment and daily progress tracking to keep delivery on time",
      "Spearheaded a reusable UI component library that improved maintainability and sped up feature delivery across projects",
      "Optimized performance with advanced React patterns (useMemo, useCallback, code splitting, lazy loading), cutting load times and improving Core Web Vitals",
      "Set up code review processes and enforced best practices with ESLint, Prettier and Husky pre-commit hooks, for a major drop in production bugs",
      "Implemented micro-frontend architecture and monorepo setups for scalable, independently deployable frontend modules",
      "Designed efficient RESTful API integrations with backend teams for seamless data flow across applications",
      "Used AI developer tools (Claude Code, GitHub Copilot) for code generation, automated testing and code review to boost team productivity",
      "Ran Agile ceremonies (daily stand-ups, sprint planning, retrospectives) to keep work aligned with goals and timelines",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Alpha Squad",
    companyUrl: "https://www.alphasquad.studio/",
    location: "Islamabad, Pakistan",
    period: "Nov 2021 — Feb 2023",
    current: false,
    description: [
      "Built and maintained web applications with Next.js, React.js, TailwindCSS and Styled Components",
      "Created a reusable React component library that standardized UI patterns and sped up project timelines across the team",
      "Led the migration of legacy codebases to modern React (hooks, functional components), improving performance and reducing technical debt",
      "Developed custom UI solutions tailored to client requirements, measurably improving customer satisfaction",
    ],
  },
]

const projects: { name: string; url?: string }[] = [
  { name: "Alpha Squad", url: "https://www.alphasquad.studio/" },
  { name: "EZ Oil Drain Valve", url: "https://ezoildrainvalve.com/" },
  { name: "Prestige Mustang", url: "https://prestigemustang.com/" },
  { name: "MonkeyTilt", url: "https://monkeytilt.com/" },
  { name: "Plump" },
  { name: "Foose Performance", url: "https://fooseperf.com/" },
  { name: "Jess Performance", url: "https://jessperformance.com/" },
  { name: "Repair Management System" },
]

export function Experience() {
  return (
    <section id="experience" className="px-5 md:px-10 py-12 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid md:grid-cols-12 gap-6 mb-8 md:mb-12">
          <h2 className="md:col-span-6 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.02em] text-ink">
            Where I&apos;ve <em className="text-signal">worked</em>
          </h2>
        </div>

        <ol className="border-b border-ink/15">
          {experiences.map((exp) => (
            <li key={exp.title + exp.period} className="border-t border-ink/15">
              <Reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-4 py-8 md:py-10">
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-stone">{exp.period}</p>
                  <p className="mt-1 font-mono text-xs text-stone">{exp.location}</p>
                  {exp.current ? (
                    <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Current
                    </p>
                  ) : null}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-3xl md:text-4xl leading-[1.02] text-ink">{exp.title}</h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-1 text-ink-2"
                  >
                    <span className="link-draw">{exp.company}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
                <ul className="lg:col-span-5 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-2">
                  {exp.description.map((item) => (
                    <li key={item} className="grid grid-cols-[1rem_1fr]">
                      <span className="text-signal">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-10 md:mt-12 grid lg:grid-cols-12 gap-4 lg:gap-6">
          <h3 className="lg:col-span-3 font-mono text-xs uppercase tracking-[0.14em] text-stone pt-1">
            Client sites I built at Alpha Squad
          </h3>
          <ul className="lg:col-span-9 flex flex-wrap gap-x-8 gap-y-3 font-serif text-2xl md:text-3xl text-ink">
            {projects.map((project) => (
              <li key={project.name}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-signal transition-colors">
                    {project.name}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-stone" title="Not public">
                    {project.name}
                    <Lock className="h-4 w-4" aria-label="not public" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
