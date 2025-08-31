"use server"

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server"

export async function POST(req: Request){

  const supabase = await createClient();
  const body = await req.json();

    // Convert Developers into an array if it’s a string
  const devArray = typeof body.Developers === "string"
    ? body.Developers.split(",").map((d: string) => d.trim())
    : body.Developers;

  const tagsArray = typeof body.Tags === "string"
    ? body.Tags.split(",").map((d: string) => d.trim())
    : body.Tags;


    const { data, error } = await supabase
        .from("projects")
        .insert({
            title: body.Title,
            devs: devArray,
            description: body.Description,
            tags: tagsArray,
            embed_link: body.YTLinks,
            is_monthly: body.MonthlyShowcase ?? false,
            published_date: body.PublishedDate,
    });

   if (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database update failed: " + error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}