"use client"

import { Terminal } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-serika-sub-alt bg-serika-sub-alt/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            {/* Privacy Policy Link */}
            <Link href="/privacy-policy" className="text-serika-sub hover:text-serika-main transition-colors duration-200">
              Privacy / 개인정보 / Политика
            </Link>
            {/* Easter Egg Terminal Link */}
            <Link href="/terminal" className="group">
              <div className="p-2 rounded-lg bg-serika-sub-alt/50 hover:bg-serika-sub-alt transition-all duration-200 shadow-soft hover:shadow-soft-lg group-hover:scale-110">
                <Terminal className="h-4 w-4 text-serika-sub group-hover:text-serika-main transition-colors" />
              </div>
            </Link>
          </div>
          <div className="text-center text-serika-sub">
            <p>&copy; {new Date().getFullYear()} Alexander Eremin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 