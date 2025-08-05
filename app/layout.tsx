import type React from "react"
import type { Metadata } from "next"
import { Roboto_Mono, Roboto_Serif } from "next/font/google"
import "./globals.css"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
})

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
// })

export const metadata: Metadata = {
  title: "Alexander Eremin - Visual Storyteller",
  description:
    "Personal portfolio of Alexander Eremin, a passionate visual storyteller.",
  keywords: "photography, video, art, design, storytelling, portfolio",
  authors: [{ name: "Alexander Eremin" }],
  openGraph: {
    title: "Alexander Eremin - Visual Storyteller",
    description: "Personal portfolio showcasing projects and skills in modern web development.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#e1e1e3" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#323437" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${robotoMono.variable} ${robotoSerif.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
