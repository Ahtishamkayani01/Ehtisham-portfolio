import { LocalTime } from "@/components/navigation"

export function Footer() {
  return (
    <footer className="px-5 md:px-10 py-8 bg-signal text-[#fff8f2]/80 border-t border-[#fff8f2]/20">
      <div className="mx-auto max-w-[90rem] flex flex-col md:flex-row gap-4 md:items-center md:justify-between font-mono text-[11px] uppercase tracking-[0.12em]">
        <span>© {new Date().getFullYear()} Ehtisham Nawaz Kiani</span>
        <LocalTime />
        <span className="flex gap-6">
          <a href="https://www.linkedin.com/in/ehtisham-nawaz-kiyani-704a98173/" target="_blank" rel="noopener noreferrer" className="link-draw hover:text-[#fff8f2]">
            LinkedIn
          </a>
          <a href="https://github.com/Ahtishamkayani01" target="_blank" rel="noopener noreferrer" className="link-draw hover:text-[#fff8f2]">
            GitHub
          </a>
          <a href="#top" className="link-draw hover:text-[#fff8f2]">
            Back to top ↑
          </a>
        </span>
      </div>
    </footer>
  )
}
