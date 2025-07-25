"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Golden Hour Photography",
      excerpt:
        "Discover the secrets behind capturing stunning golden hour photographs that tell compelling stories through light and shadow.",
      category: "Photography",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "3D Modeling Workflow: From Concept to Render",
      excerpt:
        "A comprehensive guide to my 3D modeling process, from initial sketches to final photorealistic renders.",
      category: "3D Modeling",
      readTime: "8 min read",
      date: "2024-01-10",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "Street Photography Ethics and Respect",
      excerpt:
        "Exploring the important considerations when photographing people in public spaces and building genuine connections.",
      category: "Photography",
      readTime: "6 min read",
      date: "2024-01-05",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "Creating Atmospheric 3D Environments",
      excerpt:
        "Learn how to build immersive 3D environments that transport viewers to otherworldly places through lighting and composition.",
      category: "3D Modeling",
      readTime: "10 min read",
      date: "2023-12-28",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 5,
      title: "Portrait Photography: Connecting with Your Subject",
      excerpt:
        "The key to powerful portraits lies not in technical perfection, but in the genuine connection between photographer and subject.",
      category: "Photography",
      readTime: "7 min read",
      date: "2023-12-20",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "The Future of 3D Art in Digital Media",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of 3D art and digital storytelling.",
      category: "3D Modeling",
      readTime: "9 min read",
      date: "2023-12-15",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      {/* Header */}
      <div className="pt-32 md:pt-48 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-serika-main mb-4">
              Creative Journal
            </h1>
            <p className="text-base sm:text-lg text-serika-sub max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my creative journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-serika-text">
              <span className="w-1 h-6 sm:h-8 bg-serika-main mr-4 rounded-full"></span>
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden transition-all duration-300 hover:scale-105 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt hover:border-serika-main cursor-pointer shadow-soft hover:shadow-soft-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="px-2 py-1 rounded-md bg-serika-bg text-serika-sub border-2 border-serika-sub-alt">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-3 sm:space-x-4 text-serika-sub">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold group-hover:text-serika-main transition-colors text-serika-text">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base mb-4 text-serika-sub line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-serika-text group-hover:text-serika-main transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center text-serika-text">
            <span className="w-1 h-6 sm:h-8 bg-serika-main mr-4 rounded-full"></span>
            All Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group overflow-hidden transition-all duration-300 hover:scale-105 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt hover:border-serika-main cursor-pointer shadow-soft hover:shadow-soft-lg">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                      <span className="px-2 py-1 rounded-md bg-serika-bg text-serika-sub border-2 border-serika-sub-alt">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-serika-sub">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold group-hover:text-serika-main transition-colors text-serika-text">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 text-serika-sub line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-serika-sub">{new Date(post.date).toLocaleDateString()}</span>
                      <div className="flex items-center text-serika-text group-hover:text-serika-main transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
