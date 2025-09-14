"use server";

import { createClient } from "@/utils/supabase/server";

function extractPathFromUrl(url: string) {
  const parts = url.split("/projects-image/");
  return parts.length > 1 ? parts[1] : null;
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();

  const { data: existing, error: fetchError } = await supabase
    .from("projects")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("Error fetching existing project:", fetchError.message);
  }

  const file = formData.get("Image") as File | null;
  let image_url = formData.get("ImageURL") as string | null;

  if (file && file.size > 0) {
    const filePath = `projects/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("projects-image")
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (uploadError) throw new Error("File upload failed");

    const { data } = supabase.storage.from("projects-image").getPublicUrl(filePath);
    image_url = data.publicUrl;

    if (existing?.image_url) {
      const oldPath = extractPathFromUrl(existing.image_url);
      if (oldPath) {
        await supabase.storage.from("projects-image").remove([oldPath]);
      }
    }
  }

  const payload = {
    title: formData.get("Title"),
    image_url,
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
    is_showcase: formData.get("Currenthowcase") === "true",
    featured_order: formData.get("FeaturedOrder")
      ? Number(formData.get("FeaturedOrder"))
      : null,
  };

  const { data: updated, error } = await supabase
    .from("projects")
    .update(payload)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return updated;
}