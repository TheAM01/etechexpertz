"use client"

import type React from "react"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    services: string[]
    message: string
}


export default function Contact() {
    // const [isDark, setIsDark] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        services: [],
        message: "",
    })

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

    const contactInfo = [
        {
            icon: MessageSquare,
            label: "Live Chat",
            value: "Start a conversation",
            action: "Chat Now",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (786) 887-3470",
            action: "Call Now",
        },
        {
            icon: Mail,
            label: "Email",
            value: "contact@outsourcetechautomations.com",
            action: "Send Email",
        },
        {
            icon: MapPin,
            label: "Address",
            value: "7901 4th St, St. Petersburg, FL 33702",
            action: "View Map",
        },
    ]

    const services = ["Amazon Wholesale FBA", "Amazon Private Label", "Shopify Dropshipping", "Facebook Marketplace"]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className={isDark ? "dark" : ""}>
            <Navigation themeToggle={toggleTheme} isDark={isDark} />
            <main>
                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center justify-center pt-32 overflow-hidden">
                    <div className="absolute inset-0 texture-overlay" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl font-bold mb-6"
                        >
                            Let's{" "}
                            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                                Connect
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-foreground/70 max-w-2xl mx-auto"
                        >
                            Ready to launch your next project or scale your existing business? Let's discuss how we can help you
                            achieve your goals.
                        </motion.p>
                    </div>

                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse" />
                    <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20 animate-pulse" />
                </section>

                {/* Contact Info Cards */}
                <section className="relative py-20 sm:py-32">
                    <div className="absolute inset-0 texture-overlay" />

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all group cursor-pointer"
                                    >
                                        <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-lg mb-2">{item.label}</h3>
                                        <p className="text-foreground/70 mb-4">{item.value}</p>
                                        <button className="text-sm font-semibold text-accent hover:gap-2 flex items-center gap-1 transition-all">
                                            {item.action} →
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-2xl"
                        >
                            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-3">Services of Interest</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {services.map((service) => (
                                            <label key={service} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-border accent-accent"
                                                    checked={formData.services.includes(service)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                services: [...formData.services, service],
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                services: formData.services.filter((s) => s !== service),
                                                            })
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <textarea
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
