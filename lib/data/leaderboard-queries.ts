import { LeaderboardEntry } from "@/lib/validation/leaderboard-entries";
import { createClient } from "@/utils/supabase/server";

// !FOR DEBUG PURPOSE
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function getEntries(): Promise<LeaderboardEntry[]> {
  // await sleep(3000);
  const supabase = await createClient();
  const { data: leaderboard_entries } = await supabase
    .from("leaderboard_entries")
    .select();
  return leaderboard_entries || [];
}

export { getEntries };
