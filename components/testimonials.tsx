"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "E-Commerce Founder",
    content:
      "OutsourceTechAutomations transformed our store from struggling startup to $100k+ monthly revenue. Their strategic approach is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Business Owner",
    content:
      "The team handled everything professionally. From product hunting to fulfillment, they executed flawlessly.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Digital Entrepreneur",
    content: "Finally found a partner who understands the nuances of e-commerce. Results speak louder than words.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-foreground/60">Trusted by growing businesses worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
