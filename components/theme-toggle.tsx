"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    document.documentElement.classList.toggle("dark", shouldBeDark)
    setIsDarkMode(shouldBeDark)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode
    document.documentElement.classList.toggle("dark", nextIsDark)
    localStorage.setItem("theme", nextIsDark ? "dark" : "light")
    setIsDarkMode(nextIsDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-serika-sub-alt/70 hover:bg-serika-sub-alt transition-colors shadow-soft"
      aria-label="Toggle dark mode"
      type="button"
    >
      {mounted && isDarkMode ? (
        <Sun className="h-4 w-4 text-serika-text" />
      ) : (
        <Moon className="h-4 w-4 text-serika-text" />
      )}
    </button>
  )
}
