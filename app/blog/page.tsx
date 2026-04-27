import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const posts = [
  {
    id: "how-to-learn-korean-in-2024",
    title: "How to Learn Korean in 2024",
    excerpt:
      "A practical guide to learning Korean with immersion, Anki, grammar resources, and a setup that stays realistic over the long run.",
    category: "Languages",
    readTime: "18 min read",
    date: "2024-02-29",
    image: "/images/blog-korean-2024.webp",
  },
]

export default function Blog() {
  const post = posts[0]

  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      <div className="pt-32 md:pt-48 bg-serika-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">Blog</h1>
            <p className="text-base sm:text-lg text-serika-sub max-w-2xl mx-auto">
              Notes, experiments, and things I found worth writing down.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link href={`/blog/${post.id}`}>
          <Card className="group overflow-hidden rounded-xl bg-serika-sub-alt border border-serika-sub-alt cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-200">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[240px] sm:min-h-[320px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 text-sm text-serika-sub mb-4">
                  <span className="px-2 py-1 rounded-md bg-serika-bg text-serika-sub">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-black text-serika-text mb-4 group-hover:text-serika-main transition-colors">
                  {post.title}
                </h2>

                <p className="text-base sm:text-lg text-serika-sub leading-relaxed mb-6">{post.excerpt}</p>

                <div className="inline-flex items-center text-serika-text group-hover:text-serika-main transition-colors font-bold">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
