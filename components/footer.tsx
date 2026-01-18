"use client"

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, TicketIcon as Tiktok } from "lucide-react"
import Link from "next/link"

export default function Footer() {
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
    <footer className="relative bg-card/50 dark:bg-black/50 border-t border-border backdrop-blur-sm py-16 texom">
      <div className="absolute inset-0 texture-graphy opacity-5 dark:opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/">
                <span className="text-2xl font-bold flex flex-col leading-6">
                  <span>OutSource</span>
                  <span className="text-accent">TechAutomations</span>
                </span>
              </Link>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transforming e-commerce businesses into profitable powerhouses with strategic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-foreground/70 dark:text-foreground/60">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Done For You
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-foreground/70 dark:text-foreground/60">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm text-foreground/70 dark:text-foreground/60">
              <a
                href="mailto:contact@outsourcetechautomations.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                contact@outsourcetechautomations.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/60 dark:text-foreground/50">© 2026 OutsourceTechAutomations. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Facebook size={20} className="text-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Twitter size={20} className="text-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Linkedin size={20} className="text-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Instagram size={20} className="text-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Tiktok size={20} className="text-foreground/60 hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
