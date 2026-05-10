"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Lead Frontend Developer",
    company: "Alpha Squad",
    location: "Islamabad, Pakistan",
    period: "Feb 2022 — May 2026",
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
    location: "Islamabad, Pakistan",
    period: "Nov 2021 — Feb 2022",
    description: [
      "Maintained and developed web applications using Next.js and modern CSS frameworks",
      "Created a library of reusable React components, accelerating project timelines by 15%",
      "Led the migration of legacy codebases to modern React practices, improving performance and reducing technical debt",
      "Developed custom UI solutions tailored to client needs, contributing to a 20% increase in customer satisfaction",
    ],
  },
]

const projects = [
  { name: "EZ Oil Drain Valve", url: "https://ezoildrainvalve.com/" },
  { name: "Prestige Mustang", url: "https://prestigemustang.com/" },
  { name: "MonkeyTilt", url: "https://monkeytilt.com/" },
  { name: "Plump", url: "https://plump.com/" },
  { name: "Foose Performance", url: "https://fooseperf.com/" },
  { name: "Jess Performance", url: "https://jessperformance.com/" },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

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

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left text-sm font-mono whitespace-nowrap transition-all
                    ${activeTab === index 
                      ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary -mb-px md:mb-0 md:-ml-px" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 mb-4">
                {experiences[activeTab].period} · {experiences[activeTab].location}
              </p>

              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Notable Projects */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-foreground mb-6">Notable Projects at Alpha Squad</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {projects.map((project) => (
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
