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

    const loading = useRestoreSession()

    useEffect(() => {
        async function prepare() {
            if (!fontsLoaded || loading) return

            await SplashScreen.hideAsync()
        }

        prepare()
    }, [fontsLoaded, loading])

    return {
        isReady: fontsLoaded && !loading,
        isSplashVisible: showSplash,
        hideSplash: () => setShowSplash(false),
    }
}
