import { useAuthStore } from "@/features/auth/store/authStore"
import { ROUTES } from "@/shared/constants/routeConstant"
import { getSetupRoute } from "@/shared/constants/setupRouteConstant"
import { Redirect, Stack } from "expo-router"

export default function DashboardLayout() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const user = useAuthStore((state) => state.user)

    if (!isAuthenticated || !user) {
        return <Redirect href={ROUTES.LOGIN} />
    }

    if (user.setup_step !== "COMPLETED") {
        return <Redirect href={getSetupRoute(user.setup_step)} />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        />
    )
}
