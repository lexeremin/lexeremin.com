"use client"

import { useState } from "react"
import { notFound, useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Eye, ExternalLink, Calendar, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ImagePreviewer from "@/components/image-previewer"
import { getProjectById } from "@/lib/projects"

export default function ProjectDetail() {
  const params = useParams<{ id: string }>()
  const [previewerOpen, setPreviewerOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const allImages = [project.image, ...project.images.filter((image) => image !== project.image)]

  const openPreviewer = (index: number) => {
    setCurrentImageIndex(index)
    setPreviewerOpen(true)
  }

  const closePreviewer = () => {
    setPreviewerOpen(false)
  }

  const navigateImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <div className="pt-32 md:pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-serika-sub max-w-3xl">{project.description}</p>
            </div>
            <div className="flex items-center space-x-4 sm:flex-col sm:items-end sm:space-x-0 sm:space-y-2">
              <div className="flex items-center space-x-4 text-serika-sub">
                {typeof project.likes === "number" && (
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">{project.likes}</span>
                  </div>
                )}
                {typeof project.views === "number" && (
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">{project.views}</span>
                  </div>
                )}
              </div>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-serika-main text-black hover:opacity-90 transition-opacity shadow-soft"
                >
                  <ExternalLink className="h-4 w-4" />
                  {project.externalLabel || "Open project"}
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-serika-main" />
                  <span className="text-sm font-bold text-serika-text">Date</span>
                </div>
                <p className="text-sm text-serika-sub">{new Date(project.date).toLocaleDateString()}</p>
              </CardContent>
            </Card>
            <Card className="p-4 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Camera className="h-4 w-4 text-serika-main" />
                  <span className="text-sm font-bold text-serika-text">Category</span>
                </div>
                <p className="text-sm text-serika-sub capitalize">{project.category}</p>
              </CardContent>
            </Card>
            <Card className="p-4 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="h-4 w-4 text-serika-main" />
                  <span className="text-sm font-bold text-serika-text">Location</span>
                </div>
                <p className="text-sm text-serika-sub">{project.location}</p>
              </CardContent>
            </Card>
            <Card className="p-4 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="h-4 w-4 text-serika-main" />
                  <span className="text-sm font-bold text-serika-text">Project Type</span>
                </div>
                <p className="text-sm text-serika-sub">{project.type}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <button onClick={() => openPreviewer(0)} className="w-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-64 sm:h-96 lg:h-[500px] object-cover rounded-xl border-2 border-serika-sub-alt hover:border-serika-main transition-colors cursor-pointer shadow-soft hover:shadow-soft-lg"
            />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-serika-text">
                About This Project
              </h2>
              <div className="prose prose-lg max-w-none">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-lg sm:text-xl leading-relaxed text-serika-sub mb-4 sm:mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-serika-text">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {allImages.map((image, index) => (
                  <button key={`${project.id}-${index}`} onClick={() => openPreviewer(index)} className="w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-64 object-cover rounded-xl border-2 border-serika-sub-alt hover:border-serika-main transition-colors cursor-pointer shadow-soft hover:shadow-soft-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
              <CardContent className="p-0">
                <h3 className="font-serif text-lg sm:text-xl font-black mb-4 text-serika-text">Tags</h3>
                <div className="flex flex-wrap gap-2">
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

            {project.equipment && project.equipment.length > 0 && (
              <Card className="p-4 sm:p-6 rounded-xl bg-serika-sub-alt border-2 border-serika-sub-alt shadow-soft">
                <CardContent className="p-0">
                  <h3 className="font-serif text-lg sm:text-xl font-black mb-4 text-serika-text">Notes</h3>
                  <ul className="space-y-2">
                    {project.equipment.map((item, index) => (
                      <li key={index} className="text-sm sm:text-base text-serika-sub flex items-center">
                        <span className="w-2 h-2 bg-serika-main rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card className="p-4 sm:p-6 rounded-xl bg-serika-main border-2 border-serika-main shadow-soft">
              <CardContent className="p-0 text-center">
                <h3 className="font-serif text-lg sm:text-xl font-black mb-3 text-black">Want to see more?</h3>
                <p className="text-sm sm:text-base mb-4 text-black/80">
                  Browse the rest of my work or jump straight to the original project page.
                </p>
                <div className="space-y-3">
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-2 sm:py-3 rounded-xl border-2 border-black bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200 shadow-soft"
                    >
                      {project.externalLabel || "Open project"}
                    </a>
                  )}
                  <Link href="/projects">
                    <button className="w-full py-2 sm:py-3 rounded-xl border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 shadow-soft">
                      Back to projects
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ImagePreviewer
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={previewerOpen}
        onClose={closePreviewer}
        onNavigate={navigateImage}
        projectTitle={project.title}
      />
      <Footer />
    </div>
  )
}
