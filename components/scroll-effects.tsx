"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"

/** Thin progress bar at the top of the viewport that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-cyan-300 to-primary"
    />
  )
}

/** Fixed ambient glow orbs + grid that drift at different speeds for a layered parallax feel. */
export function ParallaxBackground() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const slow = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -300])
  const mid = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -700])
  const fast = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -1200])
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <motion.div
        style={{ y: slow }}
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] h-[150%]"
      />
      <motion.div
        style={{ y: mid, rotate }}
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-[120px]"
      />
      <motion.div
        style={{ y: fast }}
        className="absolute top-[60vh] -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <motion.div
        style={{ y: mid }}
        className="absolute top-[140vh] left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]"
      />
    </div>
  )
}
