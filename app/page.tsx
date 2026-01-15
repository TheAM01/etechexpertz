"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowWeDoit from "@/components/how-we-do-it"
import WhatsInItForYou from "@/components/whats-in-it"
import Packages from "@/components/packages"
import Testimonials from "@/components/testimonials"
import SuccessStories from "@/components/success-stories"
import Footer from "@/components/footer"

export default function Home() {
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

  return (
    <div className={isDark ? "dark" : ""}>
      <Navigation themeToggle={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <HowWeDoit />
        <WhatsInItForYou />
        <Packages />
        <Testimonials />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}
