"use client"

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber"
import { RoundedBox } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react"
import * as THREE from "three"

/**
 * A small mechanical macropad. Keys press under the cursor, and also when you
 * press the matching key on your real keyboard. The orange ↵ key jumps to contact.
 */

type KeyDef = {
  id: string
  legend: string
  sub?: string
  w: number // width in key units
  row: number
  col: number // left edge, in key units
  tone: "alpha" | "mod" | "signal"
  match: string[] // KeyboardEvent.key values that press this key
}

const KEYS: KeyDef[] = [
  { id: "esc", legend: "esc", w: 1, row: 0, col: 0, tone: "mod", match: ["Escape"] },
  { id: "cmd", legend: "⌘", w: 1, row: 0, col: 1, tone: "mod", match: ["Meta", "Control"] },
  { id: "alt", legend: "⌥", w: 1, row: 0, col: 2, tone: "mod", match: ["Alt"] },
  { id: "shift", legend: "⇧", w: 1, row: 0, col: 3, tone: "mod", match: ["Shift"] },
  { id: "r", legend: "R", sub: "react", w: 1, row: 1, col: 0, tone: "alpha", match: ["r", "R"] },
  { id: "n", legend: "N", sub: "next", w: 1, row: 1, col: 1, tone: "alpha", match: ["n", "N"] },
  { id: "ts", legend: "TS", w: 1, row: 1, col: 2, tone: "alpha", match: ["t", "T"] },
  { id: "brace", legend: "{ }", w: 1, row: 1, col: 3, tone: "alpha", match: ["{", "}", "[", "]"] },
  { id: "tag", legend: "</>", w: 1, row: 2, col: 0, tone: "mod", match: ["<", ">", "/"] },
  { id: "space", legend: "", w: 2, row: 2, col: 1, tone: "alpha", match: [" "] },
  { id: "enter", legend: "↵", sub: "say hi", w: 1, row: 2, col: 3, tone: "signal", match: ["Enter"] },
]

const U = 1 // one key unit in world space
const GAP = 0.1
const CAP_H = 0.42
const COLS = 4
const ROWS = 3

const TONES = {
  alpha: { cap: "#ece6da", ink: "#2a2824" },
  mod: { cap: "#b9b2a3", ink: "#2a2824" },
  signal: { cap: "#e2471c", ink: "#fff3ea" },
} as const

function legendTexture(def: KeyDef, mono: string, sans: string) {
  const px = 256
  const c = document.createElement("canvas")
  c.width = px * def.w
  c.height = px
  const g = c.getContext("2d")!
  g.fillStyle = TONES[def.tone].cap
  g.fillRect(0, 0, c.width, c.height)
  g.fillStyle = TONES[def.tone].ink
  g.textBaseline = "top"
  // legends sit top-left like real keycaps
  const big = def.legend.length > 2 ? 66 : 96
  g.font = `500 ${big}px ${def.legend.length > 1 ? mono : sans}`
  g.fillText(def.legend, 38, 34)
  if (def.sub) {
    g.globalAlpha = 0.6
    g.font = `500 38px ${mono}`
    g.fillText(def.sub, 40, px - 70)
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

function Key({
  def,
  pressed,
  textures,
  delay,
  animate,
  onActivate,
}: {
  def: KeyDef
  pressed: MutableRefObject<Set<string>>
  textures: Map<string, THREE.Texture> | null
  delay: number
  animate: boolean
  onActivate: (id: string) => void
}) {
  const ref = useRef<THREE.Group>(null)
  const born = useRef<number | null>(null)
  const width = def.w * U - GAP
  const depth = U - GAP
  const x = def.col * U + (def.w * U) / 2 - (COLS * U) / 2
  const z = def.row * U + U / 2 - (ROWS * U) / 2

  useFrame((state, dt) => {
    const g = ref.current
    if (!g) return
    if (born.current === null) born.current = state.clock.elapsedTime
    const age = state.clock.elapsedTime - born.current - delay
    // drop-in: ease-out from above
    const p = animate ? THREE.MathUtils.clamp(age / 0.7, 0, 1) : 1
    const drop = (1 - p) ** 3 * 2.4
    const target = pressed.current.has(def.id) ? -0.16 : 0
    const base = THREE.MathUtils.damp(g.userData.y ?? 0, target, 28, dt)
    g.userData.y = base
    g.position.y = CAP_H / 2 + 0.06 + base + drop
    g.visible = age > -0.05 || !animate
  })

  const tex = textures?.get(def.id)

  const down = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    pressed.current.add(def.id)
  }
  const up = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    if (pressed.current.has(def.id)) onActivate(def.id)
    pressed.current.delete(def.id)
  }

  return (
    <group ref={ref} position={[x, 0, z]}>
      <RoundedBox
        args={[width, CAP_H, depth]}
        radius={0.09}
        smoothness={4}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation()
          pressed.current.add(def.id)
          if (def.id === "enter") document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          pressed.current.delete(def.id)
          document.body.style.cursor = ""
        }}
        onPointerDown={down}
        onPointerUp={up}
      >
        <meshStandardMaterial color={TONES[def.tone].cap} roughness={0.62} metalness={0} />
      </RoundedBox>
      {/* printed legend, mounted once its texture exists (the cap colour underneath matches) */}
      {tex ? (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, CAP_H / 2 + 0.002, 0]}>
          <planeGeometry args={[width - 0.16, depth - 0.16]} />
          <meshStandardMaterial map={tex} roughness={0.55} />
        </mesh>
      ) : null}
    </group>
  )
}

