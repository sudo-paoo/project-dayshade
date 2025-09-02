"use server"

import { LeaderboardEntry } from "@/lib/validation/leaderboard-entries";
import { createClient } from "@/utils/supabase/server";


async function getEntries(): Promise<LeaderboardEntry[]> {
  try {
    const supabase = await createClient();
    const { data: leaderboard_entries, error } = await supabase
      .from("leaderboard_entries")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    // console.log("Fetched entries:", leaderboard_entries);
    return leaderboard_entries || [];
  } catch (e) {
    console.error("Failed to fetch leaderboard entries:", e);
    throw e;
  }
}

export { getEntries };
