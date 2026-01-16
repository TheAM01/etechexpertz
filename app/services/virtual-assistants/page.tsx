"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function VirtualAssistants() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(prefersDark)
        // Apply the class immediately
        if (prefersDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        setIsDark(!isDark)
        if (!isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    const vaTypes = [
        {
            title: "Product Research VA",
            description:
                "Identify and evaluate products for maximum profitability. We analyze market trends, pricing, availability, and competition to inform your sourcing strategy.",
            features: [
                "Market trend analysis",
                "Competitive pricing research",
                "Product feature evaluation",
                "Informed decision support",
            ],
        },
        {
            title: "Product Sourcing VA",
            description:
                "Find and acquire the best products at competitive prices. We identify suppliers, negotiate terms, and list products directly on your account.",
            features: ["Supplier identification", "Price negotiation", "Quality assurance", "Direct listing management"],
        },
        {
            title: "Amazon PPC VA",
            description:
                "Master paid advertising with expert campaign management. We create, optimize, and scale PPC campaigns to drive consistent ROI.",
            features: ["Campaign creation", "Data analysis", "Continuous optimization", "ROI tracking"],
        },
        {
            title: "Order & Inventory VA",
            description:
                "Keep operations running smoothly. We track orders, manage inventory levels, and reconcile stock counts in real-time.",
            features: ["Order processing", "Inventory updates", "Stock reconciliation", "Operational efficiency"],
        },
        {
            title: "Seller Central VA",
            description:
                "Complete account management and automation. We handle all setup, optimization, and day-to-day operations so you can focus on growth.",
            features: ["Account setup", "Operational automation", "Policy compliance", "Performance optimization"],
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Virtual Assistant Services"
                    subtitle="WORK SMARTER, NOT HARDER"
                    description="Delegate routine tasks to our expert virtual assistants. Focus on strategy while we handle product research, PPC, inventory, and everything in between."
                />

                {/* VA Types Grid */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Specialized Virtual Assistants</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Expert support across every aspect of your e-commerce operation
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {vaTypes.map((va, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl border border-border hover:border-accent/50 transition-all group"
                                >
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold mb-2">{va.title}</h3>
                                        <p className="text-foreground/60 text-lg">{va.description}</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-3 mt-6">
                                        {va.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle size={18} className="text-accent flex-shrink-0" />
                                                <span className="text-sm text-foreground/70">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Our VAs?</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Combine your focus with our expertise for exponential growth
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Deep Market Expertise",
                                    description: "Our VAs have years of e-commerce experience across all major platforms",
                                },
                                {
                                    title: "Customized Support",
                                    description: "We work closely with you to understand your specific needs and goals",
                                },
                                {
                                    title: "Data-Driven Decisions",
                                    description: "Every strategy is backed by thorough research and performance analytics",
                                },
                                {
                                    title: "Scalable Solutions",
                                    description: "Grow from startup to powerhouse with flexible, scalable VA support",
                                },
                                {
                                    title: "Maximum Efficiency",
                                    description: "Streamlined processes and proven workflows ensure peak productivity",
                                },
                                {
                                    title: "24/7 Availability",
                                    description: "Dedicated support across all time zones for uninterrupted operations",
                                },
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-secondary rounded-lg border border-border"
                                >
                                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                    <p className="text-foreground/60">{benefit.description}</p>
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Delegate?</h2>
                            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
                                Let our expert virtual assistants handle the heavy lifting while you focus on growth
                            </p>
                            <motion.a
                                href="/contact?service=va"
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
