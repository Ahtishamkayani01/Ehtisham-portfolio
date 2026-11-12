"use client"

import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { ArrowUpRight, Github, Lock } from "lucide-react"

type CaseStudy = {
  title: string
  tagline: string
  client: string
  meta: { label: string; value: string }
  overview: string[]
  stack: string[]
  image: string
  /** Optional phone screenshot shown overlapping the browser frame */
  phoneImage?: string
  /** Text shown in the browser address bar when no public URL should be displayed */
  frameLabel?: string
  url?: string
  github?: string
  nda?: boolean
}

const featured: CaseStudy[] = [
  {
    title: "Alpha Squad",
    tagline: "Studio website for a product design & software development team",
    client: "AlphaSquad",
    meta: { label: "Category", value: "Agency Website" },
    overview: [
      "Built the full-screen hero with rotating client testimonials and smooth transitions.",
      "Developed case-study pages with a consistent layout for client, timeframe, overview and stack.",
      "Implemented the client logo strip, impact stats and consultation booking flow.",
      "Optimized media delivery from AWS S3 and added a branded preloader for a polished first paint.",
    ],
    stack: ["Next.js", "React", "TailwindCSS"],
    image: "/images/projects/alphasquad.jpg",
    url: "https://www.alphasquad.studio/",
  },
  {
    title: "PayOn",
    tagline: "Restaurant portal and themeable customer ordering app",
    client: "PayOn",
    meta: { label: "Scope", value: "Restaurant & Customer Apps" },
    overview: [
      "Built the restaurant-side portal: secure login, dashboard, orders, menu, tables, POS, staff and finance screens.",
      "Built the customer-side app that guests open from the table QR: welcome screen, live order status, menu, cart and bill.",
      "Developed 7 switchable themes for the customer app so each restaurant can match its own brand.",
      "Handled data fetching, caching and live updates with Redux Toolkit Query.",
      "Built a consistent, accessible UI on shadcn/ui components with TailwindCSS, plus multi-language support.",
    ],
    stack: ["Next.js", "TailwindCSS", "Redux Toolkit Query", "shadcn/ui"],
    image: "/images/projects/payon-dashboard.jpg",
    phoneImage: "/images/projects/payon-customer.jpg",
    frameLabel: "PayOn · Restaurant Portal",
  },
  {
    title: "EZ Oil Drain Valve",
    tagline: "E-commerce storefront for oil drain valves",
    client: "EZ Oil Drain Valve",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built the storefront with Next.js SSR for strong SEO and fast first loads.",
      "Integrated Saleor GraphQL APIs for the product catalog, cart and order management.",
      "Managed cart and checkout state with Redux Toolkit.",
      "Optimized image delivery through AWS CloudFront for a fast catalog experience.",
    ],
    stack: ["Next.js", "React", "Redux Toolkit", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/ezoil.jpg",
    url: "https://ezoildrainvalve.com/",
  },
  {
    title: "Prestige Mustang",
    tagline: "Premium Mustang parts store with 30+ years of heritage",
    client: "Prestige Mustang",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built advanced product filtering and search across Mustang generations.",
      "Tuned SSR and rendering to improve Core Web Vitals.",
      "Integrated social media and newsletter flows into the storefront.",
      "Connected the catalog to Saleor through GraphQL.",
    ],
    stack: ["Next.js", "React", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/prestige.jpg",
    url: "https://prestigemustang.com/",
  },
  {
    title: "MonkeyTilt",
    tagline: "Full-featured online gaming platform",
    client: "MonkeyTilt",
    meta: { label: "Role", value: "Frontend Lead" },
    overview: [
      "Led the frontend from architecture to deployment.",
      "Implemented custom Next.js middleware for routing and access control.",
      "Integrated Firebase for authentication and real-time data.",
      "Managed global state with Redux and live updates over WebSockets.",
    ],
    stack: ["Next.js", "TypeScript", "Redux", "WebSocket", "REST APIs"],
    image: "/images/projects/monkeytilt.jpg",
    url: "https://monkeytilt.com/",
  },
  {
    title: "Plump",
    tagline: "Modern web platform with a clean, responsive UI",
    client: "Plump",
    meta: { label: "Category", value: "Web Platform" },
    overview: [
      "Built a reusable component library for design consistency.",
      "Integrated RESTful APIs and WebSockets for dynamic content.",
      "Kept the layouts cross-browser compatible and mobile-first throughout.",
    ],
    stack: ["React", "Next.js", "Redux", "TailwindCSS", "WebSocket"],
    image: "/images/projects/plump.jpg",
    url: "https://plump.com/",
  },
]

