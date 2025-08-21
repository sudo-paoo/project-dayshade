 "use client"
 
import { useState, useEffect } from "react"
import Navbar from "@/components/global/navbar"
import MembersProjectView from "@/components/views/members-project-view"
import MonthlyProjectShowcase from "@/components/views/monthly-project-showcase"
import FeaturedProjectsView from "@/components/views/featured-projects-view"
import ArchiveProjectShowcaseView from "@/components/views/archive-project-showcase-view"

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  
  // Use effect to ensure proper loading
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Handle image error
  const handleImageError = (imageName: string) => {
    console.log(`Image ${imageName} failed to load, using fallback`)
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  // Main component rendering
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-pd-dark-grey)]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }


  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-[linear-gradient(180deg,var(--color-pd-dark-grey)_0%,var(--color-pd-black)_30%,var(--color-pd-black)_100%)] px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[url(/assets/pattern.png)] bg-cover bg-no-repeat opacity-5 [background-color:var(--color-pd-dark-grey)]" />

      
      {/* Navbar */}


      {/* Members Project View */}
      <MembersProjectView />


      {/* Monthly Project Showcase */}
      <MonthlyProjectShowcase 
        imageErrors={imageErrors} 
        handleImageError={handleImageError} 
      />

      {/* Featured Projects Section */}
      <FeaturedProjectsView 
        imageErrors={imageErrors} 
        handleImageError={handleImageError} 
      />

      {/* Archive Project Showcase Section */}
      <ArchiveProjectShowcaseView 
        imageErrors={imageErrors} 
        handleImageError={handleImageError} 
      />
    </div>
  )
}