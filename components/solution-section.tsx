"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Bot, MessageSquare, CalendarCheck, ArrowRight } from "lucide-react"

const solutions = [
  {
    step: "01",
    icon: Target,
    title: "Lead Capture",
    description:
      "Strategic systems capture high-intent leads from multiple sources and funnel them directly into your pipeline.",
    color: "bg-cyan",
    lightColor: "bg-cyan/10",
  },
  {
    step: "02",
    icon: Bot,
    title: "AI Qualification",
    description:
      "Our AI instantly qualifies leads based on buying intent, budget, and timeline—separating serious buyers from tire-kickers.",
    color: "bg-cyan",
    lightColor: "bg-cyan/10",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Automated Follow-Up",
    description:
      "Personalized, timely follow-up sequences nurture leads 24/7, keeping you top of mind without lifting a finger.",
    color: "bg-cyan-dark",
    lightColor: "bg-cyan-dark/10",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Appointment Booking",
    description:
      "Qualified leads are seamlessly guided to book property viewings directly on your calendar—ready to buy.",
    color: "bg-cyan",
    lightColor: "bg-cyan/10",
  },
]

export function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solution" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan/10 text-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            We Install{" "}
            <span className="text-cyan">Predictable Viewing Pipelines</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            ViewFlow Systems helps agents convert interest into booked property viewings 
            using automation and AI-driven workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
                <div className="relative bg-background rounded-2xl p-8 h-full border border-border hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/5 transition-all duration-300">
                {/* Step Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-light-gray group-hover:text-cyan/10 transition-colors">
                  {solution.step}
                </span>

                <div
                  className={`w-14 h-14 rounded-xl ${solution.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <solution.icon
                    className={`w-7 h-7 ${
                      solution.color === "bg-cyan"
                        ? "text-cyan"
                        : "text-cyan-dark"
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-navy mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                {/* Arrow indicator on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-cyan text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
