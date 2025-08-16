"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Youtube, Image, AtSign } from "lucide-react"

interface ContactSectionProps {
  showHeader?: boolean
  className?: string
}

export default function ContactSection({ showHeader = false, className = "" }: ContactSectionProps) {
  return (
    <section className={`${className}`}>
      {showHeader && (
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-serika-main">
            Let's Create Together
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 max-w-3xl mx-auto text-serika-sub">
            Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
          </p>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
          <Card className="p-6 sm:p-8 rounded-xl bg-serika-sub-alt border border-serika-sub-alt shadow-soft">
            <CardContent className="space-y-4 sm:space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-serika-text">
                Send a Message
              </h3>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                />
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="rounded-lg border-2 border-serika-sub-alt bg-serika-bg focus:border-serika-main text-serika-text transition-colors shadow-soft"
                />
                
                {/* Privacy Agreement Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy-agreement"
                    className="mt-1 h-4 w-4 rounded border-serika-main bg-serika-bg text-serika-main focus:ring-serika-main focus:ring-2 checked:bg-serika-main checked:border-serika-main"
                  />
                  <label htmlFor="privacy-agreement" className="text-xs sm:text-sm text-serika-sub leading-relaxed">
                    <div className="space-y-2">
                      <div className="text-serika-text">
                        I agree to the <a href="/privacy-policy" className="text-serika-main hover:text-serika-main-hover underline">Privacy Policy</a>
                      </div>
                      <div className="text-serika-text">
                        Я согласен с <a href="/privacy-policy" className="text-serika-main hover:text-serika-main-hover underline">Политикой конфиденциальности</a>
                      </div>
                      <div className="text-serika-text">
                        <a href="/privacy-policy" className="text-serika-main hover:text-serika-main-hover underline">개인정보 처리방침</a>에 동의합니다
                      </div>
                    </div>
                  </label>
                </div>
                
                <button className="w-full py-3 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg">
                  Send Message
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-black mb-6 sm:mb-8 text-serika-text">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
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
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
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
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
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
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
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
                  className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group bg-serika-sub-alt hover:bg-serika-sub shadow-soft hover:shadow-soft-lg"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-serika-bg group-hover:bg-serika-main/20 transition-colors shadow-soft">
                    <AtSign className="h-5 w-5 sm:h-6 sm:w-6 text-serika-main" />
                  </div>
                  <div>
                    <p className="font-bold text-serika-text">Threads</p>
                    <p className="text-base sm:text-lg text-serika-sub">Follow my thoughts</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 