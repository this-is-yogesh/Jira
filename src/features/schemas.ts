import {z} from "zod"
export const postScehma = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name Field Required"),
  email: z.string().email(),
  password: z.string(),
});
