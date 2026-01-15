"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Business Setup",
    price: "Custom",
    description: "Foundation for your online empire",
    features: [
      "Store setup and optimization",
      "Initial product research",
      "Branding consultation",
      "Payment gateway integration",
      "30-day onboarding support",
    ],
    highlight: false,
  },
  {
    name: "Digital Presence",
    price: "Custom",
    description: "Build authority and reach",
    features: [
      "Everything in Business Setup",
      "Marketing strategy development",
      "Social media management",
      "Content creation support",
      "Weekly performance reports",
      "Quarterly strategy reviews",
    ],
    highlight: true,
  },
  {
    name: "Business Execution",
    price: "Custom",
    description: "Complete growth partnership",
    features: [
      "Everything in Digital Presence",
      "Dedicated account manager",
      "Advanced analytics & optimization",
      "Product sourcing assistance",
      "Monthly strategy calls",
      "Priority support",
      "Custom integrations",
    ],
    highlight: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 sm:py-32 bg-secondary/30">
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Packages</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden transition-all ${
                pkg.highlight ? "border-2 border-accent shadow-2xl shadow-accent/20" : "border border-border"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className={`p-8 ${pkg.highlight ? "bg-card" : "bg-card/50"}`}>
                {pkg.highlight && (
                  <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{pkg.description}</p>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-accent mb-1">{pkg.price}</div>
                  <p className="text-xs text-foreground/50">Tailored to your needs</p>
                </div>

                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all group ${
                    pkg.highlight
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border-2 border-accent text-accent hover:bg-accent/10"
                  }`}
                >
                  Request a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
