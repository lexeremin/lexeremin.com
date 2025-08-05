"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showDevNotice, setShowDevNotice] = useState(true)
  const pathname = usePathname()

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Check if dev notice was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem("dev-notice-dismissed")
    if (dismissed) {
      setShowDevNotice(false)
    }
  }, [])

  const dismissDevNotice = () => {
    setShowDevNotice(false)
    localStorage.setItem("dev-notice-dismissed", "true")
  }

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        const sections = ["home", "about", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // Navigate to home page with hash, then scroll after page loads
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    // Handle scrolling to section when coming from other pages
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  return (
    <>
      {/* Development Notice Banner */}
      {showDevNotice && (
        <div className="fixed top-0 w-full z-50 bg-serika-main/95 backdrop-blur-sm border-b border-serika-main-hover shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-serika-text" />
                <span className="text-sm font-medium text-serika-text">
                  🚧 Website under development - No data collection happening
                </span>
              </div>
              <button
                onClick={dismissDevNotice}
                className="p-1 rounded-lg hover:bg-serika-text/10 transition-colors"
              >
                <X className="h-4 w-4 text-serika-text" />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className={`fixed w-full z-40 bg-serika-bg/95 backdrop-blur-sm border-b border-serika-sub-alt shadow-soft ${showDevNotice ? 'top-12' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-xl font-black text-serika-text">
              Alexander Eremin
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <span
                  className={`text-lg transition-colors duration-200 cursor-pointer hover:text-serika-main ${
                    pathname === "/" ? "text-serika-main" : "text-serika-sub"
                  }`}
                >
                  About
                </span>
              </Link>
              <Link href="/projects">
                <span
                  className={`text-lg transition-colors duration-200 cursor-pointer hover:text-serika-main ${
                    pathname === "/projects" || pathname.startsWith("/projects/") ? "text-serika-main" : "text-serika-sub"
                  }`}
                >
                  Projects
                </span>
              </Link>
              <Link href="/blog">
                <span
                  className={`text-lg transition-colors duration-200 cursor-pointer hover:text-serika-main ${
                    pathname === "/blog" || pathname.startsWith("/blog/") ? "text-serika-main" : "text-serika-sub"
                  }`}
                >
                  Blog
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`text-lg transition-colors duration-200 cursor-pointer hover:text-serika-main ${
                    pathname === "/contact" ? "text-serika-main" : "text-serika-sub"
                  }`}
                >
                  Contact
                </span>
              </Link>
            </div>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-serika-sub-alt/70 hover:bg-serika-sub-alt transition-colors shadow-soft"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 text-serika-text" />
                ) : (
                  <Moon className="h-4 w-4 text-serika-text" />
                )}
              </button>

              <button
                className="md:hidden p-2 rounded-lg bg-serika-sub-alt/70 shadow-soft"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4 text-serika-text" /> : <Menu className="h-4 w-4 text-serika-text" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden fixed w-full z-30 bg-serika-bg/95 backdrop-blur-sm border-t border-serika-sub-alt shadow-soft ${showDevNotice ? 'top-28' : 'top-16'}`}>
          <div className="px-4 py-4 space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span
                className={`block text-lg transition-colors cursor-pointer hover:text-serika-main ${
                  pathname === "/" ? "text-serika-main" : "text-serika-sub"
                }`}
              >
                About
              </span>
            </Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
              <span
                className={`block text-lg transition-colors cursor-pointer hover:text-serika-main ${
                  pathname === "/projects" || pathname.startsWith("/projects/") ? "text-serika-main" : "text-serika-sub"
                }`}
              >
                Projects
              </span>
            </Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
              <span
                className={`block text-lg transition-colors cursor-pointer hover:text-serika-main ${
                  pathname === "/blog" || pathname.startsWith("/blog/") ? "text-serika-main" : "text-serika-sub"
                }`}
              >
                Blog
              </span>
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <span
                className={`block text-lg transition-colors cursor-pointer hover:text-serika-main ${
                  pathname === "/contact" ? "text-serika-main" : "text-serika-sub"
                }`}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
