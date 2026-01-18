'use client'
import { useState, useEffect } from 'react'

interface MousePosition {
    x: number
    y: number
}

export default function MouseGlow() {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)

    useEffect(() => {
        // Detect if device is touch-enabled
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
        }

        checkTouchDevice()

        if (isTouchDevice) return

        const handleMouseMove = (e: MouseEvent): void => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [isTouchDevice])

    // Don't render on touch devices
    if (isTouchDevice) return null



    
    return (
        <div
            className="pointer-events-none fixed inset-0 z-50"
            style={{
                background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, oklch(0.52 0.19 12.5 / 0.6), transparent)`,
            }}
        />
    )
}