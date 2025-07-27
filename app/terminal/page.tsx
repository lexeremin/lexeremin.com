"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState("")

  const terminalLines = [
    "$ whoami",
    "alexander-eremin",
    "",
    "$ cat about.txt",
    "Visual Artist | Photographer | 3D Modeling Specialist",
    "Capturing moments through photography and bringing imagination to life",
    "",
    "$ ls -la projects/",
    "drwxr-xr-x  8 alexander  staff   256 Dec 15 10:30 .",
    "drwxr-xr-x  5 alexander  staff   160 Dec 15 10:30 ..",
    "-rw-r--r--  1 alexander  staff  2048 Dec 15 10:30 urban-portraits",
    "-rw-r--r--  1 alexander  staff  1536 Dec 15 10:30 golden-hour-landscapes",
    "-rw-r--r--  1 alexander  staff  1024 Dec 15 10:30 mystic-forest-3d",
    "-rw-r--r--  1 alexander  staff   768 Dec 15 10:30 futuristic-character",
    "-rw-r--r--  1 alexander  staff   512 Dec 15 10:30 architectural-details",
    "",
    "$ lsgear",
    "💻 Laptops:",
    "  • MacBook Pro 14-inch M1 Max - 2021",
    "  • ThinkPad x230 - BIOS mod, 16GB RAM, running Arch Linux btw",
    "",
    "⌨️ Keyboards:",
    "  • HHKB Professional Hybrid ❄️ - Blank keycaps",
    "  • SingaKBD Unikorn - cherry HG Black, GMK Purple Nights",
    "",
    "📷 Camera Bodies:",
    "  • Sony A7IV - Primary mirrorless body",
    "",
    "🔍 Lenses:",
    "  • Tamron 28-75mm f/2.8 - Versatile zoom",
    "  • Viltrox 40mm f/2.5 - Street and daily life photography",
    "",
    "$ cat important.txt",
    "...",
    "Science and Art are pure...",
    "Ideologies are evil...",
    "         .-\"|\"-.",
    "       .'   |   `.",
    "      .'    |    `.",
    "      |     |     |",
    "      |    /|\\    |",
    "      `.  / | \\  .'",
    "       `./  |  \\.'",
    "         `-.|.-'",
    "__ __   ___  __ _  ___ ___",
    "| '_ \\ / _ \\/ _` |/ __/ _ \\",
    "| |_) |  __/ (_| | (_|  __/",
    "| .__/ \\___|\\__,_|\\___\\___|",
    "|_|",
    "",
    "$ █",
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + terminalLines[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine, terminalLines])

  return (
    <div
      className="min-h-screen bg-serika-sub-alt text-serika-main font-mono p-4"
      style={{ backgroundColor: "var(--serika-sub-alt)", color: "var(--serika-main)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-6 shadow-2xl" style={{ backgroundColor: "var(--serika-bg)" }}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-serika-sub text-sm ml-4">alexander@portfolio:~</span>
          </div>

          <pre
            className="whitespace-pre-wrap text-sm leading-relaxed min-h-96 text-serika-text"
            style={{ color: "var(--serika-text)" }}
          >
            {displayText}
          </pre>

          {currentLine >= terminalLines.length && (
            <div className="mt-8 space-y-4">
              <div className="text-serika-main">
                $ # Ready to collaborate? Let's create something extraordinary together!
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
                <Link href="/">
                  <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-sub-alt hover:bg-serika-sub text-serika-text shadow-soft hover:shadow-soft-lg flex items-center justify-center">
                    {/* You can add a Home icon here if desired */}
                    Back to Portfolio
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg flex items-center justify-center">
                    {/* You can add a Camera icon here if desired */}
                    View My Work
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
