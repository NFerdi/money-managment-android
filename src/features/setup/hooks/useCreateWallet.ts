import { walletApi } from "@/shared/api/walletApi"
import { useMutation } from "@tanstack/react-query"
import Toast from "react-native-toast-message"

export const useCreateWallet = () => {
    return useMutation({
        mutationFn: walletApi.createWallet,
        onError: (error) => {
            Toast.show({
                type: "error",
                text1: "Gagal membuat dompet",
                text2: error.message,
            })
        },
    })
}
