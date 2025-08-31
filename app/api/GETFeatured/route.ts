'use server'

import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true)
    .order("featured_order", { ascending: true });

  if (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects: " + error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, data });
}
