"use client"

import { useState } from "react"
import { MessageCircle, Moon, Sun, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
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
    { label: "Done For You", href: "#services" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-b from-background/90 via-background/85 to-background/80 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950/80 border-b border-accent/20 shadow-lg">
      {/* Animated gradient line behind */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight flex flex-col gap-0 leading-6">
                <span className="text-foreground">OutSource</span>
                <span className="text-accent">TechAutomations</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
                <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/60 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,_45,_62,_0.4)] group-hover:shadow-[0_0_12px_rgba(168,_45,_62,_0.6)]" />
              </Link>
            ))}

            <div className="relative group ml-2">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors relative">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                <div className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/60 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,_45,_62,_0.4)] group-hover:shadow-[0_0_12px_rgba(168,_45,_62,_0.6)]" />
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-card/95 dark:bg-slate-900/95 border border-accent/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm overflow-hidden">
                {/* Gradient top border */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <div className="p-2">
                  {serviceLinks.map((service, idx) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="group/item flex items-center justify-between px-4 py-2.5 text-sm text-foreground/70 hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                    >
                      <span>{service.label}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/15 text-accent border border-accent/30 hover:border-accent/50 rounded-lg transition-all duration-300 font-medium text-sm group shadow-[inset_0_0_20px_rgba(168,_45,_62,_0.05)] hover:shadow-[inset_0_0_20px_rgba(168,_45,_62,_0.1),0_0_20px_rgba(168,_45,_62,_0.2)]"
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
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
                className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors flex items-center justify-between"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="pl-2 space-y-1 bg-accent/5 rounded-lg py-2 my-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <a
              href="https://wa.me/1234567890"
              className="block mx-4 px-4 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-lg text-center text-sm font-medium transition-all"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
