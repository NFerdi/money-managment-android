import { useMutation } from "@tanstack/react-query"
import { useUpdateStep } from "./useUpdateStep"
import Toast from "react-native-toast-message"
import { delay } from "@/utils/delay"
import { budgetApi } from "@/features/budget/budgetService"

export const useCreateBudget = () => {
    const { mutate: mutateUpdateStep } = useUpdateStep()
    return useMutation({
        mutationFn: budgetApi.createWallet,
        onSuccess: async () => {
            Toast.show({
                type: "success",
                text1: "Berhasil membuat budget",
                position: "bottom",
                visibilityTime: 2000,
            })

            await delay(2000)

            mutateUpdateStep("COMPLETED")
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
