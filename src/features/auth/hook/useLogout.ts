import { useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/authService"
import { router } from "expo-router"
import { useAuthStore } from "../store/authStore"

export function useLogout() {
    const queryClient = useQueryClient()

    const resetAuth = useAuthStore((state) => state.logout)

    async function handleLogout() {
        await logout()

        resetAuth()

        queryClient.clear()

        router.replace("/(auth)/login")
    }

    return {
        handleLogout,
    }
}