// What the little screen says when each key goes down.
const MESSAGES: Record<string, string> = {
  esc: "no escaping good UX",
  cmd: "shortcuts > menus",
  alt: "there's always another way",
  shift: "shift fast, ship faster",
  r: "react 19, hooks & all",
  n: "next.js, app router",
  ts: '"strict": true',
  brace: "{ readable > clever }",
  tag: "<semantic/> markup",
  space: "give it room to breathe",
  enter: "let's talk  ->",
}
const IDLE = "hi, i'm ehtisham"

/** A tiny OLED strip. Types each message out, with a blinking block cursor. */
function Oled({ message }: { message: MutableRefObject<{ text: string; at: number }> }) {
  const { canvas, ctx, texture } = useMemo(() => {
    const canvas = document.createElement("canvas")
    // same aspect as the 2.86 × 0.46 screen plane, so text isn't stretched
    canvas.width = 992
    canvas.height = 160
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 8
    return { canvas, ctx: canvas.getContext("2d")!, texture }
  }, [])
  const last = useRef("")
  const mono = useMemo(
    () => getComputedStyle(document.documentElement).getPropertyValue("--font-geist-mono").trim() || "monospace",
    [],
  )
  useEffect(() => () => texture.dispose(), [texture])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const { text, at } = message.current
    const shown = text.slice(0, Math.max(0, Math.floor((t - at) * 30)))
    const blink = Math.floor(t * 2.2) % 2 === 0
    const key = shown + blink
    if (key === last.current) return
    last.current = key
    ctx.fillStyle = "#0c0d0c"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // faint scanlines
    ctx.fillStyle = "rgba(255,255,255,0.025)"
    for (let y = 0; y < canvas.height; y += 4) ctx.fillRect(0, y, canvas.width, 1)
    // Size the font so the whole message (plus cursor) fits; sized on the full
    // text, not the typed part, so it doesn't jump while typing.
    const pad = 36
    ctx.font = `600 100px ${mono}`
    const fullW = ctx.measureText("> " + text + "  ").width
    const size = Math.min(68, Math.floor((100 * (canvas.width - pad * 2)) / fullW))
    ctx.font = `600 ${size}px ${mono}`
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#ff8a5c"
    ctx.shadowColor = "rgba(255,110,60,0.65)"
    ctx.shadowBlur = 16
    const mid = canvas.height / 2 + 3
    ctx.fillText("> " + shown, pad, mid)
    if (blink) {
      const w = ctx.measureText("> " + shown).width
      ctx.fillRect(pad + w + size * 0.12, mid - size * 0.5, size * 0.5, size)
    }
    ctx.shadowBlur = 0
    texture.needsUpdate = true
  })

  return (
    <meshBasicMaterial map={texture} toneMapped={false} />
  )
}

