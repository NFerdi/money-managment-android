import { useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/authService"
import { router } from "expo-router"
import { useAuthStore } from "../store/authStore"
import { ROUTES } from "@/shared/constants/routeConstant"

export function useLogout() {
    const queryClient = useQueryClient()

    const resetAuth = useAuthStore((state) => state.logout)

    async function handleLogout() {
        await logout()

        resetAuth()

        queryClient.clear()

        router.replace(ROUTES.LOGIN)
    }

    return {
        handleLogout,
    }
}
