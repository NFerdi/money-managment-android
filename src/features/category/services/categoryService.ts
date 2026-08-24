import { api } from "@/config/axios"
import { createBulkCategoryDTO } from "../schemas/CreateBulkCategorySchema"
import { CategoryEntity } from "../enitity/category.entity"
import { ApiResponse } from "@/shared/types/apiResponse"

export const CategoryApi = {
    createBulkCategory: async (payload: createBulkCategoryDTO) => {
        const { data } = await api.post("/category/bulk", payload)

        return data
    },
    getCategories: async () => {
        const { data } =
            await api.get<ApiResponse<CategoryEntity[]>>("/category")

        return data.data
    },
}
