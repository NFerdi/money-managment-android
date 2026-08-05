import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useAuthStore } from "@/features/auth/store/authStore"
import { SafeAreaView } from "react-native-safe-area-context"
import { useLogout } from "@/features/auth/hook/useLogout"

export default function DashboardScreen() {
    const user = useAuthStore((state) => state.user)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="p-4 w-full h-full">
                <Text>Hallo {user?.username}</Text>
            </View>
        </SafeAreaView>
    )
}
