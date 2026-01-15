"use client"

import { motion } from "framer-motion"
import { Search, BookOpen, Zap, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Deep market analysis to understand your opportunities and competitive landscape",
  },
  {
    icon: BookOpen,
    title: "Planning",
    description: "Strategic roadmap tailored to your business goals and target audience",
  },
  {
    icon: Zap,
    title: "Optimization",
    description: "Fine-tune every aspect for maximum conversion and user engagement",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Measurable growth and sustainable success for your business",
  },
]

export default function HowWeDoit() {
  return (
    <section id="how" className="relative py-20 sm:py-32 bg-secondary/30 texture-graphy">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How We Do It</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A systematic approach to transform your vision into profitable reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
                  <Icon className="text-accent" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-accent/30">
                    →
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
