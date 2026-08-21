import { walletApi } from "@/features/wallet/services/walletServices"
import { useUpdateStep } from "./useUpdateStep"
import { useMutation } from "@tanstack/react-query"
import Toast from "react-native-toast-message"
import { CategoryApi } from "@/features/category/services/categoryService"

export const useCreateCategories = () => {
    const { mutate: mutateUpdateStep } = useUpdateStep()
    return useMutation({
        mutationFn: CategoryApi.createBulkCategory,
        onSuccess: () => {
            mutateUpdateStep("BUDGET")
        },
        onError: (error) => {
            Toast.show({
                type: "error",
                text1: "Gagal membuat dompet",
                text2: error.message,
            })
        },
    })
}