function Pad({
  pointer,
  animate,
  onActivate,
}: {
  pointer: MutableRefObject<{ x: number; y: number }>
  animate: boolean
  onActivate: (id: string) => void
}) {
  const root = useRef<THREE.Group>(null)
  // Fit the pad to whatever box it gets. The camera frames by height, so a canvas
  // narrower than it is tall crops the sides unless we scale down with the aspect.
  const width = useThree((st) => st.size.width)
  const height = useThree((st) => st.size.height)
  const narrow = width < 480
  const aspect = width / Math.max(1, height)
  const fit = Math.min(0.86, 0.86 * (aspect / 1.02), width < 380 ? 0.8 : 1)
  const pressed = useRef<Set<string>>(new Set())
  const prev = useRef<Set<string>>(new Set())
  const message = useRef({ text: IDLE, at: 0.9 })
  const knob = useRef<THREE.Mesh>(null)
  const knobSpin = useRef(0)
  const [textures, setTextures] = useState<Map<string, THREE.Texture> | null>(null)

  // Draw legends once the web fonts are ready, so the canvas uses them.
  useEffect(() => {
    let alive = true
    const css = getComputedStyle(document.documentElement)
    const mono = css.getPropertyValue("--font-geist-mono").trim() || "monospace"
    const sans = css.getPropertyValue("--font-geist").trim() || "sans-serif"
    document.fonts.ready.then(() => {
      if (!alive) return
      setTextures(new Map(KEYS.map((k) => [k.id, legendTexture(k, mono, sans)])))
    })
    return () => {
      alive = false
    }
  }, [])
  useEffect(() => () => textures?.forEach((t) => t.dispose()), [textures])

  // Real keyboard → virtual keys.
  useEffect(() => {
    const find = (key: string) => KEYS.find((k) => k.match.includes(key))
    const onDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return
      const k = find(e.key)
      if (k) pressed.current.add(k.id)
    }
    const onUp = (e: KeyboardEvent) => {
      const k = find(e.key)
      if (k) pressed.current.delete(k.id)
    }
    const clear = () => pressed.current.clear()
    window.addEventListener("keydown", onDown)
    window.addEventListener("keyup", onUp)
    window.addEventListener("blur", clear)
    return () => {
      window.removeEventListener("keydown", onDown)
      window.removeEventListener("keyup", onUp)
      window.removeEventListener("blur", clear)
    }
  }, [])

  // Every so often, a key gets tapped on its own, as if someone's typing.
  useEffect(() => {
    if (!animate) return
    let timer: ReturnType<typeof setTimeout>
    const tap = () => {
      const k = KEYS[Math.floor(Math.random() * KEYS.length)]
      if (!pressed.current.has(k.id)) {
        pressed.current.add(k.id)
        setTimeout(() => pressed.current.delete(k.id), 140)
      }
      timer = setTimeout(tap, 1800 + Math.random() * 2600)
    }
    timer = setTimeout(tap, 2600)
    return () => clearTimeout(timer)
  }, [animate])

  useFrame((state, dt) => {
    const g = root.current
    if (!g) return
    const t = state.clock.elapsedTime
    const idle = animate ? Math.sin(t * 0.6) * 0.03 : 0
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, 0.05 + pointer.current.y * 0.12 + idle, 4, dt)
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, -0.22 + pointer.current.x * 0.3, 4, dt)
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, pointer.current.x * -0.05, 4, dt)
    g.position.y = animate ? Math.sin(t * 0.9) * 0.05 : 0

    // New key down? Put its message on the screen and give the knob a nudge.
    for (const id of pressed.current) {
      if (!prev.current.has(id)) {
        message.current = { text: MESSAGES[id] ?? IDLE, at: t }
        knobSpin.current += 0.9
      }
    }
    prev.current = new Set(pressed.current)
    // Drift back to the greeting after a quiet spell.
    if (message.current.text !== IDLE && t - message.current.at > 6) message.current = { text: IDLE, at: t }
    if (knob.current) knob.current.rotation.y = THREE.MathUtils.damp(knob.current.rotation.y, knobSpin.current, 6, dt)
  })

  const plateW = COLS * U + 0.34
  const STRIP = 0.78 // extra depth behind the keys for the screen and knob
  const plateD = ROWS * U + 0.34 + STRIP
  const stripZ = -(ROWS * U) / 2 - STRIP / 2 - 0.02

  return (
    <group ref={root} rotation={[0, -0.22, 0]} scale={fit} position={[narrow ? 0.1 : 0, 0, 0.3]}>
      {/* case */}
      <RoundedBox
        args={[plateW, 0.34, plateD]}
        radius={0.12}
        smoothness={4}
        position={[0, -0.12, -STRIP / 2]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#1c1b19" roughness={0.45} metalness={0.15} />
      </RoundedBox>
      {/* recessed plate */}
      <mesh position={[0, 0.051, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[COLS * U + 0.04, ROWS * U + 0.04]} />
        <meshStandardMaterial color="#0f0f0e" roughness={0.9} />
      </mesh>
      {/* raised display housing at the back, angled toward you so it clears the keys */}
      <group position={[0, 0, stripZ]}>
        <RoundedBox args={[plateW - 0.06, 0.92, STRIP - 0.06]} radius={0.1} smoothness={4} position={[0, 0.34, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#1c1b19" roughness={0.45} metalness={0.15} />
        </RoundedBox>
        <group position={[-0.42, 0.95, 0.04]} rotation={[-Math.PI / 2 + 0.68, 0, 0]}>
          {/* bezel with real thickness, so it reads as a little display on a stand */}
          <RoundedBox args={[2.98, 0.6, 0.08]} radius={0.03} smoothness={3} position={[0, 0, -0.041]} castShadow>
            <meshStandardMaterial color="#080808" roughness={0.3} />
          </RoundedBox>
          <mesh position={[0, 0, 0.001]}>
            <planeGeometry args={[2.86, 0.46]} />
            <Oled message={message} />
          </mesh>
        </group>
        {/* knob: knurled aluminium, spins a little with every press */}
        <group position={[1.62, 0.8, 0]}>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.27, 0.27, 0.04, 40]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.6} />
          </mesh>
          <mesh ref={knob} position={[0, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.22, 0.24, 0.26, 24]} />
            <meshStandardMaterial color="#b3ab9c" roughness={0.28} metalness={0.85} flatShading />
            {/* orange indicator notch, so you can see it turn */}
            <mesh position={[0, 0.136, 0.13]}>
              <boxGeometry args={[0.035, 0.012, 0.11]} />
              <meshBasicMaterial color="#e2471c" />
            </mesh>
          </mesh>
        </group>
      </group>
      {KEYS.map((k, i) => (
        <Key
          key={k.id}
          def={k}
          pressed={pressed}
          textures={textures}
          delay={0.25 + (k.row * COLS + k.col) * 0.055 + i * 0.005}
          animate={animate}
          onActivate={onActivate}
        />
      ))}
    </group>
  )
}

export default function Macropad({ reduceMotion }: { reduceMotion: boolean }) {
  const wrap = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)

  // Track the cursor across the whole window, not just the canvas.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  // Stop rendering when the hero is scrolled away.
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "100px" })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const activate = useMemo(
    () => (id: string) => {
      if (id === "enter") document.getElementById("contact")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
    },
    [reduceMotion],
  )

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 6.4, 6.8], fov: 30 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ camera }) => camera.lookAt(0, -0.2, 0)}
      >
        <ambientLight intensity={0.55} color="#fff4e6" />
        <hemisphereLight args={["#fff8ee", "#6b5f4c", 0.5]} />
        <directionalLight
          position={[-3.5, 7, 3]}
          intensity={2.1}
          color="#fff1df"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-4}
          shadow-camera-right={4}
          shadow-camera-top={4}
          shadow-camera-bottom={-4}
          shadow-bias={-0.0004}
          shadow-normalBias={0.02}
        />
        <directionalLight position={[4, 2, -3]} intensity={0.5} color="#ffd9bf" />
        <Pad pointer={pointer} animate={!reduceMotion} onActivate={activate} />
        {/* soft floor shadow catcher */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.16} />
        </mesh>
      </Canvas>
    </div>
  )
}
