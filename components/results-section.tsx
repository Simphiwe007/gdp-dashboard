"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Calendar, Zap, TrendingUp, BarChart3 } from "lucide-react"

const metrics = [
  {
    icon: Calendar,
    value: 20,
    suffix: "+",
    prefix: "8-",
    label: "Qualified Viewings/Month",
    description: "Consistent flow of ready-to-buy property viewers",
  },
  {
    icon: Zap,
    value: 5,
    suffix: "x",
    prefix: "",
    label: "Faster Lead Response",
    description: "AI responds instantly, never missing a hot lead",
  },
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    prefix: "+",
    label: "Better Conversion Rates",
    description: "More leads converting to actual property viewings",
  },
  {
    icon: BarChart3,
    value: 100,
    suffix: "%",
    prefix: "",
    label: "Predictable Pipeline",
    description: "Know exactly what to expect each month",
  },
]

function AnimatedCounter({
  value,
  prefix,
  suffix,
  isInView,
}: {
  value: number
  prefix: string
  suffix: string
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="results" className="py-24 lg:py-32 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan/20 text-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            Proven Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            What Clients Can Expect
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Real numbers from real estate agents who installed our viewing pipeline systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-cyan/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center mb-4 group-hover:bg-cyan/30 transition-colors">
                  <metric.icon className="w-6 h-6 text-cyan" />
                </div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    isInView={isInView}
                  />
                </p>
                <p className="text-white font-medium mb-1">{metric.label}</p>
                <p className="text-sm text-white/60">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
