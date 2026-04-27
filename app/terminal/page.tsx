'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

const terminalLines = [
  '$ whoami',
  'aleksandr-eremin',
  '',
  '$ cat about.txt',
  'Visual Artist | Photographer | 3D Modeling Specialist',
  'Capturing moments through photography and bringing imagination to life',
  '',
  '$ ls -la projects/',
  'drwxr-xr-x  8 alexander  staff   256 Dec 15 10:30 .',
  'drwxr-xr-x  5 alexander  staff   160 Dec 15 10:30 ..',
  '-rw-r--r--  1 alexander  staff  2048 Dec 15 10:30 unsplash-photography',
  '-rw-r--r--  1 alexander  staff  1536 Dec 15 10:30 reactive-doom',
  '',
  '$ lsgear',
  '💻 Laptops:',
  '  • MacBook Pro 14-inch M1 Max - Unified Memory FTW!',
  '  • ThinkPad x230 - BIOS mod, 16GB RAM, running Arch Linux btw',
  '',
  '⌨️ Keyboards:',
  '  • HHKB Professional Hybrid ❄️ - My Favorite Keyboard',
  '  • SingaKBD Unikorn - Cherry HG Black, GMK Purple Nights, Too Heavy',
  '',
  '📷 Camera Bodies:',
  '  • Sony A7IV - Beast, that hurts my back',
  '',
  '🔍 Lenses:',
  '  • Tamron 28-75mm f/2.8 - Versatile zoom',
  '  • Viltrox 40mm f/2.5 - Street and EDC Lens',
  '',
  '$ cat important.txt',
  '...',
  'Make Art, Science and Love, not War!',
  '__ __   ___  __ _  ___ ___',
  "| '_ \\ / _ \\/ _` |/ __/ _ \\",
  '| |_) |  __/ (_| | (_|  __/',
  '| .__/ \\___|\\__,_|\\___\\___|',
  '|_|',
  '',
  '$ █',
]

export default function TerminalPage() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedChars, setDisplayedChars] = useState(0)

  const currentLine = terminalLines[currentLineIndex] ?? ''
  const isFinished = currentLineIndex >= terminalLines.length

  useEffect(() => {
    if (isFinished) return

    if (displayedChars < currentLine.length) {
      const timer = window.setTimeout(() => {
        setDisplayedChars((count) => count + 1)
      }, currentLine.startsWith('$') ? 35 : 18)

      return () => window.clearTimeout(timer)
    }

    const pause = window.setTimeout(() => {
      setVisibleLines((lines) => [...lines, currentLine])
      setCurrentLineIndex((index) => index + 1)
      setDisplayedChars(0)
    }, currentLine === '' ? 120 : 260)

    return () => window.clearTimeout(pause)
  }, [currentLine, displayedChars, isFinished])

  const renderedText = useMemo(() => {
    const lines = [...visibleLines]
    if (!isFinished) lines.push(currentLine.slice(0, displayedChars))
    return lines.join('\n')
  }, [visibleLines, currentLine, displayedChars, isFinished])

  return (
    <div
      className="min-h-screen bg-serika-sub-alt text-serika-main font-mono p-4"
      style={{ backgroundColor: 'var(--serika-sub-alt)', color: 'var(--serika-main)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-6 shadow-2xl" style={{ backgroundColor: 'var(--serika-bg)' }}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-serika-sub text-sm ml-4">aleksandr@portfolio:~</span>
          </div>

          <pre
            className="whitespace-pre-wrap text-sm leading-relaxed min-h-96 text-serika-text"
            style={{ color: 'var(--serika-text)' }}
          >
            {renderedText}
            {!isFinished && <span className="animate-pulse text-serika-main">█</span>}
          </pre>

          {isFinished && (
            <div className="mt-8 space-y-4">
              <div className="text-serika-main">
                $ # Ready to collaborate? Let&apos;s create something extraordinary together!
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
                <Link href="/">
                  <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-sub-alt hover:bg-serika-sub text-serika-text shadow-soft hover:shadow-soft-lg flex items-center justify-center">
                    Back to Portfolio
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-200 bg-serika-main hover:bg-serika-main-hover text-black shadow-soft hover:shadow-soft-lg flex items-center justify-center">
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
