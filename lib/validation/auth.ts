import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


export type LoginState = {
  errors: {
    email?: string[];
    password?: string[];
  };
  error?: string; // global error (Supabase auth error, etc.)
};

export type LoginInput = z.infer<typeof LoginSchema>;