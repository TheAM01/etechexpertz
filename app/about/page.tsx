"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import { useState, useEffect } from "react"

export default function About() {
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

    const heritage = [
        {
            period: "2005 - 2016",
            title: "Global B2B Marketplace",
            description:
                "We launched as an innovative B2B marketplace, bridging connections between companies and enabling seamless global commerce.",
            icon: "🌍",
        },
        {
            period: "2017 - 2019",
            title: "Digital Agency Evolution",
            description:
                "We expanded into comprehensive digital marketing services, empowering brands to thrive in the digital landscape.",
            icon: "💻",
        },
        {
            period: "2020 - Present",
            title: "E-Commerce Automation Leader",
            description:
                "Now established as the premier e-commerce automation provider, helping entrepreneurs generate sustainable passive income.",
            icon: "🚀",
        },
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
                    <div className="absolute inset-0 texture-overlay" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
                        >
                            We Do the{" "}
                            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                                Hard Work
                            </span>
                            <br /> You Relax & Grow
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed"
                        >
                            We handle every aspect of setting up and managing your e-commerce business. From product sourcing to
                            customer fulfillment, you focus on scaling while we manage the complexities.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all"
                        >
                            Get Started Today
                        </motion.button>
                    </div>

                    {/* Floating orbs */}
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse" />
                    <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20 animate-pulse" />
                </section>

                {/* Philosophy Section */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Philosophy</h2>
                            <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent/50 mx-auto mb-8" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg text-foreground/75 leading-relaxed"
                        >
                            <p>
                                At OutsourceTechAutomations, we're driven by a singular mission: empowering entrepreneurs to build thriving online
                                businesses without the overwhelming complexity. We recognize that managing an e-commerce venture while
                                juggling multiple responsibilities is exhausting. That's where we step in.
                            </p>
                            <p>
                                Our team of seasoned e-commerce consultants understands your challenges intimately. We've built our
                                reputation on delivering tailored solutions that transform confusion into clarity and complexity into
                                simplicity. We don't believe in one-size-fits-all approaches.
                            </p>
                            <p>
                                By optimizing your operations, implementing cutting-edge automation, and reducing unnecessary costs, we
                                help you deliver exceptional customer experiences while maximizing profitability. Our "done-for-you"
                                services mean you can focus on what truly matters: growing your business and building meaningful
                                customer relationships.
                            </p>
                            <p>
                                When you partner with OutsourceTechAutomations, you're not just getting a service provider—you're gaining a
                                strategic partner committed to your success. We handle the technical intricacies, the market research,
                                the optimization, and the execution. You focus on your vision. Together, we make it reality.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Heritage Timeline */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Heritage</h2>
                            <p className="text-lg text-foreground/60">From marketplace pioneer to e-commerce automation leader</p>
                        </motion.div>

                        <div className="space-y-8">
                            {heritage.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                                >
                                    <div className="flex-1">
                                        <div className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
                                            <span className="text-4xl mb-4 block">{item.icon}</span>
                                            <p className="text-sm font-semibold text-accent mb-2">{item.period}</p>
                                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-foreground/70">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
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
