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
  title: "Aleksandr Eremin",
  description:
    "Personal website of Aleksandr Eremin, a polymath builder working across photography, machine learning, product engineering, and homelab systems.",
  keywords: "Aleksandr Eremin, photography, machine learning, web development, homelab, Linux, TanStack Start, PostgreSQL",
  authors: [{ name: "Aleksandr Eremin" }],
  openGraph: {
    title: "Aleksandr Eremin",
    description: "Personal website of Aleksandr Eremin, covering projects, writing, photography, and systems work.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeScript = `(() => { try { const savedTheme = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark); document.documentElement.classList.toggle('dark', shouldBeDark); } catch (e) {} })();`

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#e1e1e3" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#323437" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${robotoMono.variable} ${robotoSerif.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
