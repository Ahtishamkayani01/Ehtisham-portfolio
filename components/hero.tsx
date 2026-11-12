"use client"

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState, type MouseEvent } from "react"
import { ArrowRight, FileDown, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1] as const

const rotatingWords = ["pixel-perfect UIs", "scalable Next.js apps", "smooth animations", "real-time dashboards"]

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 60, suffix: "%", label: "Fewer Bugs via Reviews" },
]

const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Redux Toolkit",
  "RTK Query",
  "GraphQL",
  "shadcn/ui",
  "Framer Motion",
  "Three.js",
  "WebSockets",
  "Node.js",
]

const chips = [
  { label: "React", className: "-left-6 top-10", delay: 0 },
  { label: "Next.js", className: "-right-4 top-4", delay: 0.6 },
  { label: "TypeScript", className: "-left-14 top-[42%]", delay: 1.2 },
  { label: "Tailwind", className: "-right-8 bottom-8", delay: 1.8 },
]

function SplitName({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden pb-2 ${className ?? ""}`} aria-hidden>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease, delay: delay + i * 0.035 }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  )
}

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % rotatingWords.length), 3000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="text-primary whitespace-nowrap"
        >
          {rotatingWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", delay: 0.9, onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

function Portrait() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], reduce ? [0, 0] : [12, -12]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], reduce ? [0, 0] : [-12, 12]), { stiffness: 150, damping: 18 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease, delay: 0.4 }}
      className="relative mb-16 lg:mb-0 flex justify-center lg:justify-end [perspective:1000px]"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0)
          my.set(0)
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-72 h-72 md:w-[22rem] md:h-[22rem]"
      >
        {/* glow */}
        <div className="absolute -inset-10 rounded-full bg-primary/25 blur-3xl animate-pulse" />
        {/* spinning conic ring */}
        <div className="absolute -inset-[6px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,var(--primary)_90deg,transparent_180deg,oklch(0.7_0.15_260)_270deg,transparent_360deg)] animate-[spin_6s_linear_infinite]" />
        {/* dashed orbit */}
        <div className="absolute -inset-8 rounded-full border border-dashed border-primary/25 animate-[spin_40s_linear_infinite_reverse]" />

        <div className="absolute inset-0 rounded-full overflow-hidden bg-background ring-4 ring-background">
          <Image src="/images/profile.png" alt="Ehtisham Nawaz Kiani" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>

        {/* floating tech chips */}
        {chips.map((c) => (
          <motion.span
            key={c.label}
            style={{ transform: "translateZ(60px)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 1 + c.delay * 0.3, duration: 0.5 },
              scale: { delay: 1 + c.delay * 0.3, duration: 0.5 },
              y: { delay: c.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute ${c.className} z-10 rounded-full border border-white/10 bg-card/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-foreground shadow-lg shadow-black/40`}
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
            {c.label}
          </motion.span>
        ))}

        {/* code card */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-16 z-20 w-56 rounded-xl border border-white/10 bg-[#0b0f14]/90 backdrop-blur-md p-3 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/60"
        >
          <div className="mb-2 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>
          <p>
            <span className="text-violet-400">const</span> <span className="text-sky-300">dev</span> = {"{"}
          </p>
          <p className="pl-3">
            role: <span className="text-emerald-300">&quot;Frontend Lead&quot;</span>,
          </p>
          <p className="pl-3">
            loves: <span className="text-emerald-300">&quot;clean UI&quot;</span>,
          </p>
          <p className="pl-3">
            coffee: <span className="text-amber-300">Infinity</span>
          </p>
          <p>{"}"}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.8], reduce ? [1, 1] : [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.92])

  // mouse-follow spotlight
  const sx = useMotionValue(-1000)
  const sy = useMotionValue(-1000)
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${sx}px ${sy}px, oklch(0.75 0.15 180 / 0.12), transparent 70%)`

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        sx.set(e.clientX - r.left)
        sy.set(e.clientY - r.top)
      }}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-10 overflow-hidden"
    >
      <motion.div aria-hidden style={{ background: spotlight }} className="pointer-events-none absolute inset-0" />

      <motion.div style={{ y, opacity, scale }} className="relative max-w-6xl mx-auto w-full px-6">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to new opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> Islamabad, Pakistan
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="font-mono text-sm text-muted-foreground mb-3"
            >
              Hi, I&apos;m
            </motion.p>

            <h1 className="font-black tracking-tight leading-[0.92] text-5xl sm:text-6xl lg:text-7xl">
              <span className="sr-only">Ehtisham Nawaz Kiani</span>
              <SplitName text="Ehtisham" delay={0.2} className="text-foreground" />
              <br />
              <SplitName
                text="Nawaz Kiani"
                delay={0.45}
                className="bg-[linear-gradient(110deg,var(--primary),oklch(0.85_0.12_200),oklch(0.7_0.15_260),var(--primary))] bg-[length:200%_auto] bg-clip-text text-transparent animate-[hero-shimmer_6s_linear_infinite]"
              />
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease }}
              className="mt-6 text-xl md:text-2xl font-medium text-foreground/90"
            >
              Senior Frontend Developer building <RotatingWord />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease }}
              className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
            >
              5 years of crafting accessible, high-performance web experiences with React, Next.js and modern
              JavaScript, from e-commerce storefronts to real-time SaaS dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/api/cv"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                {[
                  { href: "https://www.linkedin.com/in/ehtisham-nawaz-kiyani-704a98173", icon: Linkedin, label: "LinkedIn", external: true },
                  { href: "mailto:ahtishamkayani01@gmail.com", icon: Mail, label: "Email" },
                  { href: "tel:+923035957991", icon: Phone, label: "Phone" },
                ].map(({ href, icon: Icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-3 rounded-full border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.6, ease }}
              className="mt-12 grid grid-cols-3 max-w-lg divide-x divide-white/10 rounded-2xl border border-white/10 bg-card/40 backdrop-blur"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-4 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl md:text-3xl font-black text-foreground">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          <Portrait />
        </div>
      </motion.div>

      {/* tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative mt-24 border-y border-white/5 bg-card/20 py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max animate-[hero-marquee_35s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
              {t}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mx-auto mt-8 flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-1 rounded-full bg-primary"
        />
      </motion.a>
    </section>
  )
}
