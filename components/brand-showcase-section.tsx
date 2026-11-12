"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

// Replaces the previous image showcase. Those images were AI-generated ad
// creatives that promised "8-20 qualified viewings per month", which we cannot
// evidence. Copy here is written by the team and makes no outcome claims.

const promises = [
  "Capture enquiries from your portals, ads and website in one place",
  "Reply automatically within seconds, day or night",
  "Score every lead so you know who is actually serious",
  "Follow up on a schedule that does not forget",
  "Book qualified viewings straight into your calendar",
]

const nonPromises = [
  "A specific number of viewings, deals or rand in revenue",
  "Client results or testimonials we cannot prove",
  "Stock photos of agents we have never worked with",
  "A long contract you cannot leave",
]

export function BrandShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            What we promise, and{" "}
            <span className="text-cyan">what we do not</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            We are a new company. Rather than dress that up, here is the honest
            version.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-light-gray rounded-2xl p-8 border border-transparent"
          >
            <h3 className="font-semibold text-navy mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan" />
              What the system does
            </h3>
            <ul className="space-y-4">
              {promises.map((item) => (
                <li key={item} className="flex gap-3 text-navy/80">
                  <Check className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy rounded-2xl p-8"
          >
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              <X className="w-5 h-5 text-cyan" />
              What we will not claim
            </h3>
            <ul className="space-y-4">
              {nonPromises.map((item) => (
                <li key={item} className="flex gap-3 text-white/70">
                  <X className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
