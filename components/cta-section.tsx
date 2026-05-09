"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Free 30-minute strategy session",
  "Custom pipeline audit for your business",
  "No obligation, no pressure",
  "Actionable insights you can use immediately",
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan/20 text-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Limited Spots Available
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Book Your Free{" "}
            <span className="text-cyan">Pipeline Audit</span>
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {"We'll"} show you exactly where your current system is leaking leads and how 
            to fix it. Get a custom roadmap to predictable property viewings.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center text-white/80">
                <CheckCircle2 className="w-5 h-5 text-cyan mr-2 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-cyan hover:bg-cyan-dark text-navy font-semibold px-10 py-7 text-lg group animate-pulse-glow"
            >
              <a
                href="https://calendly.com/viewflow-system/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-white/50">
            Takes 2 minutes to schedule • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
