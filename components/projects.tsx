"use client"

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, type PointerEvent } from "react"
import { ArrowUpRight, Github, Lock } from "lucide-react"
import { featured, more, personal, type CaseStudy } from "@/lib/projects"

const ease = [0.22, 1, 0.36, 1] as const

const sentence = (t: string) => (/[.!?]$/.test(t) ? t : `${t}.`)

/**
 * Screenshot as a physical slab: it tips back as it scrolls in, flattens in the
 * middle of the viewport, and leans toward the cursor on hover. The phone (if any)
 * floats on its own plane in front of it.
 */
function Slab({ project, priority = false }: { project: CaseStudy; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scrollTilt = useTransform(scrollYProgress, [0, 0.45, 1], reduce ? [0, 0, 0] : [24, 0, -10])

  const hx = useMotionValue(0)
  const hy = useMotionValue(0)
  const spring = { stiffness: 140, damping: 18, mass: 0.6 }
  const rx = useSpring(useTransform(() => scrollTilt.get() + hy.get() * -7), spring)
  const ry = useSpring(useTransform(() => hx.get() * 9), spring)
  const glareX = useTransform(hx, [-0.5, 0.5], ["20%", "80%"])
  const glareY = useTransform(hy, [-0.5, 0.5], ["15%", "85%"])
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(60% 60% at ${x} ${y}, rgba(255,255,255,0.45), transparent 70%)`,
  )

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    hx.set((e.clientX - r.left) / r.width - 0.5)
    hy.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    hx.set(0)
    hy.set(0)
  }

  return (
    <div ref={ref} className="relative [perspective:1600px]" onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative will-change-transform"
      >
        {/* slab thickness: a darker layer pushed back in Z */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[6px] bg-ink/80"
          style={{ transform: "translateZ(-14px)" }}
        />
        <div
          aria-hidden
          className="absolute inset-x-6 -bottom-6 h-10 rounded-full bg-ink/30 blur-2xl"
          style={{ transform: "translateZ(-40px)" }}
        />
        {!project.url ? (
          <div className="absolute left-3 top-3 md:left-4 md:top-4 z-10" style={{ transform: "translateZ(40px)" }}>
            <PrivateBadge project={project} />
          </div>
        ) : null}
        <div className="relative overflow-hidden rounded-[6px] ring-1 ring-ink/15 bg-paper-2">
          <div className="relative aspect-[16/10]">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{ background: glare }}
          />
        </div>

        {project.phoneImage ? (
          <div
            className="absolute -bottom-8 right-4 md:right-6 w-[24%] min-w-[110px] max-w-[200px]"
            style={{ transform: "translateZ(70px)" }}
          >
            <div className="rounded-[1.6rem] border-[5px] border-ink bg-ink shadow-[0_30px_50px_-20px_rgba(22,21,19,0.7)] overflow-hidden">
              <div className="relative aspect-[390/844]">
                <Image src={project.phoneImage} alt={`${project.title} customer app`} fill sizes="200px" className="object-cover object-top" />
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>
    </div>
  )
}

/** Dark pill with a lock, so "there's no link" reads as deliberate, not missing. */
function PrivateBadge({ project, className = "" }: { project: CaseStudy; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper shadow-[0_6px_16px_-8px_rgba(22,21,19,0.6)] ${className}`}
    >
      <Lock className="h-3.5 w-3.5 text-signal" aria-hidden />
      {project.nda ? "Private · Under NDA" : "Not public"}
    </span>
  )
}

function ProjectLinks({ project }: { project: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-ink">
          <span className="link-draw">Visit site</span>
          <ArrowUpRight className="h-4 w-4 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : (
        <span className="flex flex-col items-start gap-2">
          <PrivateBadge project={project} />
          <span className="text-xs font-normal text-stone">
            {project.privateNote ?? (project.nda ? "Client work under NDA, so there's no public link." : "Not publicly available, so there's no link.")}
          </span>
        </span>
      )}
      {project.publicSite ? (
        <a href={project.publicSite.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 self-start text-ink">
          <span className="link-draw">{project.publicSite.label}</span>
          <ArrowUpRight className="h-4 w-4 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : null}
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-ink">
          <Github className="h-4 w-4" />
          <span className="link-draw">Source</span>
        </a>
      ) : null}
    </div>
  )
}

function Feature({ project, index, priority }: { project: CaseStudy; index: number; priority?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
      className="border-t border-ink/15 pt-6 md:pt-8"
    >
      <header className="grid grid-cols-12 gap-x-6 gap-y-2 items-baseline">
        <span className="col-span-2 md:col-span-1 font-mono text-xs text-stone">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="col-span-10 md:col-span-7 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.015em] text-ink">
          {project.title}
        </h3>
        <p className="col-span-12 md:col-span-4 md:text-right font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
          {project.meta.label}: {project.meta.value}
        </p>
      </header>

      <div className="mt-6 md:mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className={`lg:col-span-8 ${project.phoneImage ? "mb-8 lg:mb-0" : ""}`}>
          <Slab project={project} priority={priority} />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <p className="text-lg leading-snug text-ink">{sentence(project.tagline)}</p>
          <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink-2">
            {project.overview.map((point) => (
              <li key={point} className="grid grid-cols-[1rem_1fr]">
                <span className="text-signal">–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs leading-relaxed text-stone">{project.stack.join(" · ")}</p>
          <div className="mt-6 lg:mt-auto lg:pt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Compact({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.08 }}
      className="flex flex-col"
    >
      <Slab project={project} />
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h4 className="font-serif text-3xl leading-none text-ink">{project.title}</h4>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone shrink-0">{project.meta.value}</span>
      </div>
      <p className="mt-2 text-ink-2">{sentence(project.tagline)}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-2">
        {project.overview.map((point) => (
          <li key={point} className="grid grid-cols-[1rem_1fr]">
            <span className="text-signal">–</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-xs text-stone">{project.stack.join(" · ")}</p>
      <div className="mt-5">
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="work" className="px-5 md:px-10 pt-8 pb-12 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid md:grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-12">
          <h2 className="md:col-span-6 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.02em] text-ink">
            Selected <em className="text-signal">work</em>
          </h2>
          <p className="md:col-span-4 md:col-start-9 self-end text-ink-2 leading-relaxed">
            Client projects, mostly from my time at Alpha Squad. On each one I owned the frontend, so that&apos;s what
            the notes below are about.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {featured.map((p, i) => (
            <Feature key={p.title} project={p} index={i} priority={i === 0} />
          ))}
        </div>

        <div className="mt-16 md:mt-24 border-t border-ink/15 pt-6 md:pt-8">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-stone mb-8">Also shipped</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {more.map((p, i) => (
              <Compact key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-stone mb-6">On the side</h3>
          <div className="space-y-14 md:space-y-20">
            {personal.map((p, i) => (
              <Feature key={p.title} project={p} index={featured.length + more.length + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
