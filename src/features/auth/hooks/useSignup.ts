import { signup } from "../services/authService"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"
import Toast from "react-native-toast-message"
import { ROUTES } from "@/shared/constants/routeConstant"
import { delay } from "@/utils/delay"

export const useSignup = () => {
    return useMutation({
        mutationFn: signup,
        onSuccess: async () => {
            Toast.show({
                type: "success",
                text1: "Berhasil mendaftarkan akun",
                position: "bottom",
                visibilityTime: 2000,
            })

            await delay(2000)

            router.replace(ROUTES.LOGIN)
        },
        onError: (error) => {
            Toast.show({
                type: "error",
                text1: "Registrasi gagal",
                text2: error.message,
            })
        },
    })
}
