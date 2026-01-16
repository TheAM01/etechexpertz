"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function TikTokShop() {
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
            title: "Market/Product Finalization",
            description: "Identify trending products and validate market demand for maximum profitability.",
            details: [
                "Identify Current Trends and Consumer Preferences",
                "Assess Competition",
                "Evaluate Profitability and Margins",
                "Assess Supply Chain and Logistics",
            ],
        },
        {
            title: "Discovering & Engaging Influencers",
            description: "Connect with viral creators who align perfectly with your brand vision.",
            details: [
                "Target Viral Influencers",
                "Assess Past Performance",
                "Negotiate Competitive Commission Rates",
                "Onboard Influencers",
            ],
        },
        {
            title: "Optimize Product Listing",
            description: "Elevate visibility and conversion through strategic product presentation.",
            details: ["Enhance Search Visibility", "Incorporate High-Quality Images", "Add Relevant Keywords"],
        },
        {
            title: "Effective Management of Influencers & Affiliates",
            description: "Nurture partnerships and maximize revenue from your influencer network.",
            details: [
                "Streamline Order Management",
                "Content Production Support",
                "Curate High-Converting Content",
                "Evaluate Affiliate Performance",
                "Ongoing Results Assessment",
            ],
        },
        {
            title: "Manage Pricing",
            description: "Stay competitive with dynamic pricing strategies tailored to market conditions.",
            details: ["Regular Price Adjustments", "Utilize TikTok Shop Tools"],
        },
        {
            title: "Manage Inventory Efficiently",
            description: "Streamline stock management across all channels seamlessly.",
            details: ["Track Stock Levels", "Receive Low-Stock Alerts", "Synchronize Across Channels"],
        },
        {
            title: "Monitor Performance Metrics",
            description: "Track, analyze, and optimize every aspect of your store performance.",
            details: ["Sales Performance", "Product Visibility", "Customer Feedback and Seller Ratings"],
        },
        {
            title: "Adapt & Scale",
            description: "Leverage data insights to accelerate growth and market dominance.",
            details: ["Analyze Data for Improvement", "Experiment with New Approaches", "Adapt to Market Dynamics"],
        },
    ]

    const packageFeatures = [
        "Smooth Onboarding Process",
        "EIN Application",
        "Seamless TikTok Shop Setup",
        "Thorough Product Research & Analysis",
        "Strategic Influencer Identification & Partnership",
        "Efficient Product Listings & Inventory Control",
        "Streamlined Order Processing & Price Optimization",
        "Influencer & Affiliate Management",
        "Order Shipping Confirmation & Tracking",
        "Easy Authorization and Processing of Returns",
        "Store Performance Monitoring & Audit Management",
        "Growth-Oriented Scalability Solutions",
    ]

    const exclusions = [
        "Platform fees",
        "Marketing Budget",
        "Legal & Registration",
        "Inventory Cost",
        "Shipping",
        "Campaign Management charges",
        "Shop live-streaming management charges",
        "Paid promotional tools setup",
        "Platform management charges",
        "LLC creation fees",
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="TikTok Shop"
                    subtitle="PRIVATE LABEL POWERHOUSE"
                    description="Launch a thriving private label business on TikTok Shop with our expert guidance. From product selection to influencer partnerships, we handle every strategic detail."
                />

                {/* How We Do It Section */}
                <section className="relative py-20 sm:py-32 bg-secondary">
                    <div className="absolute inset-0 texture-overlay opacity-20" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How We Do It</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                We create thriving TikTok shops on demand, allowing you to progress at your own pace with our
                                "Just-in-Time" approach.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Roadmap Section */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay opacity-10" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Roadmap to Success</h2>
                            <p className="text-lg text-foreground/60">Eight strategic stages to build your private label empire</p>
                        </motion.div>

                        <div className="space-y-6">
                            {roadmapStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div
                                        className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}
                                    >
                                        {/* Content */}
                                        <div className="flex-1 p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all hover:shadow-lg">
                                            <div className="flex items-start gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-accent font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                                                        {stage.title}
                                                    </h3>
                                                    <p className="text-foreground/60 mb-4">{stage.description}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                {stage.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-start gap-2 text-foreground/70">
                                                        <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Connector */}
                                        {index < roadmapStages.length - 1 && (
                                            <div className="hidden md:flex flex-col items-center justify-center w-12">
                                                <div className="w-1 h-20 bg-gradient-to-b from-accent to-accent/20 rounded-full" />
                                                <ArrowRight className="text-accent my-2 rotate-90" size={20} />
                                                <div className="w-1 h-20 bg-gradient-to-b from-accent/20 to-accent rounded-full" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Package Section */}
                <section className="relative py-20 sm:py-32 bg-secondary">
                    <div className="absolute inset-0 texture-overlay opacity-20" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Complete TikTok Shop Package</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Everything you need to launch and scale a profitable private label business
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {packageFeatures.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.03 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                            </div>
                                            <span className="text-foreground/80">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Exclusions */}
                                <div className="pt-8 border-t border-border/50">
                                    <p className="text-sm text-foreground/60 font-medium mb-4">Package does not include:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {exclusions.map((exclusion, index) => (
                                            <p key={index} className="text-sm text-foreground/50">
                                                • {exclusion}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-8 px-8 py-4 bg-accent text-primary rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Started
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>
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
