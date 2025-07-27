"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Camera, Box, BookOpen, Instagram, Youtube, Twitter, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Portfolio() {
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

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 sm:mb-12 flex items-end justify-end">
              <Image
                src="/images/profile.webp"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover rounded-xl border-2 border-serika-sub-alt shadow-soft"
              />
              <div className="absolute -bottom-2 -right-2 p-2 sm:p-3 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
                <Camera className="h-4 w-4 sm:h-6 sm:w-6 text-serika-main" />
              </div> 
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-serika-main">
                Alexander Eremin
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-serika-sub px-4">
                Visual storyteller capturing moments through photography and bringing imagination to life with 3D
                modeling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 sm:pt-12 px-4">
              <Link href="/projects">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg">
                  <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                  View My Work
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-sub-alt hover:bg-serika-sub text-serika-text shadow-soft hover:shadow-soft-lg">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-16 sm:py-32 bg-serika-sub-alt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-serika-main">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  I'm a passionate visual artist who finds beauty in both the real and imagined worlds. Through my lens,
                  I capture the essence of moments, emotions, and stories that unfold around us every day.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  When I'm not behind the camera, I'm crafting digital worlds and characters through 3D modeling,
                  pushing the boundaries of creativity and bringing concepts to life in stunning detail.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  My work is driven by a desire to tell stories, evoke emotions, and create visual experiences that
                  resonate with viewers long after they've seen them.
                </p>
                <div className="pt-4 text-center">
                  <Link href="/blog">
                    <button className="px-8 py-3 text-base rounded-xl bg-serika-main hover:bg-serika-main-hover text-black transition-all duration-200 shadow-soft hover:shadow-soft-lg">
                      <BookOpen className="mr-2 h-4 w-4 inline" />
                      Read My Blog
                    </button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Card className="p-6 sm:p-8 rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-4">
                      <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-serika-main" />
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-serika-text">Photography</h3>
                        <p className="text-sm sm:text-base text-serika-sub">Portrait, Landscape, Street</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Box className="h-6 w-6 sm:h-8 sm:w-8 text-serika-main" />
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-serika-text">3D Modeling</h3>
                        <p className="text-sm sm:text-base text-serika-sub">Characters, Environments, Products</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-serika-main">
              Let's Create Together
            </h2>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full"></div>
            <p className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 max-w-3xl mx-auto text-serika-sub">
              Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
            </p>
          </div>

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
                    <button className="w-full py-3 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg">
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
                      href="https://github.com/lexeremin"
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
                      href="https://www.instagram.com/lex.eremin/"
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
      </section>

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
