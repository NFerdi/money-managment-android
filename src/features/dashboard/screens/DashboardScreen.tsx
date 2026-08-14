import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useAuthStore } from "@/features/auth/store/authStore"
import { SafeAreaView } from "react-native-safe-area-context"
import { useLogout } from "@/features/auth/hooks/useLogout"
import second from "@expo/vector-icons/MaterialCommunityIcons"

export default function DashboardScreen() {
    const user = useAuthStore((state) => state.user)
    const { handleLogout } = useLogout()
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="p-4 w-full h-full">
                <Text>Hallo {user?.username}</Text>

                <TouchableOpacity
                    onPress={handleLogout}
                    className="p-4 bg-red-500"
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
