import { z } from "zod";

// Zod schema for leaderboards table
export const LeaderboardsSchema = z.object({
  id: z.uuid("ID must be a valid UUID"),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullable().optional(),
  is_active: z.boolean().default(false),
  created_at: z.string().datetime("Invalid date format"),
});

export type Leaderboards = z.infer<typeof LeaderboardsSchema>;
