import { z } from "zod";

export const SignUpInput = z.object({
  username: z.string().min(1).max(20),
  password: z.string().min(6).max(20),
});

export type SignUpParams = z.infer<typeof SignUpInput>;
