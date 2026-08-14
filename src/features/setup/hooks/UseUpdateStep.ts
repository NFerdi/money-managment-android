import { useMutation } from "@tanstack/react-query"
import { updateStep } from "../services/SetupService"
import Toast from "react-native-toast-message"
import { router } from "expo-router"
import { getSetupRoute } from "@/shared/constants/setupRouteConstant"

export const useUpdateStep = () => {
    return useMutation({
        mutationFn: updateStep,
        onSuccess: (_, nextStep) => {
            router.push(getSetupRoute(nextStep))
        },
        onError: (error) => {
            Toast.show({
                type: "error",
                text1: "Gagal memperbarui setup",
                text2: error.message,
            })
        },
    })
}
