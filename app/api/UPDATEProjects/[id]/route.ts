'use server'

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

function extractPathFromUrl(url: string) {
  const parts = url.split("/projects-image/");
  return parts.length > 1 ? parts[1] : null;
}

export async function PUT( req: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient();
  const formData = await req.formData();

  const { id } = await params;

  const { data: existing, error: fetchError } = await supabase
    .from("projects")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("Error fetching existing project:", fetchError.message);
  }

  const file = formData.get("Image") as File | null;
  let image_url = formData.get("ImageURL") as string | null; // default to existing

  if (file && file.size > 0) {
    // 🔹 Upload new file
    const filePath = `projects/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("projects-image")
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
      return NextResponse.json({ error: "File upload failed" }, { status: 500 });
    }

    const { data } = supabase.storage.from("projects-image").getPublicUrl(filePath);
    image_url = data.publicUrl;

    if (existing?.image_url) {
      const oldPath = extractPathFromUrl(existing.image_url);
      if (oldPath) {
        const { error: deleteError } = await supabase
          .storage
          .from("projects-image")
          .remove([oldPath]);

        if (deleteError) {
          console.warn("Failed to delete old image:", deleteError.message);
        } else {
          console.log("Old image deleted:", oldPath);
        }
      }
    }

  }

  const payload = {
    title: formData.get("Title"),
    image_url, // ✅ always use latest resolved url
    devs: formData.get("Developers")
      ? (formData.get("Developers") as string).split(",").map(d => d.trim())
      : [],
    tags: formData.get("Tags")
      ? (formData.get("Tags") as string).split(",").map(t => t.trim())
      : [],
    embed_link: formData.get("YTLinks"),
    site_link: formData.get("SiteURL"),
    published_date: formData.get("PublishedDate"),
    description: formData.get("Description"),
    is_monthly: formData.get("MonthlyShowcase") === "true",
    is_featured: formData.get("FeaturedShowcase") === "true",
    is_showcase: formData.get('Currenthowcase') === 'true',
    featured_order: formData.get("FeaturedOrder")
      ? Number(formData.get("FeaturedOrder"))
      : null,
  };

  const { data: updated, error } = await supabase
    .from("projects")
    .update(payload)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data: updated });
}