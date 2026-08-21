import { api } from "@/config/axios"
import { createBulkCategoryDTO } from "../schemas/CreateBulkCategorySchema"

export const CategoryApi = {
    createBulkCategory: async (payload: createBulkCategoryDTO) => {
        const { data } = await api.post("/category/bulk", payload)

        return data
    },
}
