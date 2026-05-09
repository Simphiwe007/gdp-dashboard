"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, TrendingUp, Users, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-gray via-background to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-soft-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cyan/10 text-cyan px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Real Estate Pipeline Automation
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight text-balance">
              We Build Predictable Viewing Systems For{" "}
              <span className="text-cyan">Real Estate Agents</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Turn inconsistent leads into qualified property viewing appointments through 
              automation, AI follow-up, and structured pipeline systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-cyan hover:bg-cyan-dark text-navy font-semibold px-8 py-6 text-base group"
              >
                <a
                  href="https://calendly.com/viewflow-system/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Pipeline Audit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy/20 text-navy hover:bg-navy/5 font-medium px-8 py-6 text-base group"
              >
                <a href="#how-it-works">
                  <Play className="mr-2 w-4 h-4" />
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-cyan" />
                No long-term contracts
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-cyan" />
                Results in 30 days
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-cyan" />
                AI-powered systems
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-navy rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-cyan text-sm font-medium">Pipeline Overview</p>
                    <p className="text-white text-2xl font-bold">24 Active Leads</p>
                  </div>
                  <div className="bg-cyan/20 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-cyan" />
                  </div>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <Users className="w-5 h-5 text-cyan mb-2" />
                    <p className="text-white text-xl font-bold">156</p>
                    <p className="text-white/60 text-xs">New Leads</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <Calendar className="w-5 h-5 text-cyan mb-2" />
                    <p className="text-white text-xl font-bold">18</p>
                    <p className="text-white/60 text-xs">Viewings</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <Zap className="w-5 h-5 text-yellow-500 mb-2" />
                    <p className="text-white text-xl font-bold">94%</p>
                    <p className="text-white/60 text-xs">Response</p>
                  </div>
                </div>

                {/* Pipeline Visualization */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-cyan rounded-full" />
                    </div>
                    <span className="text-white/80 text-sm">Lead Capture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-cyan-dark rounded-full" />
                    </div>
                    <span className="text-white/80 text-sm">AI Qualification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/5 h-full bg-cyan rounded-full" />
                    </div>
                    <span className="text-white/80 text-sm">Booked Viewings</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-4 top-1/3 bg-background rounded-xl p-4 shadow-lg border border-border animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">New Viewing</p>
                    <p className="text-xs text-muted-foreground">Just booked</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-background rounded-xl p-4 shadow-lg border border-border"
                style={{ animation: "float 3s ease-in-out infinite", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">Lead Qualified</p>
                    <p className="text-xs text-muted-foreground">AI verified</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
