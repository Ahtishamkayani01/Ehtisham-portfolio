"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion"

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Toolbox", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const pkt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Karachi" })

/** My local time, colon ticking. Rendered after mount so server and client never disagree. */
export function LocalTime({ className = "", suffix = " in Islamabad" }: { className?: string; suffix?: string }) {
  const [now, setNow] = useState<{ h: string; m: string } | null>(null)
  useEffect(() => {
    const tick = () => {
      const parts = pkt.formatToParts(new Date())
      setNow({
        h: parts.find((p) => p.type === "hour")?.value ?? "",
        m: parts.find((p) => p.type === "minute")?.value ?? "",
      })
    }
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])
  if (!now) return <span className={className}>&nbsp;</span>
  return (
    <span className={className}>
      {now.h}
      <span className="animate-[blink_1s_steps(1)_infinite]">:</span>
      {now.m}
      {suffix}
    </span>
  )
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const els = navItems.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    els.forEach((el) => io.observe(el))
    // back at the top: nothing is active
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive(null)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return active
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  // Always visible; it only gains its frosted background once you leave the top.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24))

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 md:px-6 pt-3"
      >
        <nav
          className={`relative mx-auto flex max-w-[90rem] items-center justify-between gap-4 rounded-2xl pl-2 pr-2 md:pl-3 py-2 transition-[background-color,box-shadow,border-color] duration-300 border ${
            scrolled || open
              ? "bg-paper/80 backdrop-blur-xl border-ink/10 shadow-[0_10px_30px_-18px_rgba(22,21,19,0.45)]"
              : "bg-transparent border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-3" aria-label="Ehtisham Nawaz Kiani, back to top">
            <span className="inline-flex keycap keycap-ink keycap-sm font-serif text-lg leading-none !px-2.5 !pb-2 !pt-1.5">EK</span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-xl text-ink">Ehtisham Kiani</span>
              <LocalTime className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone" />
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 rounded-full border border-ink/10 bg-card/60 p-1 text-sm">
            {navItems.map((item, i) => {
              const isActive = active === item.href
              return (
                <li key={item.name} className="relative">
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <a
                    href={item.href}
                    className={`relative flex items-baseline gap-1.5 rounded-full px-4 py-2 transition-colors ${
                      isActive ? "text-paper" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    <span className={`font-mono text-[9px] ${isActive ? "text-signal" : "text-stone"}`}>0{i + 1}</span>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="/api/cv" className="hidden md:inline link-draw text-sm text-ink-2 hover:text-ink">
              Résumé
            </a>
            <a href="#contact" className="hidden sm:inline-flex keycap keycap-signal keycap-sm text-sm font-semibold">
              Say hi <span aria-hidden>↵</span>
            </a>
            <button
              className="inline-flex lg:hidden keycap keycap-sm text-xs font-mono uppercase tracking-[0.12em]"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {/* reading progress, tucked into the bottom edge of the bar */}
          <motion.span
            aria-hidden
            style={{ scaleX: progress }}
            className={`absolute left-4 right-4 -bottom-px h-[2px] origin-left rounded-full bg-signal transition-opacity ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-paper px-5 pt-28 pb-8 flex flex-col lg:hidden"
          >
            <ul className="flex-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-ink/10"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 font-serif text-5xl text-ink"
                  >
                    <span className="font-mono text-xs text-signal">0{i + 1}</span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4">
              <a href="/api/cv" className="inline-flex keycap text-sm font-semibold">
                Résumé <kbd>PDF</kbd>
              </a>
              <LocalTime className="font-mono text-[11px] uppercase tracking-[0.12em] text-stone" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
