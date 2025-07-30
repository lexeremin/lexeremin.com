"use client"

import { useState, useEffect } from "react"
import { Camera, Box, BookOpen, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

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
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-sub-alt hover:bg-serika-sub text-serika-text shadow-soft hover:shadow-soft-lg">
                  Get In Touch
                </button>
              </Link>
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
          <ContactSection showHeader={true} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
