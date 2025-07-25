import type React from "react"
import type { Metadata } from "next"
import { Roboto_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Alexander Eremin - Full-Stack Developer",
  description:
    "Personal portfolio of Alexander Eremin, a passionate full-stack developer specializing in modern web technologies.",
  keywords: "full-stack developer, web development, React, Next.js, portfolio",
  authors: [{ name: "Alexander Eremin" }],
  openGraph: {
    title: "Alexander Eremin - Full-Stack Developer",
    description: "Personal portfolio showcasing projects and skills in modern web development.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} ${playfair.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
