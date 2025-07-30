"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      {/* Header */}
      <div className="pt-40 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">
              Let's Create Together
            </h1>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-serika-sub">
              Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ContactSection showHeader={false} />
      </div>

      <Footer />
    </div>
  )
}
