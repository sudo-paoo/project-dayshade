import { NextResponse } from "next/server"
import { featuredProjects } from "@/data/featured-projects"
import type { FeaturedProjectsResponse } from "@/types"

export async function GET() {
  try {
    const response: FeaturedProjectsResponse = {
      success: true,
      data: featuredProjects,
      message: "Featured projects fetched successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    const errorResponse: FeaturedProjectsResponse = {
      success: false,
      data: featuredProjects, // fallback data
      message: "Failed to fetch featured projects",
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}