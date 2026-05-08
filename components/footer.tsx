"use client"

import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Results", href: "#results" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/939c69b79_generated_image-8FSH96UTd6vo4gKDg3pUIdAC7orLKT.png"
                alt="ViewFlow Systems"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-semibold text-white">ViewFlow Systems</span>
            </a>
            <p className="text-cyan font-medium mb-2">
              Consistent Viewings. Every Month.
            </p>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              We help real estate agents generate predictable, qualified property 
              viewing appointments through automation systems, AI follow-up, and 
              structured lead conversion workflows.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan hover:border-cyan/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-cyan transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} ViewFlow Systems. All rights reserved.
          </p>
          <a
            href="mailto:viewflowsystem@gmail.com"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-cyan transition-colors"
          >
            <Mail className="w-4 h-4" />
            viewflowsystem@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
