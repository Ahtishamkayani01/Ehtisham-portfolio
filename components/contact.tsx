"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const EMAIL = "ahtishamkayani01@gmail.com"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14 bg-signal text-[#fff8f2]">
      <div className="mx-auto max-w-[90rem]">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#fff8f2]/70 mb-5 md:mb-6">Contact</p>
        <h2 className="font-serif text-[clamp(3.4rem,11vw,11rem)] leading-[0.86] tracking-[-0.025em]">
          Got something
          <br />
          to <em>build?</em>
        </h2>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-3 font-serif text-[clamp(1.6rem,3.6vw,3.2rem)] leading-none">
              <span className="link-draw break-all">{EMAIL}</span>
              <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <button
              onClick={copy}
              className="mt-5 block font-mono text-xs uppercase tracking-[0.14em] text-[#fff8f2]/80 hover:text-[#fff8f2]"
            >
              <span aria-live="polite">{copied ? "Copied ✓" : "Copy address"}</span>
            </button>
          </div>
          <p className="md:col-span-4 md:col-start-9 leading-relaxed text-[#fff8f2]/85">
            I&apos;m open to frontend and lead roles, remote or in Islamabad. Email is best, or call me on{" "}
            <a href="tel:+923035957991" className="underline underline-offset-4 whitespace-nowrap">
              +92 303 5957991
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
