import { z } from "zod"

export const signupSchema = z.object({
    username: z
        .string("Username harus berupa string")
        .trim()
        .min(3, "Username minimal 3 karakter")
        .max(50, "Username maximal 50 karakter"),

    email: z
        .string("Email harus berupa string")
        .trim()
        .email("Format email tidak valid")
        .toLowerCase(),

    password: z
        .string("Password harus berupa string")
        .min(8, "Password minimal 8 karakter"),
})

export type SignupForm = z.infer<typeof signupSchema>
