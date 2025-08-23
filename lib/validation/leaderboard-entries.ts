import { z } from "zod";

// Zod schema
export const LeaderboardEntriesSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  points: z.number().min(0, "Points must be a non-negative number"),
  rank: z.number().min(1, "Rank must be at least 1"),
});

export type LeaderboardEntries = z.infer<typeof LeaderboardEntriesSchema>;
