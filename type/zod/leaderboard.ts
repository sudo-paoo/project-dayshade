import { z } from "zod";

// Zod schema
export const LeaderboardSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  rank: z.number().int().positive(), // positive = at least 1
  points: z.number().int().nonnegative(), // nonneg = 0 or more
});

export type Leaderboard = z.infer<typeof LeaderboardSchema>;
