"use client"

import { motion } from "framer-motion"

export function NeonTrailing() {
    return (
        <div className="-z-10 absolute inset-0 pointer-events-none overflow-hidden">
            {[
                { delay: 0, top: "25%", duration: 12 },
                { delay: 1.5, top: "50%", duration: 14 },
                { delay: 0.8, top: "75%", duration: 11 },
            ].map((config, index) => (
                <motion.div
                    key={index}
                    animate={{
                        x: [typeof window !== "undefined" ? window.innerWidth : 0, -100],
                    }}
                    transition={{
                        duration: config.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: config.delay,
                    }}
                    className="absolute w-32 h-0.5 opacity-70"
                    style={{
                        top: config.top,
                        background: "linear-gradient(to right, oklch(0.42 0.19 12.5), transparent)",
                        boxShadow: "0 0 30px 3px oklch(0.42 0.19 12.5), 0 0 50px 1px oklch(0.42 0.19 12.5)",
                    }}
                />
            ))}
        </div>
    )
}
