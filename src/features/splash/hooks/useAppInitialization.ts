import { useRestoreSession } from "@/features/auth/hooks/useRestoreSession"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"

SplashScreen.preventAutoHideAsync()

export function useAppInitialization() {
    const [showSplash, setShowSplash] = useState(true)

    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("@/assets/font/Poppins/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("@/assets/font/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("@/assets/font/Poppins/Poppins-Bold.ttf"),
    })

    const { loading: sessionLoading, error: sessionError } = useRestoreSession()

    const isReady = fontsLoaded && !sessionLoading

    useEffect(() => {
        if (!isReady) return

        SplashScreen.hideAsync()
    }, [isReady])

    return {
        isReady,
        isSplashVisible: showSplash,
        sessionError,
        hideSplash: () => setShowSplash(false),
    }
}
