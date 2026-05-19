"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Results-driven Frontend Developer with{" "}
              <span className="text-foreground font-medium">
                5 years of experience
              </span>{" "}
              specializing in crafting responsive, scalable web applications
              using modern JavaScript frameworks. I have demonstrated expertise
              in <span className="text-primary">React.js</span>,{" "}
              <span className="text-primary">Next.js</span>, and UI/UX design
              principles, with a proven track record of enhancing user
              engagement and optimizing application performance.
            </p>

            <p>
              Most recently, I led a team of front-end developers, providing
              mentorship, task assignments, and daily progress tracking to
              ensure timely project delivery. I spearheaded the development of
              reusable UI components, improving code maintainability by{" "}
              <span className="text-foreground font-medium">35%</span>.
            </p>

            <p>
              I&apos;m passionate about collaborating with cross-functional
              teams to deliver high-quality projects on time and within budget.
              When I&apos;m not coding, I actively engage in tech meetups and
              workshops, continuously enhancing my expertise in the latest
              front-end technologies and development methodologies.
            </p>

            <p className="text-sm">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React.js",
                "Next.js",
                "React Three Fiber",
                "TailwindCSS",
                "Redux / Redux Toolkit",
                "Node.js",
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="font-mono text-muted-foreground">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
