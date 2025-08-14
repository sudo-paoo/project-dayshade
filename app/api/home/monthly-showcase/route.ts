import { NextResponse } from "next/server";
import { monthlyShowcase } from "@/data/monthly-showcase";
import type { MonthlyProjectResponse } from "@/types";

export async function GET() {
  try {
    const response: MonthlyProjectResponse = {
      success: true,
      data: monthlyShowcase,
      message: "Monthly project fetched successfully",
    }

    return NextResponse.json(response)
  } catch (error) {
    const errorResponse: MonthlyProjectResponse = {
      success: false,
      data: monthlyShowcase, // fallback data
      message: "Failed to fetch monthly project",
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}