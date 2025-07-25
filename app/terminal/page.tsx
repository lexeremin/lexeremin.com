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
    "📷 Camera Bodies:",
    "  • Canon EOS R5 - Primary mirrorless body",
    "  • Canon EOS 5D Mark IV - Backup DSLR",
    "",
    "🔍 Lenses:",
    "  • Canon RF 85mm f/1.2L - Portrait photography",
    "  • Canon RF 35mm f/1.8 - Street & environmental",
    "  • Canon EF 24-70mm f/2.8L - Versatile zoom",
    "  • Canon EF 16-35mm f/2.8L - Wide angle landscapes",
    "",
    "💡 Lighting & Accessories:",
    "  • Godox AD600Pro - Studio strobe",
    "  • 5-in-1 Reflector Kit - Natural light control",
    "  • Carbon Fiber Tripod - Stability for long exposures",
    "",
    "$ echo 'Thanks for exploring my creative world!'",
    "Thanks for exploring my creative world!",
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
        <div className="rounded-lg p-6 shadow-2xl" style={{ backgroundColor: "var(--serika-bg)" }}>
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
              <div className="flex space-x-4">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="bg-transparent border-serika-main text-serika-main hover:bg-serika-main hover:text-black transition-all duration-200"
                    style={{
                      borderColor: "var(--serika-main)",
                      color: "var(--serika-main)",
                      backgroundColor: "transparent",
                    }}
                  >
                    Back to Portfolio
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    className="bg-serika-main text-black hover:bg-serika-main/90 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--serika-main)",
                      color: "black",
                    }}
                  >
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
