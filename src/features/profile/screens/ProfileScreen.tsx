import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useLogout } from "@/features/auth/hooks/useLogout"
import BottomBar from "@/shared/components/BottomBar/BottomBar"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProfileScreen() {
    const { handleLogout } = useLogout()

    const handleOpenAddTransaction = () => {
        console.log("Buka Modal Tambah Transaksi")
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="p-4 w-full h-full gap-6">
                <TouchableOpacity onPress={() => handleLogout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
            <BottomBar onOpenAddTransaction={handleOpenAddTransaction} />
        </SafeAreaView>
    )
}