const more: CaseStudy[] = [
  {
    title: "Repair Management System",
    tagline: "Simplify. Organize. Resolve.",
    client: "Confidential",
    meta: { label: "Timeframe", value: "Nov 2022 (3 Weeks)" },
    overview: [
      "Delivered the internal and customer-facing apps in three weeks.",
      "Built an embeddable tracking widget with auto-generated ticket IDs.",
      "Added hashtag grouping, color-coded tags and tag-based reordering of 1000+ tickets.",
      "Built custom analytics charts and auto-filled solutions from a list of diagnoses.",
    ],
    stack: ["React", "Next.js", "TailwindCSS"],
    image: "/images/projects/rms.jpg",
    nda: true,
  },
  {
    title: "Foose Performance",
    tagline: "Parts and accessories made for real trucks",
    client: "Foose Performance",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built the Cummins, Duramax and Powerstroke product catalog.",
      "Added dynamic search with Year / Make / Model vehicle filtering.",
      "Improved performance with code splitting and lazy loading.",
    ],
    stack: ["Next.js", "TailwindCSS", "GraphQL", "Saleor"],
    image: "/images/projects/foose.jpg",
    url: "https://fooseperf.com/",
  },
  {
    title: "Jess Performance",
    tagline: "Diesel power & performance, built in Shipshewana",
    client: "Jess Performance",
    meta: { label: "Category", value: "E-commerce" },
    overview: [
      "Built the power package configurator and parts browsing.",
      "Built a smooth cart and checkout flow with Redux Toolkit.",
      "Integrated the Saleor GraphQL catalog.",
    ],
    stack: ["Next.js", "TailwindCSS", "Redux Toolkit", "GraphQL", "Saleor"],
    image: "/images/projects/jess.jpg",
    url: "https://jessperformance.com/",
  },
]

const personal: CaseStudy = {
  title: "MERN Auth & Admin Dashboard",
  tagline: "Full-stack app with secure auth and an admin panel",
  client: "Personal Project",
  meta: { label: "Type", value: "Open Source" },
  overview: [
    "Built stateless JWT authentication with bcrypt-hashed passwords.",
    "Added role-based access control on top of a full admin dashboard.",
    "Admins can view and delete registered users and contact form submissions.",
  ],
  stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
  image: "/images/projects/mern.jpg",
  url: "https://mern-project-beta-six.vercel.app",
  github: "https://github.com/Ahtishamkayani01/MERN-Project",
}

function hostOf(project: CaseStudy) {
  if (project.frameLabel) return project.frameLabel
  if (!project.url) return "confidential.app"
  return project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -90])
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [6, -3])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className="absolute -bottom-10 right-2 md:-right-8 w-[30%] min-w-[120px] max-w-[210px] z-10"
    >
      <div className="rounded-[1.8rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10 overflow-hidden">
        <div className="relative aspect-[390/844]">
          <Image src={src} alt={alt} fill sizes="210px" className="object-cover object-top" />
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-14 rounded-full bg-neutral-900" />
        </div>
      </div>
    </motion.div>
  )
}

