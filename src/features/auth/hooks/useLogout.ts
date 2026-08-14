import { useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/authService"
import { router } from "expo-router"
import { useAuthStore } from "../store/authStore"
import { ROUTES } from "@/shared/constants/routeConstant"
import Toast from "react-native-toast-message"

export function useLogout() {
    const queryClient = useQueryClient()

    const resetAuth = useAuthStore((state) => state.logout)

    async function handleLogout() {
        await logout()

        resetAuth()

        queryClient.clear()

        Toast.show({ type: "success", text1: "Logout berhasil" })

        router.replace(ROUTES.LOGIN)
    }

    return {
        handleLogout,
    }
}
