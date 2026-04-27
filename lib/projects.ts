export type Project = {
  id: string
  title: string
  category: "photography" | "3d"
  type: string
  description: string
  fullDescription: string[]
  image: string
  images: string[]
  likes?: number
  views?: number
  date: string
  tags: string[]
  equipment?: string[]
  location: string
  externalUrl?: string
  externalLabel?: string
}

export const projects: Project[] = [
  {
    id: "unsplash",
    title: "Unsplash Photography",
    category: "photography",
    type: "Photography",
    description:
      "A small published selection of my photography on Unsplash, focused on atmosphere, quiet places, light, and observation.",
    fullDescription: [
      "This project is a simple home for the photography I choose to publish on Unsplash. It is not a complete archive of everything I shoot, but a curated public slice of the work I want to share openly.",
      "The images here lean toward atmosphere over spectacle. I like quiet scenes, strong geometry, natural light, and moments that feel a little suspended in time. Some frames come from ordinary places, but that is part of the point. I want them to feel observed rather than manufactured.",
      "If you want to browse more, the full published selection lives on my Unsplash profile.",
    ],
    image: "/images/unsplash/photo-1.webp",
    images: [
      "/images/unsplash/photo-1.webp",
      "/images/unsplash/photo-2.webp",
      "/images/unsplash/photo-3.webp",
      "/images/unsplash/photo-4.webp",
    ],
    date: "2026-04-27",
    tags: ["Unsplash", "Photography", "Atmosphere", "Architecture", "Night"],
    equipment: ["Curated public selection", "Published on Unsplash", "Ongoing project"],
    location: "Unsplash",
    externalUrl: "https://unsplash.com/@lex_eremin",
    externalLabel: "View on Unsplash",
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