function BrowserFrame({ project, className = "" }: { project: CaseStudy; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"])

  return (
    <div
      ref={ref}
      className={`relative rounded-xl border border-white/10 bg-card/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 h-9 border-b border-white/10 bg-black/40 backdrop-blur">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 max-w-xs truncate rounded-md bg-white/5 px-3 py-0.5 text-[11px] font-mono text-muted-foreground">
          {hostOf(project)}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>
    </div>
  )
}

function StackPills({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/15 px-3.5 py-1 text-[11px] uppercase tracking-wider text-foreground/90 hover:border-primary hover:text-primary transition-colors"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

function Links({ project }: { project: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
        >
          Go To Website
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      ) : project.nda ? (
        <span className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 text-sm text-muted-foreground">
          <Lock className="w-4 h-4" /> Under NDA
        </span>
      ) : null}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" /> View Source
        </a>
      )}
    </div>
  )
}

function CaseStudyRow({ project, index }: { project: CaseStudy; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]), {
    stiffness: 120,
    damping: 30,
  })
  const numY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [120, -120])
  const reversed = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
    >
      <motion.span
        style={{ y: numY }}
        aria-hidden
        className={`pointer-events-none absolute -top-16 ${reversed ? "left-0" : "right-0"} select-none text-[9rem] md:text-[12rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)]`}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className={`relative lg:col-span-7 ${reversed ? "lg:order-2" : ""} ${project.phoneImage ? "mb-10 lg:mb-0" : ""}`}>
        <BrowserFrame project={project} />
        {project.phoneImage && (
          <PhoneFrame src={project.phoneImage} alt={`${project.title} customer app screenshot`} />
        )}
      </div>

      <motion.div style={{ y: textY }} className={`lg:col-span-5 relative ${reversed ? "lg:order-1" : ""}`}>
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
          {project.title}
        </h3>
        <p className="mt-3 text-muted-foreground">{project.tagline}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-bold text-foreground">Client</dt>
            <dd className="text-sm text-muted-foreground">{project.client}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold text-foreground">{project.meta.label}</dt>
            <dd className="text-sm text-muted-foreground">{project.meta.value}</dd>
          </div>
        </dl>

        <h4 className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-primary">Overview</h4>
        <ul className="mt-3 space-y-2.5">
          {project.overview.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="flex gap-3 text-sm leading-relaxed text-foreground/75"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {point}
            </motion.li>
          ))}
        </ul>

        <h4 className="mt-7 mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Frontend Stack</h4>
        <StackPills stack={project.stack} />

        <div className="mt-8">
          <Links project={project} />
        </div>
      </motion.div>
    </motion.article>
  )
}

function CompactCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-card/60 backdrop-blur p-4 hover:-translate-y-2 hover:border-primary/40 transition-all duration-500"
    >
      <BrowserFrame project={project} className="shadow-none" />
      <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-xl font-black uppercase tracking-tight text-foreground leading-tight">{project.title}</h4>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          ) : project.nda ? (
            <Lock className="w-4 h-4 text-muted-foreground" aria-label="Under NDA" />
          ) : null}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-xs font-mono text-primary">
          {project.client} · {project.meta.value}
        </p>
        <ul className="mt-4 space-y-2 flex-1">
          {project.overview.map((point) => (
            <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <StackPills stack={project.stack} />
        </div>
      </div>
    </motion.article>
  )
}

function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <div ref={ref} className="mb-16">
      <div className="flex items-center gap-4">
        <span className="text-primary font-mono text-sm">{index}</span>
        <h2 className="overflow-hidden text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.span>
        </h2>
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-primary/60 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03."
          title="Featured Work"
          subtitle="Selected case studies, focused on the frontend I designed, built and shipped."
        />

        <div className="space-y-32 md:space-y-44">
          {featured.map((p, i) => (
            <CaseStudyRow key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="mt-40">
          <SectionHeading index="03.1" title="More Projects" subtitle="More client work delivered at Alpha Squad." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <CompactCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-40">
          <SectionHeading index="03.2" title="Personal Project" />
          <CaseStudyRow project={personal} index={0} />
        </div>
      </div>
    </section>
  )
}
