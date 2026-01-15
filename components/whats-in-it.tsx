"use client"

import { motion } from "framer-motion"
import { Search, ShoppingCart, BarChart3, Zap, Package, Users } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Search,
    title: "Product Hunting",
    description: "Discover untapped markets and trending products with data-driven research",
    color: "from-accent/20 to-accent/5",
    index: 0,
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Product Listing",
    description: "Create SEO-optimized listings that convert traffic into sales velocity",
    color: "from-accent/15 to-transparent",
    index: 1,
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Marketing Strategy",
    description: "Craft data-backed campaigns that amplify reach and maximize ROI consistently",
    color: "from-accent/20 to-accent/5",
    index: 2,
  },
  {
    id: 4,
    icon: Zap,
    title: "Product Boosting",
    description: "Accelerate sales growth with precision-targeted promotional mechanics",
    color: "from-accent/15 to-transparent",
    index: 3,
  },
  {
    id: 5,
    icon: Package,
    title: "Order Fulfillment",
    description: "End-to-end logistics management with real-time tracking and optimized delivery",
    color: "from-accent/20 to-accent/5",
    index: 4,
  },
  {
    id: 6,
    icon: Users,
    title: "Account Management",
    description: "Dedicated support and strategic optimization for sustainable growth",
    color: "from-accent/15 to-transparent",
    index: 5,
  },
]

export default function WhatsInItForYou() {
  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 texture-graphy" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">
            <span className="block mb-2">What's In It</span>
            <span className="gradient-text bg-gradient-to-r from-accent via-accent to-foreground">For You</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Six comprehensive service pillars. Each one a competitive edge. Together, unstoppable.
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon
            const isEven = service.index % 2 === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: service.index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Icon and Title */}
                <motion.div whileHover={{ scale: 1.05 }} className={`flex-shrink-0 w-full md:w-1/3 relative`}>
                  <div className={`relative p-8 rounded-2xl glass group overflow-hidden border border-border`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`} />
                    <div className="absolute inset-0 texture-notebook opacity-40" />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mb-6 inline-block p-4 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors"
                      >
                        <Icon className="text-accent w-8 h-8" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div whileHover={{ scale: 1.02 }} className="flex-1 w-full md:w-2/3">
                  <div className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                    <div className="absolute inset-0 texture-asfalt-light" />

                    <p className="relative text-lg text-foreground/80 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="mt-6 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="w-2 h-2 rounded-full bg-accent/60" />
                      <div className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                  </div>
                </motion.div>

                {/* Connecting line for visual flow */}
                {service.index < services.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: service.index * 0.1 }}
                    className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-accent to-accent/30 origin-top"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
