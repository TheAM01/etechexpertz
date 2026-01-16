"use client"

import { useState } from "react"
import { MessageCircle, Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  themeToggle: () => void
  isDark: boolean
}

export default function Navigation({ themeToggle, isDark }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Success Stories", href: "#success" },
    { label: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    { label: "Amazon Wholesale FBA", href: "/services/amazon-wholesale-fba" },
    { label: "Shopify Dropshipping", href: "/services/shopify-dropshipping" },
    { label: "Facebook Marketplace", href: "/services/facebook-marketplace" },
    { label: "Walmart Store Management", href: "/services/walmart-automation" },
    { label: "eBay Store Management", href: "/services/ebay-management" },
    { label: "Virtual Assistants", href: "/services/virtual-assistants" },
    { label: "Account Reinstatement", href: "/services/account-reinstatement" },
    { label: "Private Label", href: "/services/etech-private-label" },
    { label: "TikTok Shop", href: "/services/tiktok-shop" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-foreground">ETech</span>
                <span className="text-accent">Expertz</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute left-0 mt-0 w-56 bg-secondary border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-accent/5 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-border/50 last:border-b-0"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={themeToggle}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-foreground" />}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors flex items-center justify-between"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-1 bg-secondary/30 rounded-lg py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <a
              href="https://wa.me/1234567890"
              className="block mx-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-center text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
