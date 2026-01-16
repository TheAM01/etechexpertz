"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"

export default function FacebookMarketplace() {
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

    const services = [
        {
            title: "Product Hunting",
            description:
                "We identify products that resonate with your Facebook audience, optimizing for relevance and profitability.",
        },
        {
            title: "Product Listing",
            description: "Expert listing management that bridges the gap between discovery and sales, maximizing your reach.",
        },
        {
            title: "Marketing Strategy",
            description:
                "Long-term strategic planning with keyword optimization and enhanced organic reach for sustainable growth.",
        },
        {
            title: "Product Boosting",
            description:
                "Strategic paid marketing that positions your products at the top of sponsored results with optimized bidding.",
        },
        {
            title: "Order Fulfillment",
            description:
                "Seamless order processing and fulfillment management, ensuring customer satisfaction at every step.",
        },
        {
            title: "Account Management",
            description: "Comprehensive account oversight covering compliance, reporting, and continuous optimization.",
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Facebook Marketplace"
                    subtitle="LOCAL TO GLOBAL REACH"
                    description="Leverage the power of Facebook Marketplace to connect with buyers worldwide. We maximize your visibility and sales potential on this thriving platform."
                />

                {/* Services Grid */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
                            <p className="text-lg text-foreground/60">Comprehensive Facebook Marketplace solutions</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay opacity-50" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Proven Process</h2>
                            <p className="text-lg text-foreground/60">Four pillars of Facebook Marketplace success</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {["Planning", "Research", "Optimization", "Results"].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all text-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-bold text-lg">{step}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}
