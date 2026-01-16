"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"

export default function ShopifyDropshipping() {
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

    const packageTiers = [
        {
            name: "Business Setup",
            items: ["Company Registration", "Shopify Store Setup", "Business Prime Setup"],
        },
        {
            name: "Digital Presence",
            items: [
                "Shopify Web Development",
                "Domain Registration",
                "Social Media Account Creation",
                "Social Media Posting",
                "Campaign Planning",
                "Campaign Setup",
            ],
        },
        {
            name: "Business Execution",
            items: [
                "Campaign Optimization",
                "Product Analysis",
                "Supplier Acquisition",
                "ROI Estimation",
                "Order Placement",
                "Inventory Management",
                "Shopify Store Management",
            ],
        },
    ]

    const features = [
        {
            title: "E-Commerce Website Development",
            description:
                "A robust e-commerce website essential for success. We provide comprehensive solutions with currency flexibility and seamless payment management.",
        },
        {
            title: "Niche Analysis",
            description:
                "We curate trending niches based on top-performing categories, giving you the strategic edge in a competitive marketplace.",
        },
        {
            title: "Product Research",
            description:
                "Our comprehensive analysis gathers crucial data on target audiences and purchasing habits, ensuring strategic product selection.",
        },
        {
            title: "Supplier Research",
            description:
                "We connect you with reliable, vetted suppliers that align with your business needs for seamless operations.",
        },
        {
            title: "Digital Marketing",
            description:
                "Our experts prioritize brand visibility through content marketing, targeted advertising, and organic reach optimization.",
        },
        {
            title: "Store Management",
            description: "From product sourcing to customer management, we handle every detail while you focus on growth.",
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Shopify Dropshipping"
                    subtitle="SIMPLIFIED E-COMMERCE"
                    description="Stop stressing about fulfillment. We handle the complex logistics while you focus on growing your brand. Expert, efficient, and cost-effective."
                />

                {/* Features Section */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What We Offer</h2>
                            <p className="text-lg text-foreground/60">Comprehensive Shopify solutions designed for growth</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all group"
                                >
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                                    <p className="text-foreground/70">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Package Tiers */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Package</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Three integrated tiers for complete business transformation
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {packageTiers.map((tier, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-accent">{tier.name}</h3>
                                    <ul className="space-y-3">
                                        {tier.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-foreground/70">
                                                <span className="text-accent font-bold mt-0.5">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center p-6 bg-card border border-border rounded-xl"
                        >
                            <p className="text-sm text-foreground/60 mb-6">
                                *Package excludes: Amazon Fees, Marketing Budget, Legal & Registration, Inventory Cost, Shipping,
                                Campaign Budget, and Shopify Account
                            </p>
                            <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all">
                                Request a Quote
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials */}
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}
