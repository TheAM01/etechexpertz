"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Package, TrendingUp, DollarSign, Tag, Truck } from "lucide-react"
import { useState, useEffect } from "react"

interface Particle {
    id: number
    x: number
    y: number
    icon: any
    initialVelocityX: number
    initialVelocityY: number
    rotationSpeed: number
    color: string
    size: number
}

export default function GlobalConfetti() {
    const [particles, setParticles] = useState<Particle[]>([])
    const [particleId, setParticleId] = useState(0)

    const icons = [ShoppingCart, Package, TrendingUp, DollarSign, Tag, Truck]
    const colors = [
        "oklch(0.42 0.19 12.5)",
        "oklch(0.55 0.12 12.5)",
        "oklch(0.35 0.15 12.5)",
        "oklch(0.45 0.14 12.5)",
        "oklch(0.65 0.08 12.5)",
    ]

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, input, textarea, select')) return

            const newParticles: Particle[] = []
            const count = Math.floor(Math.random() * 2) + 4 // 12-20 particles

            for (let i = 0; i < count; i++) {
                const angle = (Math.random() * 140 - 70) * (Math.PI / 180) // -70 to 70 degrees from vertical
                const velocity = Math.random() * 100 + 20

                newParticles.push({
                    id: particleId + i,
                    x: e.clientX,
                    y: e.clientY,
                    icon: icons[Math.floor(Math.random() * icons.length)],
                    initialVelocityX: Math.sin(angle) * velocity,
                    initialVelocityY: -Math.cos(angle) * velocity - 100, // Boost upward
                    rotationSpeed: (Math.random() - 0.5) * 720, // -360 to 360 deg/s
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 10 + 22, // 22-32px
                })
            }

            setParticles((prev) => [...prev, ...newParticles])
            setParticleId((prev) => prev + count)

            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)))
            }, 4000)
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [particleId])

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {particles.map((particle) => {
                    const Icon = particle.icon
                    const gravity = 100 // px/s² - lighter gravity
                    const duration = 2.8

                    // Physics calculations
                    const finalY = particle.y + (particle.initialVelocityY * duration) + (0.5 * gravity * duration * duration)
                    const finalX = particle.x + (particle.initialVelocityX * duration)

                    return (
                        <motion.div
                            key={particle.id}
                            initial={{
                                x: particle.x,
                                y: particle.y,
                                opacity: 1,
                                scale: 0,
                                rotate: 0,
                            }}
                            animate={{
                                x: finalX,
                                y: finalY,
                                opacity: [1, 1, 1, 0.7, 0],
                                scale: [0, 1.2, 1, 1, 0.9],
                                rotate: particle.rotationSpeed * duration,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                x: { duration, ease: "linear" },
                                y: { duration, ease: [0.22, 1, 0.36, 1] }, // Gravity curve
                                rotate: { duration, ease: "linear" },
                                opacity: { duration, times: [0, 0.1, 0.7, 0.9, 1] },
                                scale: { duration: 0.3, times: [0, 0.5, 1] },
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                        >
                            <Icon
                                size={particle.size}
                                strokeWidth={2.5}
                                style={{
                                    color: particle.color,
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                                }}
                            />
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}