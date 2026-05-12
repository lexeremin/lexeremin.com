"use client"

import { Camera, Cpu, BookOpen, Terminal, Server } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import ContactLinks from "@/components/contact-links"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
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
                Aleksandr Eremin
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-serika-sub px-4">
                Polymath builder working across photography, machine learning, full-stack web development, and agentic
                systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 sm:pt-12 px-4">
              <Link href="/projects">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg">
                  <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
                  View Projects
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-sub-alt hover:bg-serika-sub text-serika-text shadow-soft hover:shadow-soft-lg">
                  Contact Me
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
              About
            </h2>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  I&apos;m a polymath, a generalist by temperament, and I prefer building breadth first, then going deep
                  where it matters. I usually communicate in English and I&apos;m always ready to learn something new.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  I earned a Master&apos;s degree in Computer Engineering and Informatics from BMSTU in 2022. Around that
                  same period, I completed machine learning coursework, finished a thesis on hyperparameter
                  optimization of RNNs and CNNs with genetic algorithms, and started publishing photography that later
                  crossed 2M views on Unsplash.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-serika-sub">
                  In 2026, my focus is agentic workflows on homelab infrastructure, full-stack product development with
                  TanStack Start, PostgreSQL, Drizzle, Tailwind, and shadcn/ui, plus practical DevOps with Linux,
                  Docker, tmux, bash, and Caddy.
                </p>
                <div className="pt-4 text-center">
                  <Link href="/blog">
                    <button className="px-8 py-3 text-base rounded-xl bg-serika-main hover:bg-serika-main-hover text-black transition-all duration-200 shadow-soft hover:shadow-soft-lg">
                      <BookOpen className="mr-2 h-4 w-4 inline" />
                      Read Notes
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
                        <p className="text-sm sm:text-base text-serika-sub">2M+ Unsplash views, top 10% contributor</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-serika-main" />
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-serika-text">Machine Learning</h3>
                        <p className="text-sm sm:text-base text-serika-sub">DeepLearning.AI, TensorFlow, GA-based thesis work</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-serika-main" />
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-serika-text">Product Engineering</h3>
                        <p className="text-sm sm:text-base text-serika-sub">TanStack Start, PostgreSQL, Drizzle, Tailwind, shadcn/ui</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Server className="h-6 w-6 sm:h-8 sm:w-8 text-serika-main" />
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-black text-serika-text">Systems & Homelab</h3>
                        <p className="text-sm sm:text-base text-serika-sub">Linux, Docker, tmux, Caddy, OpenClaw and agent workflows</p>
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
          <ContactLinks showHeader={true} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
