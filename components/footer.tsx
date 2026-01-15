"use client"

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16">
      <div className="absolute inset-0 texture-overlay opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span>ETech</span>
                <span className="text-accent">Expertz</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Transforming e-commerce businesses into profitable powerhouses with strategic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Product Hunting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Marketing Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Account Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Order Fulfillment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a
                href="mailto:info@etechexpertz.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@etechexpertz.com
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
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-primary-foreground/60">© 2026 ETechExpertz. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <Facebook size={20} className="text-primary-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <Twitter size={20} className="text-primary-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <Linkedin size={20} className="text-primary-foreground/60 hover:text-accent" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <Instagram size={20} className="text-primary-foreground/60 hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
