"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function BrandShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How ViewFlow Works Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-light-gray rounded-2xl p-8 lg:p-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d41abf0a_generated_image-3gawMMqTHeXuN2DZ4Xa0c3gwbKKCQf.png"
              alt="How ViewFlow Works - 4 step process showing targeted ads, AI qualification, and qualified viewers"
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
        </motion.div>

        {/* Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f2ee99ac_generated_image-VmghAWGbEv8N05aWq7RUZ7AtNbQxrk.png"
              alt="The best estate agents don't chase leads. They let leads come to them. - ViewFlow Systems"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Feature Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a66f55644_generated_image-kTHb14vhCy90HFPCige2rM880TVCVC.png"
              alt="Stop Chasing Cold Leads - Get 8-20 pre-qualified property viewings delivered to you every month"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/37cc9c164_generated_image-8NbW2Ym7KG64KGXfeoKZqILsoJCc9a.png"
              alt="Are You an Estate Agent? 8-20 Qualified Viewings Monthly, Pre-qualified Buyers & Renters"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Full Width Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/95683bdec_generated_image-G18L9fFx9mXRHdWRfG4wg9FVPBJYme.png"
              alt="Generating 8-20 Qualified Property Viewings Per Month for SA Estate Agents"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
