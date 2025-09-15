import { z } from "zod";

export const LeaderboardEntrySchema = z.object({
  name: z.string().min(1),
  points: z.coerce.number().int().nonnegative({
    message: "points must be a non-negative integer",
  }),
  rank: z.coerce.number().int().positive({
    message: "rank must be a positive integer",
  }),
  date_uploaded: z.string().optional(),
});

export type LeaderboardEntry = z.infer<typeof LeaderboardEntrySchema>;
