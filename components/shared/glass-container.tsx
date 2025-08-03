import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassContainerProps {
  children: ReactNode
  className?: string
  variant?: "default" | "card" // Default for background use, card for cards HAHAHA
}

export function GlassContainer({ children, className, variant = "default" }: GlassContainerProps) {
  const variantClasses = {
    default: "bg-black/50",
    card: "bg-gradient-to-b from-white/30 to-black/10"
  }
  return (
    <div
      className={cn(
        "glass-card",
        `${variantClasses[variant]}`,
        "border border-white/20",
        "p-2",
        className,
      )}
    >
      {children}
    </div>
  )
}
