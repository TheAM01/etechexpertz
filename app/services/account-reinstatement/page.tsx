"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceHero from "@/components/service-hero"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { ArrowRight, AlertCircle } from "lucide-react"

export default function AccountReinstatement() {
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

    const processSteps = [
        {
            step: "1",
            title: "Consultation",
            description: "Submit your suspension details. Include the notice to accelerate review.",
        },
        {
            step: "2",
            title: "Assessment",
            description: "Our legal experts evaluate your case and determine reinstatement viability.",
        },
        {
            step: "3",
            title: "Strategy",
            description: "We craft a customized appeal letter and comprehensive action plan.",
        },
        {
            step: "4",
            title: "Submission",
            description: "Submit your appeal with our expert guidance and documentation.",
        },
        {
            step: "5",
            title: "Reinstatement",
            description: "Receive Amazon's approval and get your account back in business.",
        },
    ]

    const issuesHandled = [
        "Inauthentic or counterfeit items",
        "Intellectual property violations",
        "Product safety complaints",
        "Listing detail page mismatches",
        "Used items sold as new",
        "Not as advertised claims",
        "Multiple account violations",
        "Review manipulation",
        "Negative customer feedback",
        "Restricted product listings",
        "Price fixing allegations",
        "FBM policy violations",
    ]

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                <ServiceHero
                    title="Amazon Account Reinstatement"
                    subtitle="99% SUCCESS RATE"
                    description="Your Amazon account matters. Our legal experts have successfully reinstated 99% of suspended accounts. Let's get you back to selling."
                />

                {/* Success Rate Banner */}
                <section className="relative py-12 sm:py-16 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20">
                    <div className="absolute inset-0 texture-overlay opacity-10" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl sm:text-6xl font-bold text-accent mb-2">99%</div>
                            <p className="text-lg text-foreground/70">
                                Success rate in reinstating Amazon seller accounts with proven expertise across all violation types
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Process Steps */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our 5-Step Process</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                                Quick, efficient reinstatement with expert legal guidance
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {processSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary font-bold flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-foreground/60">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Issues Handled */}
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
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Issues We Handle</h2>
                            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Every suspension type, expertly resolved</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {issuesHandled.map((issue, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border/50"
                                >
                                    <AlertCircle size={18} className="text-accent flex-shrink-0" />
                                    <span className="text-foreground/70">{issue}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Guarantee Section */}
                <section className="relative py-20 sm:py-32 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
                    <div className="absolute inset-0 texture-overlay opacity-10" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block mb-6 px-6 py-2 bg-accent/20 rounded-full border border-accent/30">
                                <span className="text-accent font-bold">100% Money-Back Guarantee</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get Your Account Back</h2>
                            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
                                We're confident in our process. If we can't reinstate your account, you get your money back. Period.
                            </p>
                            <motion.a
                                href="/contact?service=reinstatement"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors"
                            >
                                Get Expert Help
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
