"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { GlassContainer } from "@/components/shared/glass-container"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  // Handle image error
  const handleImageError = (imageName: string) => {
    console.log(`Image ${imageName} failed to load, using fallback`)
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "About",
      href: "/about",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Perks",
      href: "/perks",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Projects",
      href: "/projects",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Leaderboard",
      href: "/leaderboard",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Join",
      href: "/join",
      className: "font-bold text-[var(--color-pd-purple)] hover:text-[var(--color-pd-green)] transition-colors",
    },
  ]

  return (
    <>
      <nav className="w-full mt-8 flex justify-center px-4">
        {/* Desktop Navigation */}
        <GlassContainer className="hidden md:flex items-center justify-between rounded-full px-12 py-3 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-black)] w-full max-w-[95vw]">
          <div className="flex items-center">
            <Image
              src={imageErrors['desktop-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
              alt="Logo"
              width={40}
              height={40}
              className="mr-4"
              unoptimized
              onLoad={() => {
                console.log("Desktop logo loaded successfully")
              }}
              onError={() => handleImageError('desktop-logo')}
            />
          </div>
          <ul className="flex gap-4 lg:gap-8 items-center">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <GlassContainer
                  variant="card"
                  className={`rounded-full px-6 py-2 border border-white/30 backdrop-blur-md bg-[var(--color-pd-black)] transition-all duration-200 hover:scale-105 shadow-lg shadow-white/10 hover:bg-[var(--color-pd-green)] group`}
                >
                  <a href={item.href} className={`${item.className} group-hover:text-[var(--color-pd-purple)]`}>
                    {item.name}
                  </a>
                </GlassContainer>
              </li>
            ))}
          </ul>
        </GlassContainer>
        {/* Mobile Navigation */}
        <GlassContainer className="md:hidden flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-black)] w-full max-w-none mx-4">
          <div className="flex items-center">
            <Image
              src={imageErrors['mobile-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
              alt="Logo"
              width={40}
              height={40}
              unoptimized
              onLoad={() => {
                console.log("Mobile logo loaded successfully")
              }}
              onError={() => handleImageError('mobile-logo')}
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </GlassContainer>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="flex justify-center pt-8 px-4 h-full">
            <GlassContainer className="w-full max-w-none rounded-3xl p-6 shadow-2xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] h-fit min-h-[75vh] flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Image
                    src={imageErrors['mobile-menu-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
                    alt="Logo"
                    width={40}
                    height={40}
                    unoptimized
                    onLoad={() => {
                      console.log("Mobile menu logo loaded successfully")
                    }}
                    onError={() => handleImageError('mobile-menu-logo')}
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
                  aria-label="Close mobile menu"
                >
                  <X size={28} />
                </button>
              </div>
              {/* Mobile Menu Items */}
              <div className="flex-1 flex flex-col justify-center">
                <ul className="flex flex-col gap-4">
                  {navigationItems.map((item, idx) => (
                    <li key={item.name}>
                      <GlassContainer
                        variant="card"
                        className={`rounded-2xl px-8 py-4 border border-white/30 backdrop-blur-md bg-[var(--color-pd-black)] transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-[var(--color-pd-green)] group`}
                      >
                        <a
                          href={item.href}
                          className={`block text-center text-xl font-bold ${item.className} group-hover:text-[var(--color-pd-purple)]`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </GlassContainer>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassContainer>
          </div>
        </div>
      )}
    </>
  )
}
