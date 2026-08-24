import { useMutation } from "@tanstack/react-query"
import Toast from "react-native-toast-message"
import { useUpdateStep } from "../../setup/hooks/useUpdateStep"
import { walletApi } from "@/features/wallet/services/walletServices"
import { delay } from "@/utils/delay"

export const useCreateWallet = () => {
    const { mutate: mutateUpdateStep } = useUpdateStep()
    return useMutation({
        mutationFn: walletApi.createWallet,
        onSuccess: async () => {
            Toast.show({
                type: "success",
                text1: "Berhasil menambahkan dompet",
                position: "bottom",
                visibilityTime: 2000,
            })

            await delay(2000)

            mutateUpdateStep("CATEGORY")
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
