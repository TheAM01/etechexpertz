'use client'
import { useState, useEffect } from 'react'

interface MousePosition {
    x: number
    y: number
}

export default function MouseGlow() {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)
    const [isMoving, setIsMoving] = useState<boolean>(false)
    const [isDark, setIsDark] = useState<boolean>(true)

    useEffect(() => {
        // Detect dark mode
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(prefersDark)

        // Listen for changes to dark mode
        const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleDarkModeChange = (e: MediaQueryListEvent) => {
            setIsDark(e.matches)
        }
        
        darkModeQuery.addEventListener('change', handleDarkModeChange)

        // Also check for manual dark mode class changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'))
                }
            })
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => {
            darkModeQuery.removeEventListener('change', handleDarkModeChange)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        // Detect if device is touch-enabled
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
        }

        checkTouchDevice()

        if (isTouchDevice) return

        let timeoutId: NodeJS.Timeout

        const handleMouseMove = (e: MouseEvent): void => {
            setMousePos({ x: e.clientX, y: e.clientY })
            setIsMoving(true)

            // Clear existing timeout
            clearTimeout(timeoutId)

            // Set new timeout to fade out after cursor stops
            timeoutId = setTimeout(() => {
                setIsMoving(false)
            }, 1200) // Fade out after 150ms of no movement
        }

        window.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(timeoutId)
        }
    }, [isTouchDevice])

    // Don't render on touch devices
    if (isTouchDevice) return null

    // Different glow settings for dark and light mode
    const glowColor = isDark 
        ? 'oklch(0.52 0.19 12.5 / 0.6)' // Original dark mode color
        : 'oklch(0.6647 0.2689 12.5 / 60%)'   // Brighter, warmer color for light mode

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-1200 ease-out"
            style={{
                background: `radial-gradient(circle 40px at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent)`,
                opacity: isMoving ? 1 : 0,
            }}
        />
    )
}