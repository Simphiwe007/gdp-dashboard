"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Bot, CalendarCheck, ChevronRight } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Users,
    title: "Lead Acquisition",
    description:
      "We set up automated systems that capture qualified leads from your chosen sources—social ads, property portals, referrals, and more.",
    features: [
      "Multi-channel capture",
      "Instant CRM sync",
      "Quality filtering",
    ],
  },
  {
    number: "2",
    icon: Bot,
    title: "AI Qualification + Follow-Up",
    description:
      "Our AI engages leads instantly, qualifying them based on intent and readiness. Automated nurture sequences keep warm leads engaged 24/7.",
    features: [
      "Instant AI response",
      "Smart lead scoring",
      "Personalized sequences",
    ],
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Booked Property Viewings",
    description:
      "Qualified, ready-to-buy leads are seamlessly guided to book viewings directly on your calendar. You show up, they show up.",
    features: [
      "Calendar integration",
      "Automated reminders",
      "No-show reduction",
    ],
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-light-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-6">
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            How It             <span className="text-cyan">Works</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A simple 3-step process that transforms your lead flow into predictable property viewings.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-24 left-0 right-0 h-0.5 bg-cyan origin-left"
            />

            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-cyan text-navy flex items-center justify-center text-lg font-bold z-10 relative">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-cyan/20 rounded-full animate-ping" />
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <ChevronRight className="w-6 h-6 text-cyan" />
                    </div>
                  )}

                  {/* Content Card */}
                  <div className="bg-background rounded-2xl p-6 border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-navy"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex gap-4">
                {/* Step Number */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan text-navy flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-cyan/30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-background rounded-xl p-5 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-navy">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-navy"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
