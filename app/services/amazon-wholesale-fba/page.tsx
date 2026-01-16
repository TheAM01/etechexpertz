"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function AmazonWholesaleFBA() {
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

    const roadmapStages = [
        {
            stage: "1",
            title: "Business Setup",
            items: ["Amazon Seller Account Sign Up", "Schedule Amazon Verification Call", "Account Activation"],
        },
        {
            stage: "2",
            title: "Digital Presence",
            items: ["Logo Design", "Website Development", "Domain & Hosting", "Email Setup", "Social Media Creation"],
        },
        {
            stage: "3",
            title: "First Purchase Order",
            items: ["Gated/UnGated Check", "Product Listing", "Order Processing"],
        },
        {
            stage: "4",
            title: "Brand Approval",
            items: [
                "Market Research",
                "Product Hunting",
                "Feasibility Report",
                "MOQ & Pricing Negotiation",
                "Letter of Authorization",
            ],
        },
        {
            stage: "5",
            title: "Monthly Store Management",
            items: [
                "Amazon Store Management",
                "Order Fulfillment",
                "Prep Center Coordination",
                "Amazon Policy Compliance",
                "Return Management",
                "Monthly Profitability Reports",
            ],
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Amazon Wholesale FBA"
                    subtitle="STREAMLINE YOUR E-COMMERCE"
                    description="Stop overwhelming yourself. Launch your Amazon store like a seasoned pro with our comprehensive wholesale FBA management service. We handle sourcing, listings, inventory, and customer fulfillment."
                />

                {/* How We Do It */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How We Do It</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Our proven methodology transforms your vision into a profitable Amazon store
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {["Planning", "Research", "Optimization", "Results"].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all relative"
                                >
                                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-bold text-lg mt-2">{step}</h3>
                                    <div className="text-sm text-foreground/60 mt-3">
                                        {index === 0 && "Strategic planning and implementation"}
                                        {index === 1 && "Deep market & supplier analysis"}
                                        {index === 2 && "Listing optimization & conversion"}
                                        {index === 3 && "Measurable revenue growth"}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Roadmap Section */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your Milestone Roadmap</h2>
                            <p className="text-lg text-foreground/60">Five transformative stages to store success</p>
                        </motion.div>

                        <div className="space-y-6">
                            {roadmapStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-6 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                                >
                                    <div className="flex-1 p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                                                {stage.stage}
                                            </span>
                                            <h3 className="text-2xl font-bold">{stage.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {stage.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-foreground/70">
                                                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="mt-6 text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Learn More <ArrowRight size={16} />
                                        </button>
                                    </div>

                                    {index < roadmapStages.length - 1 && (
                                        <div className="hidden lg:flex flex-col items-center gap-2">
                                            <div className="w-10 h-10 rounded-full border-2 border-accent" />
                                            <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
                                        </div>
                                    )}
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
