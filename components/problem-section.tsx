"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Clock, UserX, Shuffle } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Missed Opportunities",
    description:
      "Hot leads go cold because follow-up happens too late. Every hour of delay reduces your chance of conversion.",
  },
  {
    icon: UserX,
    title: "Unqualified Leads",
    description:
      "You spend hours chasing leads who were never serious buyers, wasting precious time on dead ends.",
  },
  {
    icon: Shuffle,
    title: "Inconsistent Viewings",
    description:
      "Some weeks are packed, others are empty. No predictable flow means no predictable income.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Follow-Up Chaos",
    description:
      "Sticky notes, spreadsheets, and forgotten reminders. Your CRM becomes a graveyard of lost opportunities.",
  },
]

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problem" className="py-24 lg:py-32 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            The Real Problem{" "}
            <span className="text-cyan">{"Isn't"} Leads</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most real estate agents already generate leads. The problem is inconsistent 
            follow-up, poor qualification, weak conversion systems, and no structured pipeline.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-6 h-full border border-border hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-navy font-medium text-lg">
            Sound familiar?{" "}
            <span className="text-cyan">
              {"There's"} a better way.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
