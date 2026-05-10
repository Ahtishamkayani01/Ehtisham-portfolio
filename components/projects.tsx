"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "EZ Oil Drain Valve",
    description:
      "Full-featured e-commerce platform selling oil drain valves for cars, trucks, motorcycles, and industrial equipment. Built with Next.js SSR for optimal SEO, integrated Saleor-based APIs for product catalog and order management, and optimized image delivery via AWS CloudFront.",
    tech: ["Next.js", "React", "Redux Toolkit", "TailwindCSS", "AWS CloudFront","GraphQL","Saleor"],
    external: "https://ezoildrainvalve.com/",
  },
  {
    title: "Prestige Mustang",
    description:
      "Premium automotive parts e-commerce platform for Mustang enthusiasts with over 30 years of brand heritage. Features advanced product filtering, search, SSR optimization for Core Web Vitals, and integrated social media and newsletter flows.",
    tech: ["Next.js", "React", "TailwindCSS", "GraphQL","Saleor"],
    external: "https://prestigemustang.com/",
  },
  {
    title: "MonkeyTilt",
    description:
      "Full-featured online gaming platform. Led the entire project lifecycle from architecture to deployment. Implemented custom Next.js middleware, Google Firebase for auth and real-time database, and Redux for global state management with SSR for scalability.",
    tech: ["Next.js", "TypeScript", "Rest APIs", "Redux", "WebSocket"],
    external: "https://monkeytilt.com/",
  },
  {
    title: "Plump",
    description:
      "Modern web platform with a focus on clean, responsive UI. Built a reusable component library for design consistency, integrated RESTful APIs for dynamic content, and ensured cross-browser compatibility and mobile-first responsiveness throughout.",
    tech: ["React", "Next.js", "Redux", "TailwindCSS", "REST APIs","WebSocket"],
    external: "https://plump.com/",
  },
]

const moreProjects = [
  {
    title: "Foose Performance",
    description:
      "Full-service diesel truck repair shop and parts store. Built product catalog for Cummins, Duramax, and Powerstroke upgrades with dynamic search, filtering, and performance-optimized frontend using code splitting and lazy loading.",
    tech: ["Next.js", "TailwindCSS", "GraphQL","Saleor"],
    external: "https://fooseperf.com/",
  },
  {
    title: "Jess Performance",
    description:
      "E-commerce platform for diesel truck performance parts and repair services. Features power package configurator, parts browsing, and seamless cart and checkout experience with Redux Toolkit state management.",
    tech: ["Next.js", "TailwindCSS", "Redux Toolkit","GraphQL","Saleor"],
    external: "https://jessperformance.com/",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 border border-primary/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((tech) => (
                    <li key={tech} className="bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* More Projects */}
          <h3 className="text-xl font-bold text-foreground mb-2">More Projects</h3>
          <p className="text-muted-foreground text-sm mb-8">Additional client projects delivered at Alpha Squad</p>
          <div className="grid md:grid-cols-2 gap-6">
            {moreProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 border border-border"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((tech) => (
                    <li key={tech} className="bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
