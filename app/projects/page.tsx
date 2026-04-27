import { Card, CardContent } from "@/components/ui/card"
import { Camera, Box, Code2, ExternalLink, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { projects, type ProjectCategory } from "@/lib/projects"

const filterOptions: { id: "all" | ProjectCategory; label: string; icon: any }[] = [
  { id: "all", label: "All Work", icon: null },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "3d", label: "3D Models", icon: Box },
  { id: "development", label: "Development", icon: Code2 },
]

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) {
  const params = await searchParams
  const rawFilter = params.filter
  const activeFilter =
    rawFilter === "photography" || rawFilter === "3d" || rawFilter === "development" ? rawFilter : "all"

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <div className="pt-32 md:pt-48 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">My Work</h1>
            <p className="text-base sm:text-lg text-serika-sub max-w-2xl mx-auto">
              A collection of my photography, experiments, and development projects
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {filterOptions.map((filterOption) => {
            const Icon = filterOption.icon
            const isActive = activeFilter === filterOption.id
            const href = filterOption.id === "all" ? "/projects" : `/projects?filter=${filterOption.id}`

            return (
              <Link
                key={filterOption.id}
                href={href}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-xl transition-all duration-200 shadow-soft hover:shadow-soft-lg ${
                  isActive
                    ? "bg-serika-main text-black"
                    : "bg-serika-sub-alt hover:bg-serika-sub text-serika-sub hover:text-serika-text"
                }`}
              >
                {Icon && <Icon className="mr-2 h-3 w-3 sm:h-4 sm:w-4 inline" />}
                {filterOption.label}
              </Link>
            )
          })}
        </div>

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
                        {typeof project.likes === "number" && (
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-xs sm:text-sm">{project.likes}</span>
                          </div>
                        )}
                        {typeof project.views === "number" && (
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-xs sm:text-sm">{project.views}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-1.5 sm:p-2 rounded-lg transition-colors bg-serika-sub-alt hover:bg-serika-sub shadow-soft">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
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
      <Footer />
    </div>
  )
}
