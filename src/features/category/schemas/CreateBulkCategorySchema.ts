import z from "zod"
import { createCategorySchema } from "./CreateCategorySchema"

export const createBulkCategorySchema = z
    .array(createCategorySchema)
    .min(1, "Minimal pilih 1 kategori")

export type createBulkCategoryDTO = z.infer<typeof createBulkCategorySchema>
