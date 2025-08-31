'use server'

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient();
  const body = await req.json();
  const id = params.id;

  // Map form values → DB column names
  const payload = {
    title: body.Title,
    devs: body.Developers
      ? body.Developers.split(",").map((d: string) => d.trim())
      : [],
    tags: body.Tags ? body.Tags.split(",").map((t: string) => t.trim()) : [],
    embed_link: body.YTLinks,
    published_date: body.PublishedDate || null,
    description: body.Description,
    is_monthly: body.MonthlyShowcase ?? false,
    is_featured: body.FeaturedShowcase ?? false,
    featured_order: body.FeaturedOrder ? parseInt(body.FeaturedOrder) : null,
  };

  const { data, error } = await supabase
    .from("projects")
    .update(payload)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to update project: " + error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}
