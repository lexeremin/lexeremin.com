"use client"

import type React from "react"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ImagePreviewerProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
  projectTitle: string
}

export default function ImagePreviewer({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  projectTitle,
}: ImagePreviewerProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          event.preventDefault()
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
          break
        case "ArrowRight":
          event.preventDefault()
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
          break
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  const handlePrevious = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
  }

  const handleNext = () => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-serika-sub-alt/80 hover:bg-serika-sub-alt transition-colors shadow-soft"
      >
        <X className="h-6 w-6 text-serika-text" />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-serika-sub-alt/80 hover:bg-serika-sub-alt transition-colors shadow-soft"
          >
            <ChevronLeft className="h-6 w-6 text-serika-text" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-serika-sub-alt/80 hover:bg-serika-sub-alt transition-colors shadow-soft"
          >
            <ChevronRight className="h-6 w-6 text-serika-text" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${projectTitle} ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-full max-h-full object-contain rounded-lg shadow-soft-lg"
          priority
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-serika-sub-alt/80 backdrop-blur-sm">
          <span className="text-sm text-serika-text">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-serika-main shadow-soft-lg"
                  : "border-serika-sub-alt hover:border-serika-sub"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${projectTitle} thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
