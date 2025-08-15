"use client"

import * as React from "react";
import Image from "next/image";
import type { MonthlyProject, MonthlyProjectResponse } from "@/types";
import { GlassContainer } from "@/components/shared/glass-container";

export function MonthlyShowcase() {
  const [project, setProject] = React.useState<MonthlyProject | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/api/home/monthly-showcase")
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
    <section className="w-full md:min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-pd-green mb-4">Monthly Project Showcase</h2>
        </div>

        {/* Project Card */}
        <div className="bg-pd-black rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-pd-purple mb-4">{project.title}</h3>
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
          <p className="text-white text-sm text-center mb-4 leading-relaxed">{project.credits}</p>

          {/* Description */}
          <p className="text-white text-center">{project.description}</p>
        </div>
      </div>
    </section>
  )
}