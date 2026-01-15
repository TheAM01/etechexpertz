"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

const stories = [
  {
    title: "From Zero to Hero",
    client: "TechGear Store",
    metric: "500% Revenue Growth",
    description:
      "Launched from scratch to $50k monthly revenue in 6 months through strategic product selection and optimization",
  },
  {
    title: "Market Disruption",
    client: "FashionHub",
    metric: "3x Customer Base",
    description:
      "Became market leader in niche category by implementing advanced targeting and customer retention strategies",
  },
  {
    title: "Scaling Success",
    client: "HomeEssentials Co",
    metric: "$200k Monthly Revenue",
    description: "Scaled from overwhelmed founder to systemized operation with dedicated fulfillment and support teams",
  },
]

export default function SuccessStories() {
  return (
    <section id="success" className="relative py-20 sm:py-32 bg-secondary/30">
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-foreground/60">Real results from real partners</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.client}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all"
            >
              <div className="absolute top-0 right-0 p-3 bg-accent/10 rounded-bl-xl group-hover:bg-accent/20 transition-colors">
                <TrendingUp className="text-accent" size={24} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-accent font-bold text-2xl mb-2">{story.metric}</p>
                <p className="text-sm text-foreground/60 mb-4">{story.client}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
