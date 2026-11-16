"use client"

import dynamic from "next/dynamic"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, FileDown } from "lucide-react"

// three.js is ~600kB; keep it out of the initial bundle and off the server.
const Macropad = dynamic(() => import("@/components/three/macropad"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
})

const ease = [0.22, 1, 0.36, 1] as const

const shippedFor = [
  "PayOn",
  "Alpha Squad",
  "MonkeyTilt",
  "Plump",
  "Prestige Mustang",
  "EZ Oil Drain Valve",
  "Foose Performance",
  "Jess Performance",
]

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Hand-drawn loop under a word. Draws itself in once. */
function Scribble({ delay }: { delay: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 40"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-[-4%] -bottom-[0.05em] h-[0.32em] w-[108%] overflow-visible text-signal"
    >
      <motion.path
        d="M4 26 C 60 12, 140 8, 210 14 S 300 26, 286 30 C 250 36, 120 38, 40 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1], delay }}
      />
    </svg>
  )
}

/** Pencil arrow + note pointing at the pad. */
function PressMeNote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.5 }}
      className="pointer-events-none absolute left-5 top-0 sm:left-6 sm:top-4 lg:-left-6 lg:top-10 flex items-start gap-1 text-ink-2"
    >
      <span className="font-serif italic text-xl sm:text-2xl leading-none -rotate-6 origin-left">
        go on,
        <br />
        <span className="sm:hidden">tap a key</span>
        <span className="hidden sm:inline">press a key</span>
      </span>
      <svg viewBox="0 0 90 70" className="mt-6 h-12 w-16 sm:h-14 sm:w-20 overflow-visible" aria-hidden>
        <motion.path
          d="M4 8 C 30 4, 62 14, 72 46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.8, duration: 0.7, ease: "easeInOut" }}
        />
        <motion.path
          d="M60 38 L 72 48 L 80 33"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.4, duration: 0.3 }}
        />
      </svg>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion() ?? false

  return (
    <section className="relative lg:min-h-[min(100svh,52rem)] px-5 md:px-10 pt-24 md:pt-28 pb-6 md:pb-8 flex flex-col overflow-hidden">
      {/* warm pool of light behind the pad, like a desk lamp */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[8%] h-[80vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,250,240,0.9),transparent)]"
      />

      <div className="relative mx-auto w-full max-w-[90rem] grid flex-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/70 py-1.5 pl-2.5 pr-3 text-ink">
              <span className="h-2 w-2 rounded-full bg-[#3f9a4f] shadow-[0_0_0_3px_rgba(63,154,79,0.18)]" />
              Available for new work
            </span>
            <span>Senior frontend engineer · React, Next.js, TypeScript</span>
          </motion.div>

          <h1 className="font-serif text-[clamp(3.3rem,9vw,9.5rem)] leading-[0.88] tracking-[-0.025em] text-ink">
            <Line delay={0.1}>I build the part</Line>
            <Line delay={0.2}>of the web you</Line>
            <Line delay={0.3}>
              <span className="relative inline-block">
                <em className="text-signal pr-[0.04em]">touch.</em>
                <Scribble delay={1} />
              </span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-9 text-[1.08rem] leading-relaxed text-ink-2 max-w-[34rem]"
          >
            I&apos;m Ehtisham. I&apos;ve spent five-plus years on React and Next.js: car-parts storefronts, a gaming platform,
            and now the ordering and payment screens restaurants run on at{" "}
            <a
              href="https://payon.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-signal transition-colors"
            >
              PayOn
            </a>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className="inline-flex keycap keycap-signal text-sm font-semibold">
              See the work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href="/api/cv" className="inline-flex keycap text-sm font-semibold">
              <FileDown className="h-4 w-4" />
              Résumé
              <kbd>PDF</kbd>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="lg:col-span-5 relative mt-4 sm:mt-0 h-[350px] sm:h-[460px] lg:h-[min(600px,48vw)] -mx-5 lg:mx-0 lg:-mr-10"
        >
          <div className="absolute inset-x-0 top-8 -bottom-6 sm:inset-0">
            <Macropad reduceMotion={reduce} />
          </div>
          <PressMeNote />
        </motion.div>
      </div>

      {/* ruler + who I've shipped for */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative mx-auto w-full max-w-[90rem] mt-4 md:mt-8"
      >
        <div
          aria-hidden
          className="h-3 border-t border-ink/25 [background-image:repeating-linear-gradient(90deg,rgba(22,21,19,0.3)_0_1px,transparent_1px_12px),repeating-linear-gradient(90deg,rgba(22,21,19,0.45)_0_1px,transparent_1px_120px)] [background-size:100%_6px,100%_12px] bg-no-repeat"
        />
        <div className="mt-4 flex flex-col md:flex-row md:items-baseline gap-x-8 gap-y-2">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-stone">Shipped for</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 font-serif text-xl md:text-2xl text-ink-2">
            {shippedFor.map((name, i) => (
              <li key={name} className="flex items-baseline gap-5">
                {name}
                {i < shippedFor.length - 1 ? <span className="text-signal text-base">/</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
