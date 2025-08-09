import { z } from "zod";

export const OfficerSchema = z.object({
  title: z.string(),
  imgSrc: z.string(),
});

export const OfficersSchema = z.array(OfficerSchema);
export type Officer = z.infer<typeof OfficerSchema>;
export type Officers = z.infer<typeof OfficersSchema>;
