import { Reveal } from "@/components/reveal"

const facts = [
  { k: "Now", v: "Senior frontend engineer, PayOn (remote)" },
  { k: "Before", v: "Frontend → lead frontend developer, Alpha Squad (2021–2026)" },
  { k: "Based", v: "Islamabad, Pakistan (PKT, UTC+5)" },
  { k: "Daily tools", v: "React, Next.js, TypeScript, Tailwind, Redux Toolkit" },
  { k: "Lately", v: "three.js & React Three Fiber (the keyboard up top), AI tools like Claude Code" },
]

export function About() {
  return (
    <section id="about" className="px-5 md:px-10 py-12 md:py-20 bg-ink text-paper">
      <div className="mx-auto max-w-[90rem] grid lg:grid-cols-12 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-paper/50 mb-5 md:mb-6">About</p>
          <p className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.08] tracking-[-0.01em]">
            I&apos;m Ehtisham. I&apos;ve spent the last five-plus years writing React for people who sell car parts, run
            restaurants and build games, and I still like it most when a screen just <em className="text-signal">works</em>{" "}
            and nobody notices.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 md:gap-8 text-paper/70 leading-relaxed">
            <p>
              For most of my time at Alpha Squad I led a small frontend team. That meant splitting up work, reviewing a lot
              of pull requests and building the shared component library everyone else built on. We tightened code
              review with ESLint, Prettier and Husky, and production bugs dropped a lot.
            </p>
            <p>
              These days I&apos;m at PayOn, building the screens restaurant staff use to run orders, tables and payments,
              plus the app guests open from the QR code on their table. Outside work I go to local tech meetups and
              workshops when I can.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 self-end">
          <dl className="divide-y divide-paper/15 border-y border-paper/15">
            {facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/45 pt-0.5">{f.k}</dt>
                <dd className="text-paper/90">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
