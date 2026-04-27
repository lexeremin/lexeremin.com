import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Youtube, Image, AtSign } from "lucide-react"

interface ContactLinksProps {
  showHeader?: boolean
  className?: string
}

export default function ContactLinks({ showHeader = false, className = "" }: ContactLinksProps) {
  return (
    <section className={className}>
      {showHeader && (
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-serika-main">
            Let&apos;s Create Together
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 max-w-3xl mx-auto text-serika-sub">
            If you want to reach me, the best way is through my public links and social profiles.
          </p>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <Card className="p-6 sm:p-8 rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
          <CardContent className="p-0">
            <h3 className="font-serif text-xl sm:text-2xl font-black mb-6 sm:mb-8 text-serika-text text-center">
              Connect With Me
            </h3>
            <div className="space-y-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-bg hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-serika-sub-alt group-hover:bg-serika-main/20 transition-colors shadow-soft">
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                </div>
                <div>
                  <p className="font-bold text-serika-text">YouTube</p>
                  <p className="text-base sm:text-lg text-serika-sub">Watch my tutorials</p>
                </div>
              </a>
              <a
                href="https://github.com/lexeremin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-bg hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-serika-sub-alt group-hover:bg-serika-main/20 transition-colors shadow-soft">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                </div>
                <div>
                  <p className="font-bold text-serika-text">GitHub</p>
                  <p className="text-base sm:text-lg text-serika-sub">View my repositories</p>
                </div>
              </a>
              <a
                href="https://unsplash.com/@lex_eremin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-bg hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-serika-sub-alt group-hover:bg-serika-main/20 transition-colors shadow-soft">
                  <Image className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                </div>
                <div>
                  <p className="font-bold text-serika-text">Unsplash</p>
                  <p className="text-base sm:text-lg text-serika-sub">View my photography</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/lex.eremin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-bg hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-serika-sub-alt group-hover:bg-serika-main/20 transition-colors shadow-soft">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                </div>
                <div>
                  <p className="font-bold text-serika-text">Instagram</p>
                  <p className="text-base sm:text-lg text-serika-sub">Follow my visual journey</p>
                </div>
              </a>
              <a
                href="https://www.threads.net/@lex.eremin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-bg hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-serika-sub-alt group-hover:bg-serika-main/20 transition-colors shadow-soft">
                  <AtSign className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                </div>
                <div>
                  <p className="font-bold text-serika-text">Threads</p>
                  <p className="text-base sm:text-lg text-serika-sub">Follow my thoughts</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
