import { z } from "zod";

export const SettingsSchema = z.object({
  is_recruitment_open: z.boolean(),
});

export type Settings = z.infer<typeof SettingsSchema>;
