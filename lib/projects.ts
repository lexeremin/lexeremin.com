export type ProjectCategory = "photography" | "3d" | "development"

export type Project = {
  id: string
  title: string
  category: ProjectCategory
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
    type: "Personal",
    description:
      "A curated public selection of my photography on Unsplash, with more than 2M views, 10k downloads, and top 10% contributor status.",
    fullDescription: [
      "This project is a simple home for the photography I choose to publish on Unsplash. It is not a complete archive of everything I shoot, but a curated public slice of the work I want to share openly.",
      "So far the work has passed 2M views and 10k downloads on Unsplash, which places me in the platform's top 10% of contributors. I care less about chasing volume for its own sake and more about building a body of work that feels calm, intentional, and worth returning to.",
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
    equipment: ["2M+ views", "10k+ downloads", "Top 10% contributor on Unsplash", "Ongoing project"],
    location: "Unsplash",
    externalUrl: "https://unsplash.com/@lex_eremin",
    externalLabel: "View on Unsplash",
  },
  {
    id: "reactive-doom",
    title: "Reactive Doom",
    category: "development",
    type: "Hobby",
    description:
      "A compact Doom-like retro FPS built with React, Vite, TypeScript, and a custom canvas raycasting engine.",
    fullDescription: [
      "Reactive Doom is a browser-based first person shooter prototype with a deliberately lightweight technical approach. Instead of leaning on a heavy 3D engine, it uses a custom raycasting renderer to get that retro FPS feel directly in the browser.",
      "The project currently includes first-person movement, mouse look with pointer lock, shooting, simple enemies, and a minimal HUD for health, ammo, and kills. The point is not visual excess but tight feel, clear interaction, and a compact nostalgic presentation.",
      "I built it as an experiment in making something playful, technical, and fast to iterate on. It is still a prototype, but it already shows the direction clearly.",
    ],
    image: "/images/reactive-doom-screenshot.webp",
    images: ["/images/reactive-doom-screenshot.webp"],
    date: "2026-04-27",
    tags: ["React", "TypeScript", "Vite", "Raycasting", "Game Dev"],
    equipment: ["React 19", "TypeScript", "Vite", "Custom canvas raycasting engine"],
    location: "Browser",
    externalUrl: "https://reactive-doom.vercel.app/",
    externalLabel: "Play the game",
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
