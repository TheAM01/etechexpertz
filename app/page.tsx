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
import DashboardCarousel, { DashboardSlide } from "@/components/DashboardCarousel"

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

	const slides: DashboardSlide[] = [
		{
			id: 1,
			title: "",
			image: "/amazon/amazon1.jpeg",
			description: "",
		},
		{
			id: 2,
			title: "",
			image: "/amazon/amazon2.jpeg",
			description: "",
		},
		{
			id: 3,
			title: "",
			image: "/amazon/amazon3.jpeg",
			description: "",
		},
		{
			id: 4,
			title: "",
			image: "/amazon/amazon4.jpeg",
			description: "",
		},
		{
			id: 5,
			title: "",
			image: "/amazon/amazon5.jpeg",
			description: "",
		},
		{
			id: 6,
			title: "",
			image: "/amazon/amazon6.jpeg",
			description: "",
		},
		{
			id: 7,
			title: "",
			image: "/amazon/amazon7.jpeg",
			description: "",
		},
		{
			id: 8,
			title: "",
			image: "/amazon/amazon8.jpeg",
			description: "",
		},
		{
			id: 9,
			title: "",
			image: "/amazon/amazon9.jpeg",
			description: "",
		},
		{
			id: 10,
			title: "",
			image: "/amazon/amazon10.jpeg",
			description: "",
		},
		{
			id: 11,
			title: "",
			image: "/amazon/amazon11.jpeg",
			description: "",
		},
		{
			id: 12,
			title: "",
			image: "/amazon/amazon12.jpeg",
			description: "",
		},
		{
			id: 13,
			title: "Babar",
			image: "/ebay/ebay-babar.jpeg",
			description: "",
		},
		{
			id: 14,
			title: "Alaister",
			image: "/ebay/ebay-alaister.jpeg",
			description: "",
		},
		{
			id: 15,
			title: "",
			image: "/ebay/ebay.jpeg",
			description: "",
		},
		{
			id: 16,
			title: "",
			image: "/ebay/ebay2.jpeg",
			description: "",
		},
		{
			id: 17,
			title: "",
			image: "/ebay/ebay3.jpeg",
			description: "",
		},
		{
			id: 18,
			title: "",
			image: "/ebay/ebay4.jpeg",
			description: "",
		},
		{
			id: 19,
			title: "",
			image: "/walmart/walmart1.jpeg",
			description: "",
		},
		{
			id: 20,
			title: "",
			image: "/walmart/walmart2.jpeg",
			description: "",
		},
		{
			id: 21,
			title: "",
			image: "/walmart/walmart3.jpeg",
			description: "",
		},
		{
			id: 22,
			title: "",
			image: "/walmart/walmart4.jpeg",
			description: "",
		},
		{
			id: 23,
			title: "",
			image: "/walmart/walmart5.jpeg",
			description: "",
		},
		{
			id: 24,
			title: "",
			image: "/walmart/walmart6.jpeg",
			description: "",
		},
		{
			id: 25,
			title: "",
			image: "/tiktok/tiktok1.jpeg",
			description: "",
		},
		{
			id: 26,
			title: "",
			image: "/tiktok/tiktok2.jpeg",
			description: "",
		},
		{
			id: 27,
			title: "",
			image: "/tiktok/tiktok3.jpeg",
			description: "",
		},
		{
			id: 28,
			title: "",
			image: "/tiktok/tiktok4.jpeg",
			description: "",
		},
	];



	return (
		<div className={isDark ? "dark" : ""}>
			<Navigation themeToggle={toggleTheme} isDark={isDark} />
			<main>
				<Hero />
				<HowWeDoit />
				<WhatsInItForYou />
				<DashboardCarousel slides={slides} />
				<Packages />
				<Testimonials />
				<SuccessStories />
			</main>
			<Footer />
		</div>
	)
}
