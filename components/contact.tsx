"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            I&apos;m currently looking for new opportunities at leading tech companies. Whether you have 
            a question or just want to say hi, my inbox is always open. I&apos;ll try my best to get 
            back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:ahtishamkayani01@gmail.com" className="hover:text-primary transition-colors">
                ahtishamkayani01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+923165416947" className="hover:text-primary transition-colors">
                +92 316 5416947
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          <a
            href="mailto:ahtishamkayani01@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
          >
            <Send className="w-4 h-4" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}
