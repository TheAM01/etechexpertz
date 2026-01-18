'use client'
import { useState, useEffect } from 'react'

interface MousePosition {
    x: number
    y: number
}

export default function MouseGlow() {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50"
            style={{
                background: `radial-gradient(circle 50px at ${mousePos.x}px ${mousePos.y}px, oklch(0.52 0.19 12.5 / 0.6), transparent)`,
            }}
        />
    )
}