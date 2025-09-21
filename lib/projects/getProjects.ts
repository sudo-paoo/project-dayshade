"use server";

import { createClient } from "@/utils/supabase/server";

export async function getProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("published_date", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error.message);
    throw new Error("Failed to fetch projects");
  }

  return data;
}
