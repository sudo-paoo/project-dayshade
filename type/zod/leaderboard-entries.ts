import { z } from "zod";

// Zod schema
export const LeaderboardEntriesSchema = z.object({
  id: z.string().min(1, "ID is required"),
  leaderboard_id: z.uuid("ID must be a valid UUID"),
  name: z.string().min(1, "Name is required"),
  rank: z.number().int().positive(), // positive = at least 1
  points: z.number().int().nonnegative(), // nonneg = 0 or more
});

export type LeaderboardEntries = z.infer<typeof LeaderboardEntriesSchema>;
