import { useQuery } from "@tanstack/react-query"
import { CategoryApi } from "../services/categoryService"

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: CategoryApi.getCategories,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 24,
    })
}
