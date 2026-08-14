import "../global.css"
import "react-native-reanimated"
import "react-native-gesture-handler"
import "@/config/interceptor"

import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { useAppInitialization } from "@/features/splash/hooks/useAppInitialization"
import AnimatedSplash from "@/features/splash/components/AnimatedSplash"
import Toast from "react-native-toast-message"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const queryClient = new QueryClient()

export default function RootLayout() {
    const { isReady, isSplashVisible, hideSplash } = useAppInitialization()

    if (!isReady) {
        return null
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <BottomSheetModalProvider>
                        {isSplashVisible ? (
                            <AnimatedSplash onFinish={hideSplash} />
                        ) : (
                            <Stack screenOptions={{ headerShown: false }} />
                        )}
                        <Toast position="bottom" visibilityTime={3000} />
                    </BottomSheetModalProvider>
                </SafeAreaProvider>
            </QueryClientProvider>
        </GestureHandlerRootView>
    )
}
