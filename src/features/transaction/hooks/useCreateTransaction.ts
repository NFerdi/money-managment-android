import { useMutation, useQueryClient } from "@tanstack/react-query"
import { transactionApi } from "../services/transactionService"
import Toast from "react-native-toast-message"

export const useCreateTransaction = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: transactionApi.createTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["dashboardOverview"] })
        },
        onError: (error) => {
            console.log(error)
            Toast.show({
                type: "error",
                text1: "Gagal membuat transaksi",
                text2: error.message,
            })
        },
    })
}
