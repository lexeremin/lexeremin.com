"use client"

import Navbar from "@/components/navbar"
import ContactLinks from "@/components/contact-links"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-serika-bg text-serika-text">
      <Navbar />

      {/* Header */}
      <div className="pt-40 bg-serika-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-serika-main mb-4">
              Let&apos;s Connect
            </h1>
            <div className="w-16 sm:w-24 h-1 mx-auto bg-serika-main rounded-full mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-serika-sub">
              You can find me through these public links and social profiles.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ContactLinks showHeader={false} />
      </div>

      <Footer />
    </div>
  )
}
