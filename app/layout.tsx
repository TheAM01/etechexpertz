import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import GlobalConfetti from "@/components/GlobalConfetti"
import MouseGlow from "@/components/MouseGlow"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OutsourceTechAutomations | Digital Excellence & Business Solutions",
  description:
    "Premium e-commerce and digital solutions. Product hunting, marketing strategy, and business execution for modern enterprises.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    // themeColor: [
    //   { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    //   { media: "(prefers-color-scheme: dark)", color: "#0f0f0d" },
    // ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <GlobalConfetti />
        <MouseGlow/>
        <Analytics />
      </body>
    </html>
  )
}
