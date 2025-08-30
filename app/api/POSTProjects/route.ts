"use server"

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server"

export async function POST(req: Request){

    const supabase = await createClient();

    const body = await req.json();

    const { data, error } = await supabase
        .from("projects")
        .insert({
            title: body.Title,
            description: body.Description,
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