"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, MapPin, Calendar, Lock } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Engineer & Team Lead",
    company: "PayOn",
    companyUrl: "https://payon.app/",
    location: "Remote",
    period: "Jun 2026 — Present",
    current: true,
    description: [
      "Building the frontend of PayOn, an intelligent transactional orchestration platform redefining how dining operations manage orders, payments, and table flows",
      "Architecting scalable React.js/Next.js interfaces that transform complex real-time transactional data into intuitive staff-facing dashboards and guest-facing payment flows",
      "Implementing live order management, bill-splitting, and payment orchestration features across a multitenant SaaS platform serving restaurants and hospitality venues",
      "Collaborating with backend and product teams to define API contracts and data models for real-time WebSocket-driven order and payment events",
      "Establishing frontend standards, component architecture, and CI/CD practices for a greenfield product in a fast-moving startup environment",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company: "Alpha Squad",
    companyUrl: "https://www.alphasquad.studio/",
    location: "Islamabad, Pakistan",
    period: "Feb 2022 — May 2026",
    current: false,
    description: [
      "Led a team of front-end developers, providing mentorship, task assignments, and daily progress tracking to ensure timely project delivery",
      "Spearheaded the development of reusable UI components, improving code maintainability by 35%",
      "Integrated third-party API to enhance application functionality, reducing development time by 30%",
      "Conducted code reviews and implemented best practices, resulting in an almost 60% reduction in bugs",
      "Optimized app performance by leveraging advanced React hooks like useMemo and useCallback, leading to a reduction in load times",
      "Collaborated with back-end teams to implement efficient API integrations, ensuring seamless data flow across applications",
      "Facilitated daily stand-ups and sprint planning sessions",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Alpha Squad",
    companyUrl: "https://www.alphasquad.studio/",
    location: "Islamabad, Pakistan",
    period: "Nov 2021 — Feb 2022",
    current: false,
    description: [
      "Maintained and developed web applications using Next.js and modern CSS frameworks",
      "Created a library of reusable React components, accelerating project timelines by 15%",
      "Led the migration of legacy codebases to modern React practices, improving performance and reducing technical debt",
      "Developed custom UI solutions tailored to client needs, contributing to a 20% increase in customer satisfaction",
    ],
  },
]

const projects: { name: string; url?: string }[] = [
  { name: "Alpha Squad", url: "https://www.alphasquad.studio/" },
  { name: "EZ Oil Drain Valve", url: "https://ezoildrainvalve.com/" },
  { name: "Prestige Mustang", url: "https://prestigemustang.com/" },
  { name: "MonkeyTilt", url: "https://monkeytilt.com/" },
  { name: "Plump", url: "https://plump.com/" },
  { name: "Foose Performance", url: "https://fooseperf.com/" },
  { name: "Jess Performance", url: "https://jessperformance.com/" },
  { name: "Repair Management System" },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 md:pl-16"
                >
                  {/* Dot */}
                  <div className={`absolute left-[-5px] md:left-[19px] top-2 w-3 h-3 rounded-full border-2 border-primary ${exp.current ? "bg-primary" : "bg-background"}`} />

                  <div className={`rounded-xl border p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 ${exp.current ? "border-primary/40 bg-primary/5" : "border-border bg-secondary/20"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary font-medium hover:underline flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-primary font-medium">{exp.company}</span>
                          )}
                          {exp.current && (
                            <span className="ml-2 px-2 py-0.5 text-xs font-mono rounded-full bg-primary/20 text-primary border border-primary/30">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mt-1 shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-foreground mb-6">Notable Projects at Alpha Squad</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {projects.map((project) =>
                project.url ? (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all text-sm"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {project.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                ) : (
                  <div
                    key={project.name}
                    title="Confidential client (under NDA)"
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 text-sm"
                  >
                    <span className="text-muted-foreground truncate">{project.name}</span>
                    <Lock className="w-3 h-3 text-muted-foreground shrink-0" />
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
