import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long (2000 characters max)"),
});

export type ContactInput = z.infer<typeof contactSchema>;
