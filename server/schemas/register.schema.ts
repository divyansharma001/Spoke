import { z } from "zod";


export const registerSchema = z.object({
  fullname: z.string().min(5, "Full Name must have at least 5 characters"),
  email: z.string().email("Invalid Email"),
  username: z.string().min(5, "Username must have at least 5 characters"),
  password: z.string().min(8, "Password must have at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm Password must have at least 8 characters"),
});


