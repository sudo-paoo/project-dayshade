"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import type { FeaturedProject } from "@/types"

export function FeaturedProjects() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [projects, setProjects] = React.useState<FeaturedProject[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/home/featured-project")
        if (!response.ok) {
          throw new Error("Failed to fetch featured projects")
        }
        const result = await response.json()
        setProjects(result.data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  React.useEffect(() => {
    if (!api) return

    const play = () => {
      stop()
      timeoutRef.current = setTimeout(() => {
        api.scrollNext()
      }, 4000)
    }

    const stop = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    play()
    api.on("pointerDown", stop)
    api.on("pointerUp", play)
    api.on("select", play)

    return () => {
      stop()
      api.off("pointerDown", stop)
      api.off("pointerUp", play)
      api.off("select", play)
    }
  }, [api])

  if (loading) {
    return (
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white">Loading featured projects...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-500">Error loading featured projects: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 px-4">
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="px-6 py-2">
            <h2 className="text-lg md:text-3xl lg:text-4xl italic font-bold text-pd-green">Featured Projects</h2>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="space-y-4 text-center md:text-left order-2 md:order-1">
                      <h3 className="text-xl md:text-3xl font-bold text-purple-400">{project.title}</h3>
                      <p className="text-white leading-relaxed text-sm md:text-xl px-4 md:px-0">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative w-full rounded-lg overflow-hidden order-1 md:order-2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
