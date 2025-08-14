"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { MonthlyProject, MonthlyProjectResponse } from "@/types"

export function MonthlyShowcase() {
  const [project, setProject] = React.useState<MonthlyProject | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/api/home/monthly-project")
        if (!response.ok) {
          throw new Error("Failed to fetch monthly project")
        }
        const result: MonthlyProjectResponse = await response.json()
        setProject(result.data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [])

  if (loading) {
    return (
      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white">Loading...</p>
        </div>
      </section>
    )
  }

  if (error || !project) {
    return (
      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500">Error loading monthly project</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">Monthly Project Showcase</h2>
        </div>

        {/* Project Card */}
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">{project.title}</h3>
          </div>

          {/* Project Image */}
          <div className="relative w-full max-w-2xl mx-auto mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Credits */}
          <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">{project.credits}</p>

          {/* Description */}
          <p className="text-gray-300 text-center mb-6">{project.description}</p>

          {/* View All Button */}
          <div className="text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-full">
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
