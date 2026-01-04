"use server";

import { createClient } from "@/utils/supabase/server";

function extractYouTubeId(input?: string): string | null {
  if (!input) return null;
  try {
    // Plain ID
    if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input;

    const url = new URL(input);

    // watch?v=ID
    const v = url.searchParams.get("v");
    if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v;

    // youtu.be/ID
    if (url.hostname.includes("youtu.be")) {
      const shortId = url.pathname.split("/").filter(Boolean)[0];
      if (/^[A-Za-z0-9_-]{11}$/.test(shortId)) return shortId;
    }

    // /embed/ID
    const parts = url.pathname.split("/");
    const embedIndex = parts.indexOf("embed");
    if (
      embedIndex >= 0 &&
      parts[embedIndex + 1] &&
      /^[A-Za-z0-9_-]{11}$/.test(parts[embedIndex + 1])
    ) {
      return parts[embedIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

export async function getCurrentShowcase() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_showcase", true)
    .limit(1);

  if (error) {
    console.error("Error fetching showcase:", error.message);
    throw new Error("Failed to fetch showcase project");
  }

  if (!data || data.length === 0) {
    return null;
  }

  const project = data[0];
  const ytId = extractYouTubeId(project.embed_link);

  return {
    ...project,
    youtubeId: ytId,
    embed_url: ytId ? `https://www.youtube.com/embed/${ytId}` : null,
  };
}
