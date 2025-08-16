"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlassContainer } from "@/components/shared/glass-container";

// Navigation links
const navigationItems = [
  { name: "Home", href: "/", activeColor: "pd-green" },
  { name: "About", href: "/about", activeColor: "pd-green" },
  { name: "Perks", href: "/perks", activeColor: "pd-green" },
  { name: "Projects", href: "/projects", activeColor: "pd-green" },
  { name: "Leaderboard", href: "/leaderboard", activeColor: "pd-green" },
  { name: "Join", href: "/join", activeColor: "pd-purple" },
];

// Common styles
const desktopLinkBase =
  "font-bold transition-colors rounded-full px-6 py-2 border border-white/30 backdrop-blur-md bg-white/20 hover:scale-105";
const mobileLinkBase =
  "block text-center text-xl font-bold rounded-2xl px-8 py-4 border backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95";

function Logo({
  imageKey,
  width = 40,
  height = 40,
}: {
  imageKey: string;
  width?: number;
  height?: number;
}) {
  const [error, setError] = useState(false);
  return (
    <Image
      src={error ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
      alt="Logo"
      width={width}
      height={height}
      unoptimized
      onError={() => {
        console.warn(`Image ${imageKey} failed to load, using fallback`);
        setError(true);
      }}
    />
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-center px-4 bg-transparent fixed">
        {/* Desktop Navigation */}
        <GlassContainer className="hidden md:flex items-center justify-between rounded-full px-12 py-3 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] w-full max-w-[95vw]">
          <Logo imageKey="desktop-logo" />
          <ul className="flex gap-4 lg:gap-8 items-center">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${desktopLinkBase} text-[var(--color-${item.activeColor})] hover:text-[var(--color-pd-purple)]`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </GlassContainer>

        {/* Mobile Navigation */}
        <GlassContainer className="md:hidden flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] w-full mx-4">
          <Logo imageKey="mobile-logo" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </GlassContainer>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn"
        >
          <div className="flex justify-center pt-8 px-4 h-full animate-slideDown">
            <GlassContainer className="w-full rounded-3xl p-6 shadow-2xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] min-h-[75vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Logo imageKey="mobile-menu-logo" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
                  aria-label="Close mobile menu"
                >
                  <X size={28} />
                </button>
              </div>
              {/* Links */}
              <ul className="flex-1 flex flex-col gap-4 justify-center">
                {navigationItems.map((item, idx) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${mobileLinkBase} text-[var(--color-${
                        item.activeColor
                      })] hover:text-[var(--color-pd-green)] ${
                        idx === 0
                          ? "bg-[var(--color-pd-green)]/20 border-[var(--color-pd-green)]/30"
                          : idx === navigationItems.length - 1
                          ? "bg-[var(--color-pd-purple)]/20 border-[var(--color-pd-purple)]/30"
                          : "bg-white/10 border-white/30"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassContainer>
          </div>
        </div>
      )}
    </>
  );
}
