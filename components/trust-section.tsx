"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Shield, Award, Clock, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    quote:
      "You work directly with the person who built the system. No support queue, no account manager reading from a script.",
    author: "Direct access",
    role: "Founding client benefit",
    rating: 0,
  },
  {
    quote:
      "Capture, follow-up and booking get configured around how you already work, not forced into a template.",
    author: "Built around you",
    role: "Founding client benefit",
    rating: 0,
  },
  {
    quote:
      "Founding agents keep the rate they signed up on. Your pricing does not move as the product grows.",
    author: "Rate locked",
    role: "Founding client benefit",
    rating: 0,
  },
]

const trustBadges = [
  { icon: Shield, label: "Secure & Private" },
  { icon: Award, label: "No Long-Term Contracts" },
  { icon: Clock, label: "24/7 Automation" },
  { icon: CheckCircle2, label: "48-Hour Setup" },
]

export function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan/10 text-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            Now Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy text-balance">
            Built For Modern{" "}
            <span className="text-cyan">Real Estate Growth</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We are onboarding our first agents now. No borrowed logos, no invented
            reviews: here is exactly what founding clients get.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-light-gray px-4 py-2 rounded-full"
            >
              <badge.icon className="w-4 h-4 text-cyan" />
              <span className="text-sm font-medium text-navy">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="group"
            >
              <div className="bg-light-gray rounded-2xl p-6 lg:p-8 h-full border border-transparent hover:border-cyan/20 hover:shadow-lg transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-navy" />
                </div>

                {/* Quote */}
                <p className="text-navy leading-relaxed mb-6">
                  {`"${testimonial.quote}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium text-navy">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-navy rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Your Command Center for Lead Conversion
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Get full visibility into your pipeline with our intuitive dashboard. 
                  Track leads, monitor conversions, and see your viewing appointments grow.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time pipeline analytics",
                    "Lead quality scoring",
                    "Automated task management",
                    "Performance tracking",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock Dashboard */}
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-cyan" />
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-white/10 rounded w-1/2" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-cyan/20 rounded-lg" />
                    <div className="h-20 bg-cyan-dark/20 rounded-lg" />
                    <div className="h-20 bg-white/10 rounded-lg" />
                  </div>
                  <div className="h-32 bg-white/5 rounded-lg border border-white/10" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-12 bg-white/10 rounded" />
                    <div className="h-12 bg-cyan/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
