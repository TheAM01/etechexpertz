'use client'

import { useState, useEffect, useMemo, JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Grid3x3 } from 'lucide-react'

export interface DashboardSlide {
    id: number
    title: string
    image: string
    description: string
}

interface Platform {
    name: string
    icon: string
    color: string
}

export default function DashboardCarousel({slides}: {slides: DashboardSlide[]}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

    // Detect platforms from image paths
    const platforms = useMemo(() => {
        const platformMap = new Map<string, Platform>()
        
        slides.forEach(slide => {
            const match = slide.image.match(/\/([^\/]+)\//)
            if (match) {
                const platformName = match[1].toLowerCase()
                if (!platformMap.has(platformName)) {
                    platformMap.set(platformName, {
                        name: platformName,
                        icon: `/${platformName}/icon.png`, // You can customize this
                        color: getPlatformColor(platformName)
                    })
                }
            }
        })
        
        return Array.from(platformMap.values())
    }, [slides])

    // Filter slides based on selected platform
    const filteredSlides = useMemo(() => {
        if (!selectedPlatform) return slides
        
        return slides.filter(slide => {
            const match = slide.image.match(/\/([^\/]+)\//)
            return match && match[1].toLowerCase() === selectedPlatform
        })
    }, [slides, selectedPlatform])

    // Reset to first slide when platform changes
    useEffect(() => {
        setCurrentSlide(0)
    }, [selectedPlatform])

    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % filteredSlides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay, filteredSlides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % filteredSlides.length)
        setAutoplay(false)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)
        setAutoplay(false)
    }

    const handlePlatformClick = (platformName: string) => {
        if (selectedPlatform === platformName) {
            setSelectedPlatform(null) // Deselect to show all
        } else {
            setSelectedPlatform(platformName)
        }
        setAutoplay(false)
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col items-center gap-8">
                {/* Laptop Container */}
                <div className="w-full perspective">
                    {/* Laptop Frame */}
                    <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950 rounded-t-3xl shadow-2xl p-3 border border-slate-700">
                        {/* Top Bar with macOS Controls */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-slate-800 to-slate-900 rounded-t-2xl px-4 py-3 mb-2">
                            <div className="flex items-center gap-2.5">
                                {/* Red Circle */}
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors shadow-lg" />
                                {/* Yellow Circle */}
                                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors shadow-lg" />
                                {/* Green Circle */}
                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors shadow-lg" />
                            </div>

                            <div className="text-xs font-semibold text-slate-400 tracking-wide">
                                {filteredSlides[currentSlide]?.title || 'Dashboard'}
                            </div>

                            <div className="w-12" />
                        </div>

                        {/* Screen Content */}
                        <div className="relative bg-white dark:bg-slate-950 rounded-b-2xl overflow-hidden aspect-video">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${selectedPlatform}-${currentSlide}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={filteredSlides[currentSlide]?.image || "/placeholder.svg"}
                                        alt={filteredSlides[currentSlide]?.title || 'Slide'}
                                        className="w-full h-full object-contain"
                                    />
                                    {/* Overlay gradient for content visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Platform Taskbar - Windows Style */}
                            {platforms.length > 1 && (
                                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-slate-700/60">
                                    <div className="flex items-center justify-center gap-1 px-4 py-2">
                                        {/* All Platforms Button */}
                                        <motion.button
                                            onClick={() => {
                                                setSelectedPlatform(null)
                                                setAutoplay(false)
                                            }}
                                            className={`relative p-2 rounded-md transition-all duration-200 group ${
                                                selectedPlatform === null
                                                    ? 'bg-slate-700/60'
                                                    : 'hover:bg-slate-800/60'
                                            }`}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="All Platforms"
                                        >
                                            <Grid3x3 size={24} className="text-white" />
                                            {/* Active indicator */}
                                            {selectedPlatform === null && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-full"
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </motion.button>

                                        {/* Separator */}
                                        <div className="w-px h-6 bg-slate-700/50 mx-1" />

                                        {/* Platform Icon Buttons */}
                                        {platforms.map((platform) => (
                                            <motion.button
                                                key={platform.name}
                                                onClick={() => handlePlatformClick(platform.name)}
                                                className={`relative p-2 rounded-md transition-all duration-200 group ${
                                                    selectedPlatform === platform.name
                                                        ? 'bg-slate-700/60'
                                                        : 'hover:bg-slate-800/60'
                                                }`}
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                title={platform.name.charAt(0).toUpperCase() + platform.name.slice(1)}
                                            >
                                                {getPlatformIcon(platform.name)}
                                                
                                                {/* Active indicator */}
                                                {selectedPlatform === platform.name && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                                                        style={{ backgroundColor: platform.color }}
                                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Laptop Base/Stand */}
                    <div className="relative">
                        {/* Stand */}
                        <div className="flex justify-center">
                            <div className="w-24 h-7 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700  shadow-lg" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-124 h-4 bg-black rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-sm" />
                        </div>

                        {/* Bottom shadow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-black/20 blur-2xl rounded-full " />
                    </div>
                </div>

                {/* Controls and Info */}
                <div className="w-full flex flex-col items-center gap-6">
                    {/* Description */}
                    <motion.div
                        key={`desc-${selectedPlatform}-${currentSlide}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-foreground/70 text-sm md:text-base">
                            {filteredSlides[currentSlide]?.description || ''}
                        </p>
                        {selectedPlatform && (
                            <p className="text-xs text-foreground/50 mt-2">
                                Showing {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} slides only
                            </p>
                        )}
                    </motion.div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-foreground/60 group-hover:text-accent group-hover:scale-110 transition-all"
                            />
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex items-center gap-2">
                            {filteredSlides.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentSlide(idx)
                                        setAutoplay(false)
                                    }}
                                    className={`rounded-full transition-all duration-300 ${
                                        idx === currentSlide
                                            ? 'bg-accent w-8 h-2'
                                            : 'bg-border w-2 h-2 hover:bg-accent/50'
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                            aria-label="Next slide"
                        >
                            <ChevronRight
                                size={20}
                                className="text-foreground/60 group-hover:text-accent group-hover:scale-110 transition-all"
                            />
                        </button>
                    </div>

                    {/* Slide Counter */}
                    <div className="text-xs text-foreground/50 font-medium">
                        {currentSlide + 1} / {filteredSlides.length}
                    </div>

                    {/* Autoplay Toggle */}
                    <button
                        onClick={() => setAutoplay(!autoplay)}
                        className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${
                            autoplay
                                ? 'bg-accent/10 border-accent/50 text-accent'
                                : 'bg-border/50 border-border text-foreground/60'
                        }`}
                    >
                        {autoplay ? 'Auto-playing' : 'Paused'}
                    </button>
                </div>
            </div>
        </div>
    )
}

// Helper function to get platform colors
function getPlatformColor(platformName: string): string {
    const colors: Record<string, string> = {
        amazon: '#FF9900',
        ebay: '#E53238',
        walmart: '#0071CE',
        facebook: '#1877F2',
        google: '#4285F4',
        apple: '#000000',
        microsoft: '#00A4EF',
        // Add more platforms as needed
    }
    
    return colors[platformName.toLowerCase()] || '#6366F1' // Default to indigo
}

// Helper function to render platform icons using actual logo images
function getPlatformIcon(platformName: string): JSX.Element {
    const name = platformName.toLowerCase()
    
    return (
        <img 
            src={`/${name}.png`} 
            alt={`${platformName} logo`}
            className="w-10 h-10 object-contain rounded-md bg-white/19"
            onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                    const fallback = document.createElement('div')
                    fallback.className = 'w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'
                    fallback.innerHTML = `<span class="text-white text-xs font-bold">${platformName.charAt(0).toUpperCase()}</span>`
                    parent.appendChild(fallback)
                }
            }}
        />
    )
}