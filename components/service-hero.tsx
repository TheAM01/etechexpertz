"use client"

import { motion } from "framer-motion"

interface ServiceHeroProps {
    title: string
    subtitle: string
    description: string
}

export default function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 overflow-hidden">
            <div className="absolute inset-0 texture-cartographer" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent font-semibold mb-4 text-lg"
                >
                    {subtitle}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all"
                >
                    Get Started Now
                </motion.button>
            </div>

            <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20 animate-pulse" />
        </section>
    )
}
