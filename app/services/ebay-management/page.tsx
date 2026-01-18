"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import DashboardCarousel, { DashboardSlide } from "@/components/DashboardCarousel"

export default function eBayManagement() {
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

    const services = [
        {
            title: "Order & Inventory Management",
            description:
                "We handle all listing management, cancellations, and inventory coordination—keeping your store fully stocked and efficient",
            icon: "📦",
        },
        {
            title: "Customer Service Excellence",
            description: "Professional support for order tracking, returns, and refunds across chat, phone, email, and text",
            icon: "💬",
        },
        {
            title: "Product Sourcing",
            description:
                "Expert research and selection across dropshipping, private label, wholesale, and arbitrage opportunities",
            icon: "🔍",
        },
        {
            title: "Listing Optimization",
            description:
                "Strategic keywords, enhanced descriptions, and compelling visuals to boost discoverability and conversions",
            icon: "⭐",
        },
        {
            title: "Marketing & Promotion",
            description: "Social media management, influencer partnerships, email campaigns, and paid advertising strategy",
            icon: "📢",
        },
        {
            title: "Market Research",
            description: "Thorough competitive analysis and trend research to identify profitable product opportunities",
            icon: "📊",
        },
    ]

    const slides: DashboardSlide[] = [
        {
            id: 1,
            title: "Babar",
            image: '/ebay/ebay-babar.jpeg',
            description: "",
        },
        {
            id: 2,
            title: "Alaister",
            image: '/ebay/ebay-alaister.jpeg',
            description: "",
        },
        {
            id: 3,
            title: "",
            image: '/ebay/ebay.jpeg',
            description: "",
        },
    ];

    const highlights = [
        "20% increase in click-through rates with optimized listings",
        "15% improvement in product competitiveness",
        "30% boost in sales through targeted campaigns",
        "Dedicated support and account oversight",
        "Policy compliance and account protection",
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="eBay Store Management"
                    subtitle="UNLOCK YOUR EBAY POTENTIAL"
                    description="Our expert eBay virtual assistants elevate your store's performance, boost conversions, and maximize profits. Scale globally with confidence."
                />

                {/* Specialist Overview */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">eBay E-commerce Specialist</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Expert account management that drives real, measurable results
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Zap size={20} className="text-accent flex-shrink-0 mt-1" />
                                        <span className="text-foreground/70">{highlight}</span>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="p-8 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-accent/30"
                            >
                                <h3 className="font-bold text-2xl mb-4 text-accent">Our Approach</h3>
                                <p className="text-foreground/70 leading-relaxed">
                                    We combine deep market expertise with data-driven strategies. Our team manages end-to-end operations,
                                    conducts thorough competitor analysis, and implements dynamic pricing to keep you competitive. The
                                    result? Sustainable growth and maximized profitability.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Virtual Assistant Services</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Everything you need to run a thriving eBay operation
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all group"
                                >
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                                    <p className="text-foreground/60 text-sm">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative py-20 sm:py-32 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
                    <DashboardCarousel slides={slides}/>
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Scale Your eBay Business</h2>
                            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
                                Get expert support to grow sales, optimize listings, and build a thriving global store
                            </p>
                            <motion.a
                                href="/contact?service=ebay"
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
