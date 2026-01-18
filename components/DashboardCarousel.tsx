'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface DashboardSlide {
    id: number
    title: string
    image: string
    description: string
}

export default function DashboardCarousel({slides}: {slides: DashboardSlide[]}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(true)


    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay, slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setAutoplay(false)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
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
                                {slides[currentSlide].title}
                            </div>

                            <div className="w-12" />
                        </div>

                        {/* Screen Content */}
                        <div className="relative bg-white dark:bg-slate-950 rounded-b-2xl overflow-hidden aspect-video">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={slides[currentSlide].image || "/placeholder.svg"}
                                        alt={slides[currentSlide].title}
                                        className="w-full h-full object-contain "
                                    />
                                    {/* Overlay gradient for content visibility */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Laptop Base/Stand */}
                    <div className="relative">
                        {/* Stand */}
                        <div className="flex justify-center">
                            <div className="w-24 h-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-lg shadow-lg" />
                        </div>

                        {/* Bottom shadow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-black/20 blur-2xl rounded-full" />
                    </div>
                </div>

                {/* Controls and Info */}
                <div className="w-full flex flex-col items-center gap-6">
                    {/* Description */}
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-foreground/70 text-sm md:text-base">
                            {slides[currentSlide].description}
                        </p>
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
                            {slides.map((_, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentSlide(idx)
                                        setAutoplay(false)
                                    }}
                                    className={`rounded-full transition-all duration-300 ${idx === currentSlide
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
                        {currentSlide + 1} / {slides.length}
                    </div>

                    {/* Autoplay Toggle */}
                    <button
                        onClick={() => setAutoplay(!autoplay)}
                        className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${autoplay
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
