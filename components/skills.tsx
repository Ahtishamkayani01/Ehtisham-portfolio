"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Sass"],
  },
  {
    title: "Also Familiar With",
    skills: ["Node Js", "Express Js","Go (Golang)"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Three.js",
      "React Three Fiber",
      "Redux",
      "Redux Toolkit",
      "React Query",
      "Vue.js",
      "Styled Components",
      "TailwindCSS",
      "Material-UI",
      "Bootstrap",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "Context API", "React Query"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "APIs & Communication",
    skills: ["RESTful APIs", "Axios", "WebSockets"],
  },
  {
    title: "Build Tools & Task Runners",
    skills: ["Webpack", "Babel", "Gulp"],
  },
  {
    title: "Cloud Platforms & DevOps",
    skills: ["AWS (S3, CloudFront, Lambda)", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Project Management",
    skills: ["Agile/Scrum", "Jira", "Trello", "Asana", "Confluence"],
  },
  {
    title: "Collaboration Tools",
    skills: ["Slack", "Microsoft Teams", "Zoom"],
  },
  {
    title: "Design & Prototyping",
    skills: ["Figma", "Adobe XD"],
  },
  {
    title: "API & Development Tools",
    skills: ["Postman", "Chrome DevTools"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technical Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
