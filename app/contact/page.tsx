"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Instagram, Youtube, Twitter, Terminal } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

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
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            <Card className="p-6 sm:p-8 rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
              <CardContent className="space-y-4 sm:space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-serika-text">
                  Send a Message
                </h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                  />
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                  />
                  <button className="w-full py-3 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main/90 text-black shadow-soft hover:shadow-soft-lg">
                    Send Message
                  </button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8 sm:space-y-12">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-black mb-6 sm:mb-8 text-serika-text">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:alexander@example.com"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                    </div>
                    <div>
                      <p className="font-bold text-serika-text">Email</p>
                      <p className="text-base sm:text-lg text-serika-sub">alexander@example.com</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                      <Github className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                    </div>
                    <div>
                      <p className="font-bold text-serika-text">GitHub</p>
                      <p className="text-base sm:text-lg text-serika-sub">View my repositories</p>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                    </div>
                    <div>
                      <p className="font-bold text-serika-text">Instagram</p>
                      <p className="text-base sm:text-lg text-serika-sub">Follow my visual journey</p>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                      <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                    </div>
                    <div>
                      <p className="font-bold text-serika-text">YouTube</p>
                      <p className="text-base sm:text-lg text-serika-sub">Watch my tutorials</p>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                      <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                    </div>
                    <div>
                      <p className="font-bold text-serika-text">X (Twitter)</p>
                      <p className="text-base sm:text-lg text-serika-sub">Latest updates and thoughts</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-serika-sub-alt bg-serika-sub-alt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1 text-serika-sub">
              <p>&copy; {new Date().getFullYear()} Alexander Eremin. All rights reserved.</p>
            </div>
            {/* Easter Egg Terminal Link */}
            <Link href="/terminal" className="group">
              <div className="p-2 rounded-lg bg-serika-sub-alt/50 hover:bg-serika-sub-alt transition-all duration-200 shadow-soft hover:shadow-soft-lg group-hover:scale-110">
                <Terminal className="h-4 w-4 text-serika-sub group-hover:text-serika-main transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
