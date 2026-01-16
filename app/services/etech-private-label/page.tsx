"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Crown } from "lucide-react"

export default function ETechPrivateLabel() {
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

    const processStages = [
        {
            stage: "Strategy",
            description:
                "We collaborate with you to define brand vision, identify profitable niches, and develop winning product strategies tailored to your goals.",
            icon: "🎯",
        },
        {
            stage: "Development",
            description:
                "Source manufacturers, manage product design and customization, and ensure rigorous quality control throughout the entire process.",
            icon: "⚙️",
        },
        {
            stage: "Branding",
            description:
                "Craft compelling brand identity with professional logo design, packaging, and launch targeted marketing campaigns to build awareness.",
            icon: "🎨",
        },
        {
            stage: "Launch",
            description:
                "Perfect your products and brand, then execute a strategic launch that gets your business the visibility it deserves.",
            icon: "🚀",
        },
    ]

    const whyNeeded = [
        "Reach wider audiences on leading marketplaces",
        "Create your unique niche and deliver real value",
        "Maximize sustainable business growth",
        "Build trusted, loyal customer base",
        "Establish a long-term business model",
    ]

    const services = [
        {
            title: "Business Setup",
            description: "LLC registration and account setup across Stripe, Amazon, and Shopify with full guidance",
            items: ["LLC Registration", "Tax Setup", "Multi-platform Setup", "Payment Processing"],
        },
        {
            title: "Market Research",
            description: "Comprehensive data analysis and customer assessment to identify opportunities",
            items: ["Industry Evaluation", "Customer Analysis", "Market Segmentation", "Trend Analysis"],
        },
        {
            title: "Product Research",
            description: "In-depth analysis to identify high-demand, high-profit products",
            items: ["Volume Analysis", "Feature Evaluation", "Competitor Analysis", "Trend Identification"],
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="ETech Private Label"
                    subtitle="BUILD YOUR BRAND EMPIRE"
                    description="Launch a fully managed private label brand. From research to marketing, we handle everything. Focus on growth while we build your brand."
                />

                {/* Why Needed Section */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Go Private Label?</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Build a brand that generates lasting value and customer loyalty
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {whyNeeded.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg border border-accent/30"
                                >
                                    <p className="text-foreground/80 font-medium">{reason}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Stages */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Process to Your Win</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Four strategic stages from vision to market dominance
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {processStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all group"
                                >
                                    <div className="text-5xl mb-4">{stage.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3">{stage.stage}</h3>
                                    <p className="text-foreground/60 leading-relaxed">{stage.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Breakdown */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">ETech Private Label Services</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Complete support across all aspects of private label success
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-secondary rounded-xl border border-border"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-accent">{service.title}</h3>
                                    <p className="text-foreground/60 text-sm mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle size={16} className="text-accent flex-shrink-0 mt-1" />
                                                <span className="text-sm text-foreground/70">{item}</span>
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
                            <Crown size={48} className="text-accent mx-auto mb-6" />
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Build Your Private Label Empire</h2>
                            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
                                Transform your vision into a thriving brand with proven expertise and complete support
                            </p>
                            <motion.a
                                href="/contact?service=private-label"
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
