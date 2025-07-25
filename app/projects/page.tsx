"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Box, ExternalLink, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Urban Portraits",
      category: "photography",
      type: "Portrait Photography",
      description: "A series capturing the essence of city life through intimate portraits of urban dwellers.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 124,
      views: 2340,
      tags: ["Portrait", "Urban", "Street Photography"],
    },
    {
      id: 2,
      title: "Mystic Forest",
      category: "3d",
      type: "3D Environment",
      description: "An enchanted forest scene with mystical lighting and atmospheric effects.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 89,
      views: 1560,
      tags: ["Environment", "Fantasy", "Lighting"],
    },
    {
      id: 3,
      title: "Golden Hour Landscapes",
      category: "photography",
      type: "Landscape Photography",
      description: "Breathtaking landscapes captured during the magical golden hour.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 203,
      views: 3420,
      tags: ["Landscape", "Golden Hour", "Nature"],
    },
    {
      id: 4,
      title: "Futuristic Character",
      category: "3d",
      type: "3D Character",
      description: "A cyberpunk-inspired character design with detailed texturing and rigging.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 156,
      views: 2180,
      tags: ["Character", "Cyberpunk", "Sci-Fi"],
    },
    {
      id: 5,
      title: "Architectural Details",
      category: "photography",
      type: "Architecture Photography",
      description: "Exploring the beauty in architectural details and geometric patterns.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 78,
      views: 1290,
      tags: ["Architecture", "Details", "Geometry"],
    },
    {
      id: 6,
      title: "Product Visualization",
      category: "3d",
      type: "3D Product",
      description: "High-quality product renders for commercial use with realistic materials.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 92,
      views: 1670,
      tags: ["Product", "Commercial", "Rendering"],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      {/* Header */}
      <div className="pt-32 md:pt-48 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">My Work</h1>
            <p className="text-base sm:text-lg text-serika-sub max-w-2xl mx-auto">
              A collection of my photography and 3D modeling projects
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {[
            { id: "all", label: "All Work", icon: null },
            { id: "photography", label: "Photography", icon: Camera },
            { id: "3d", label: "3D Models", icon: Box },
          ].map((filterOption) => {
            const Icon = filterOption.icon
            return (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-xl transition-all duration-200 shadow-soft hover:shadow-soft-lg ${
                  filter === filterOption.id
                    ? "bg-serika-main text-black"
                    : "bg-serika-sub-alt hover:bg-serika-sub text-serika-sub hover:text-serika-text"
                }`}
              >
                {Icon && <Icon className="mr-2 h-3 w-3 sm:h-4 sm:w-4 inline" />}
                {filterOption.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="group overflow-hidden transition-all duration-300 hover:scale-105 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt hover:border-serika-main cursor-pointer shadow-soft hover:shadow-soft-lg">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-serika-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between text-serika-text">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">{project.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-xs sm:text-sm">{project.views}</span>
                        </div>
                      </div>
                      <button className="p-1.5 sm:p-2 rounded-lg transition-colors bg-serika-sub-alt hover:bg-serika-sub shadow-soft">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl font-black mb-2 text-serika-text">{project.title}</h3>
                  <p className="text-sm sm:text-base mb-4 text-serika-sub line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-serika-bg text-serika-sub border-2 border-serika-sub-alt"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
