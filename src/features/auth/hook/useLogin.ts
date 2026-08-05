import { login as loginService } from "../services/authService"
import { getMe } from "../services/userService"
import { saveToken } from "../utils/secureStore"
import { useAuthStore } from "../store/authStore"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"

export const useLogin = () => {
    const login = useAuthStore((state) => state.login)
    return useMutation({
        mutationFn: loginService,
        onSuccess: async (response) => {
            const token = response?.data?.token
            if (!token) {
                throw new Error("Token login tidak ditemukan")
            }

            await saveToken(token)

            const me = await getMe()

            login(me.data, token)

            router.replace("/(dashboard)/dashboard")
        },
    })
}
