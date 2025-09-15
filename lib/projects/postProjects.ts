"use server";

import { createClient } from "@/utils/supabase/server";

export async function addProject(formData: FormData) {
  const supabase = await createClient();

  // Extract form fields
  const title = formData.get("Title") as string;
  const description = formData.get("Description") as string;
  const devs = (formData.get("Developers") as string).split(",").map(d => d.trim());
  const tags = (formData.get("Tags") as string).split(",").map(t => t.trim());
  const embed_link = formData.get("YTLinks") as string;
  const site_link = formData.get("SiteURL") as string;
  const published_date = formData.get("PublishedDate") as string;

  // Handle file
  const file = formData.get("Image") as File | null;
  let image_url: string | null = null;

  if (file) {
    const filePath = `projects/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("projects-image")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
      throw new Error("File upload failed");
    }

    const { data } = supabase.storage.from("projects-image").getPublicUrl(filePath);
    image_url = data.publicUrl;
  }

  // Insert project record
  const { error: insertError, data: inserted } = await supabase
    .from("projects")
    .insert({
      title,
      description,
      devs,
      tags,
      embed_link,
      site_link,
      published_date,
      image_url,
    })
    .select();

  if (insertError) {
    console.error("Insert failed:", insertError.message);
    throw new Error("Database insert failed: " + insertError.message);
  }

  return inserted;
}
