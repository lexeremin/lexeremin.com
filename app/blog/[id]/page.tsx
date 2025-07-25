"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Eye, Share2, Calendar, Clock, User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"

export default function BlogPost() {
  const params = useParams()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
  }, [])

  // Mock blog post data - in real app, fetch based on params.id
  const post = {
    id: 1,
    title: "The Art of Golden Hour Photography",
    excerpt:
      "Discover the secrets behind capturing stunning golden hour photographs that tell compelling stories through light and shadow.",
    content: `Golden hour photography is more than just timing—it's about understanding light, emotion, and the stories that unfold when the sun kisses the horizon. This magical time of day, occurring roughly one hour after sunrise and one hour before sunset, offers photographers a unique opportunity to capture images with warm, soft, and directional light.

## Understanding Golden Hour Light

The quality of light during golden hour is fundamentally different from harsh midday sun. The low angle of the sun creates longer shadows, adds dimension to subjects, and bathes everything in a warm, golden glow. This natural filter transforms ordinary scenes into extraordinary moments.

### Key Characteristics:
- **Warm Color Temperature**: The light ranges from 2000K to 3000K, creating those coveted golden tones
- **Soft Shadows**: The diffused light creates gentle, flattering shadows
- **Directional Light**: Side-lighting and backlighting opportunities abound
- **Enhanced Contrast**: The interplay between light and shadow creates natural drama

## Technical Considerations

### Camera Settings
When shooting during golden hour, I typically start with these baseline settings:
- **Aperture**: f/2.8 to f/5.6 for portraits, f/8 to f/11 for landscapes
- **ISO**: Keep as low as possible (100-400) to maintain image quality
- **Shutter Speed**: Adjust based on your subject and desired effect

### Equipment Recommendations
- **Prime Lenses**: 85mm for portraits, 35mm for environmental shots
- **Tripod**: Essential for stability during lower light conditions
- **Reflector**: Helps fill in shadows when needed
- **Lens Hood**: Prevents unwanted flare (unless you want it!)

## Creative Techniques

### Backlighting and Silhouettes
One of my favorite techniques is positioning subjects between the camera and the light source. This creates stunning silhouettes or rim lighting effects that add drama and emotion to portraits.

### Using Natural Reflectors
Look for natural surfaces that can bounce the golden light back onto your subject—sand, water, light-colored walls, or even snow can serve as beautiful, soft reflectors.

### Embracing Lens Flare
While often avoided, controlled lens flare can add a dreamy, ethereal quality to golden hour images. Experiment with different angles to achieve the desired effect.

## Planning Your Golden Hour Shoot

### Apps and Tools
- **PhotoPills**: Calculate exact golden hour times for any location
- **Sun Surveyor**: Visualize the sun's path throughout the day
- **Weather Apps**: Clear skies are crucial for optimal golden hour light

### Location Scouting
Visit your intended location during different times of day to understand how the light will interact with the environment. Consider:
- Direction of the light
- Potential obstacles (buildings, trees)
- Background elements
- Safety and accessibility

## Post-Processing Tips

Golden hour images often benefit from subtle enhancements:
- **Highlight Recovery**: Prevent blown-out skies
- **Shadow Lifting**: Reveal details in darker areas
- **Color Grading**: Enhance the warm tones without overdoing it
- **Graduated Filters**: Balance exposure between sky and foreground

## Common Mistakes to Avoid

1. **Over-saturation**: The natural colors are already beautiful
2. **Ignoring the Background**: Pay attention to what's behind your subject
3. **Not Shooting in RAW**: You'll need the flexibility in post-processing
4. **Waiting Too Long**: Golden hour is brief—be ready!

## Conclusion

Golden hour photography is about more than just beautiful light—it's about capturing emotion, telling stories, and creating images that resonate with viewers. The key is preparation, understanding your equipment, and being ready to work quickly when that perfect light appears.

Remember, every golden hour is unique. Weather conditions, season, and location all influence the quality and character of the light. Embrace these variations and let them guide your creative vision.`,
    category: "Photography",
    readTime: "5 min read",
    date: "2024-01-15",
    author: "Alexander Eremin",
    image: "/placeholder.svg?height=400&width=800",
    likes: 124,
    views: 2340,
    tags: ["Photography", "Golden Hour", "Lighting", "Tutorial", "Landscape"],
    featured: true,
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <article className="pt-32 md:pt-48 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Article Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-serika-main mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-serika-sub mb-6 sm:mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-serika-sub mb-6 sm:mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-serika-sub-alt hover:bg-serika-sub transition-colors shadow-soft">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">Share Article</span>
          </button>
        </header>

        {/* Featured Image */}
        <div className="mb-8 sm:mb-12">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl border-2 border-serika-sub-alt shadow-soft"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8 sm:mb-12">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="font-serif text-2xl sm:text-3xl font-bold text-serika-text mt-8 sm:mt-12 mb-4 sm:mb-6"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              )
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="font-serif text-xl sm:text-2xl font-bold text-serika-text mt-6 sm:mt-8 mb-3 sm:mb-4"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              )
            } else if (paragraph.includes("- **")) {
              // Handle bullet points with bold text
              const items = paragraph.split("\n").filter((item) => item.trim().startsWith("- **"))
              return (
                <ul key={index} className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {items.map((item, itemIndex) => {
                    const cleanItem = item.replace("- **", "").replace("**:", ":")
                    const [title, ...description] = cleanItem.split(": ")
                    return (
                      <li key={itemIndex} className="text-lg sm:text-xl text-serika-sub">
                        <strong className="text-serika-text">{title}:</strong> {description.join(": ")}
                      </li>
                    )
                  })}
                </ul>
              )
            } else if (paragraph.match(/^\d+\./)) {
              // Handle numbered lists
              const items = paragraph.split("\n").filter((item) => item.trim().match(/^\d+\./))
              return (
                <ol key={index} className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 list-decimal list-inside">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg sm:text-xl text-serika-sub">
                      {item.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              )
            } else {
              return (
                <p key={index} className="text-lg sm:text-xl leading-relaxed text-serika-sub mb-4 sm:mb-6">
                  {paragraph.trim()}
                </p>
              )
            }
          })}
        </div>

        {/* Tags */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-serika-main" />
            <span className="font-medium text-serika-text">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-serika-sub-alt text-serika-sub border-2 border-serika-sub-alt hover:border-serika-main transition-colors cursor-pointer text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-6 sm:p-8 rounded-xl bg-serika-main border-2 border-serika-main shadow-soft">
          <CardContent className="p-0 text-center">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">Enjoyed This Article?</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-black/80">
              Let's work together on your next photography project and capture something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-black bg-black text-white hover:bg-transparent hover:text-black transition-all duration-200 shadow-soft">
                  Get In Touch
                </button>
              </Link>
              <Link href="/blog">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all duration-200 shadow-soft">
                  Read More Articles
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}
