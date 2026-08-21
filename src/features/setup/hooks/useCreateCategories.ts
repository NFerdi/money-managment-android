import { walletApi } from "@/features/wallet/services/walletServices"
import { useUpdateStep } from "./useUpdateStep"
import { useMutation } from "@tanstack/react-query"
import Toast from "react-native-toast-message"
import { CategoryApi } from "@/features/category/services/categoryService"
import { delay } from "@/utils/delay"

export const useCreateCategories = () => {
    const { mutate: mutateUpdateStep } = useUpdateStep()
    return useMutation({
        mutationFn: CategoryApi.createBulkCategory,
        onSuccess: async () => {
            Toast.show({
                type: "success",
                text1: "Berhasil menambahkan kategori",
                position: "bottom",
                visibilityTime: 2000,
            })

            await delay(2000)

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
