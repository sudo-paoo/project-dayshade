"use server";

import { createClient } from "@/utils/supabase/server";
import { Settings } from "@/lib/validation/settings";

async function isRecruitmentOpen(): Promise<Settings> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("settings")
      .select("is_open_recruitment")
      .single();

    if (error) {
      console.error("Error fetching recruitment status:", error);
      return { is_recruitment_open: false };
    }

    console.log("Recruitment status:", data.is_open_recruitment);

    return { is_recruitment_open: data.is_open_recruitment };
  } catch (error) {
    console.error("Error checking recruitment status:", error);
    return { is_recruitment_open: false };
  }
}

export { isRecruitmentOpen };
