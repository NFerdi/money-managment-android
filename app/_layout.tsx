import "../global.css"
import "react-native-reanimated"
import "react-native-gesture-handler"

import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("../src/assets/font/Poppins/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../src/assets/font/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../src/assets/font/Poppins/Poppins-Bold.ttf"),
    })

    if (!fontsLoaded) return null

    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </SafeAreaProvider>
    )
}
