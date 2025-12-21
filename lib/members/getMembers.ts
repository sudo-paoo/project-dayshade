"use server";

import { createClient } from "@/utils/supabase/server";

export async function getMembers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch members:", error);
    throw new Error("Failed to fetch members");
  }

  return data;
}
