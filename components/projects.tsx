"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Folder } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "EZ Oil Drain Valve",
    description:
      "E-commerce platform for automotive oil drain valve products. Features product catalog, filtering system, FAQ section, and distributor locator. The EZ Oil Drain Valve replaces standard oil drain plugs, making oil changes easier with their nickel-plated brass ball valve design.",
    tech: ["Next.js", "TailwindCSS", "Shopify", "React"],
    external: "https://ezoildrainvalve.com/",
    image: "/images/ezoil.jpg",
  },
  {
    title: "Prestige Mustang",
    description:
      "Premium automotive parts e-commerce platform for Mustang enthusiasts. Features advanced product filtering, search capabilities, detailed product specifications, and seamless checkout experience for quality Mustang parts and accessories.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    external: "https://prestigemustang.com/",
    image: "/images/prestige.jpg",
  },
  {
    title: "MonkeyTilt",
    description:
      "Full-featured online casino and sportsbook platform backed by Pantera Capital and Polychain Capital. Features thousands of slots, live dealer tables, game shows, originals, blackjack, baccarat, roulette, and a complete sportsbook with crypto payments including BTC, ETH, SOL, USDT, and USDC.",
    tech: ["Next.js", "TypeScript", "WebSocket", "Node.js", "PostgreSQL"],
    external: "https://monkeytilt.com/",
    image: "/images/monkeytilt.jpg",
  },
  {
    title: "Plump",
    description:
      "Modern online casino and sportsbook platform with sleek neon-themed UI/UX design. Features comprehensive gaming options, crypto integration, VIP programs, and seamless user experience across casino games and sports betting.",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "WebSocket", "Redis"],
    external: "https://plump.com/",
    image: "/images/plump.jpg",
  },
]

// Projects at AlphaSquad (Client Projects)
const alphaSquadProjects = [
  {
    title: "Foose Performance",
    description: "High-performance automotive accessories store with custom product configurator and detailed specifications.",
    tech: ["Next.js", "Shopify", "TailwindCSS"],
    external: "https://fooseperf.com/",
  },
  {
    title: "Jess Performance",
    description: "Automotive performance parts catalog with detailed specifications and compatibility checker for various vehicle models.",
    tech: ["React", "GraphQL", "Styled Components"],
    external: "https://jessperformance.com/",
  },
  {
    title: "3D T-Shirt Customizer",
    description: "Interactive 3D web app allowing users to customize t-shirt designs in real-time using Three.js and React Three Fiber.",
    tech: ["React", "Three.js", "React Three Fiber", "TailwindCSS"],
    external: "https://3-d-tshirt-customizer-eight.vercel.app/",
  },
  {
    title: "Magma Demo",
    description: "Visually stunning landing page showcasing advanced scroll-based animations and parallax effects.",
    tech: ["Next.js", "GSAP", "TailwindCSS", "Framer Motion"],
    external: "https://magma-demo.vercel.app/",
  },
  {
    title: "Candle Chart",
    description: "Real-time cryptocurrency trading chart application featuring interactive candlestick charts and technical indicators.",
    tech: ["React", "Chart.js", "WebSocket", "TypeScript"],
    external: "https://candlechart.vercel.app/",
  },
]

// Personal/Demo Projects
const personalProjects = [
  {
    title: "Voice Recorder App",
    description: "Web-based voice recording application with audio visualization, playback controls, and download functionality.",
    tech: ["React", "Web Audio API", "TailwindCSS"],
    external: "https://voice-recorder-demo.vercel.app/",
  },
  {
    title: "Puzzle App",
    description: "Interactive puzzle game featuring multiple difficulty levels, timer-based scoring system, and smooth animations.",
    tech: ["React", "TypeScript", "CSS Animations"],
    external: "https://puzzle-app-eight.vercel.app/",
  },
  {
    title: "Webshop Manager",
    description: "E-commerce management dashboard for tracking inventory, orders, customer analytics, and sales reports.",
    tech: ["Next.js", "Redux", "TailwindCSS", "Chart.js"],
    external: "https://webshop-manager.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description: "Previous iteration of personal portfolio website showcasing projects and skills with modern design.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    external: "https://ahtishamkayani-peach.vercel.app/",
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

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 relative group ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-lg bg-primary/10"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? "md:left-0" : "md:right-0"
                  } z-10`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alpha Squad Projects */}
          <h3 className="text-xl font-bold text-foreground text-center mb-2">More Projects at Alpha Squad</h3>
          <p className="text-muted-foreground text-center text-sm mb-8">Client projects delivered during my tenure</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {alphaSquadProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 border border-primary/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Personal Projects */}
          <h3 className="text-xl font-bold text-foreground text-center mb-2">Personal Projects</h3>
          <p className="text-muted-foreground text-center text-sm mb-8">Side projects and experiments</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group bg-card p-6 rounded-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
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
