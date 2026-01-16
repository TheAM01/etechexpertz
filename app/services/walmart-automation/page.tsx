"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function WalmartAutomation() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(prefersDark)
    }, [])

    const toggleTheme = () => {
        setIsDark(!isDark)
        const html = document.documentElement
        if (!isDark) {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
    }

    const roadmapStages = [
        {
            stage: "1",
            title: "Onboarding",
            description: "Complete setup with management fee and documentation to launch your Walmart store",
        },
        {
            stage: "2",
            title: "Application",
            description: "We submit all requirements for Walmart approval and handle the verification process",
        },
        {
            stage: "3",
            title: "Finalization",
            description: "Comprehensive product research, supplier evaluation, and supply chain optimization",
        },
        {
            stage: "4",
            title: "Launch",
            description: "Your products go live on Walmart with complete logistics arranged",
        },
        {
            stage: "5",
            title: "$10K Target",
            description: "Continuous optimization targeting $10,000 monthly sales with 20-25% ROI",
        },
    ]

    const benefits = [
        {
            title: "Massive Reach",
            description: "Access millions of Walmart customers both online and offline across the US",
            icon: "🌐",
        },
        {
            title: "Lower Competition",
            description: "Fewer sellers on Walmart means better visibility and higher conversion rates",
            icon: "📈",
        },
        {
            title: "Omni-channel",
            description: "Leverage Walmart's pickup, delivery, and in-store integration capabilities",
            icon: "🛍️",
        },
        {
            title: "Flexible Models",
            description: "Choose from retail arbitrage, fulfillment services, or self-fulfillment",
            icon: "⚙️",
        },
        {
            title: "Dedicated Support",
            description: "Our team handles all Walmart account management and optimization",
            icon: "🤝",
        },
        {
            title: "Cost-Effective",
            description: "Only pay commissions on sales—minimal upfront investment required",
            icon: "💰",
        },
    ]

    const serviceFeatures = [
        {
            category: "Setup & Registration",
            items: ["LLC Creation", "Reseller Certificate", "Walmart Store Setup"],
        },
        {
            category: "Research & Optimization",
            items: ["Product Research", "Supplier Research", "ROI Estimation", "Order Management", "Inventory Management"],
        },
        {
            category: "Branding & Marketing",
            items: ["Logo Design", "Website Development", "Domain & Hosting", "Email Setup"],
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Walmart Store Management"
                    subtitle="SCALE YOUR E-COMMERCE EMPIRE"
                    description="Unlock Walmart's massive customer base with our end-to-end store management. We handle everything from setup to optimization, targeting sustainable $10K monthly sales."
                />

                {/* Why Walmart Section */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Walmart?</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Walmart is one of the world's largest retailers—let's tap into that power
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-3">{benefit.icon}</div>
                                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                        <p className="text-foreground/60 text-sm">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Roadmap Section */}
                <section className="relative py-20 sm:py-32 bg-primary/5">
                    <div className="absolute inset-0 texture-overlay opacity-5" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Path to Success</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Five strategic milestones to build a thriving Walmart business
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {roadmapStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative p-6 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl border border-border hover:border-accent/50 transition-all group"
                                >
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold text-lg">
                                                {stage.stage}
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                                            <p className="text-foreground/60">{stage.description}</p>
                                        </div>
                                        <ArrowRight className="flex-shrink-0 text-accent/50 group-hover:text-accent transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Included */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What's Included</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Everything you need to succeed on Walmart</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {serviceFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-secondary rounded-xl border border-border"
                                >
                                    <h3 className="text-xl font-bold mb-4 text-accent">{feature.category}</h3>
                                    <ul className="space-y-3">
                                        {feature.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                                                <span className="text-foreground/70">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-20 sm:py-32 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
                    <div className="absolute inset-0 texture-overlay opacity-10" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Dominate Walmart?</h2>
                            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
                                Let's build a profitable store that generates consistent monthly revenue
                            </p>
                            <motion.a
                                href="/contact?service=walmart"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors"
                            >
                                Request a Quote
                                <ArrowRight size={20} />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <Testimonials />
                <Footer />
            </main>
        </div>
    )
}
