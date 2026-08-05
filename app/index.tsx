import { useRestoreSession } from "@/features/auth/hook/useRestoreSession"
import { useAuthStore } from "@/features/auth/store/authStore"
import AnimatedSplash from "@/features/splash/components/AnimatedSplash"
import { ROUTES } from "@/shared/constants/routeConstant"
import { Redirect } from "expo-router"

import React from "react"

export default function Index() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

    return isAuthenticated ? (
        <Redirect href={ROUTES.DASHBOARD} />
    ) : (
        <Redirect href={ROUTES.LOGIN} />
    )
}
