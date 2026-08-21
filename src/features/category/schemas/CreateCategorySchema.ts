import { z } from "zod"
import { CATEGORY_TYPES } from "../enitity/category.entity"

export const createCategorySchema = z.object({
    name: z
        .string("Nama harus berupa string")
        .trim()
        .min(3, "Nama minimal 3 karakter")
        .max(50, "Nama maximal 50 karakter"),

    type: z.enum(CATEGORY_TYPES),

    icon: z
        .string("Icon harus berupa string")
        .trim()
        .max(10, "Icon tidak valid")
        .optional(),
})

export type createCategoryDTO = z.infer<typeof createCategorySchema>
