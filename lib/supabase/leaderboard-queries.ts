import { LeaderboardEntries } from "@/lib/validation/leaderboard-entries";
import { Leaderboards } from "@/lib/validation/leaderboards";
import { createClient } from "@/utils/supabase/server";

async function getActiveLeaderboard(): Promise<Leaderboards[]> {
  const supabase = await createClient();
  const { data: activeLeaderboard } = await supabase
    .from("leaderboards")
    .select()
    .eq("is_active", true);

  return activeLeaderboard || [];
}

async function getEntries(
  leaderboard: Leaderboards
): Promise<LeaderboardEntries[]> {
  const supabase = await createClient();
  const { data: entries } = await supabase
    .from("leaderboard_entries")
    .select()
    .eq("leaderboard_id", leaderboard.id);

  return entries || [];
}

export { getActiveLeaderboard, getEntries };
