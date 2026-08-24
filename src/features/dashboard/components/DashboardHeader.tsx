import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import UserAvatar from "@/shared/components/UserAvatar"
import { User } from "@/features/auth/store/authStore"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    user: User | null | undefined
}

export default function DashboardHeader({ user }: Props) {
    return (
        <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
                <UserAvatar name={user?.username} size={30} />
                <View className="flex flex-col">
                    <Text className="font-poppins text-gray-600 text-sm">
                        Selamat Datang
                    </Text>
                    <Text className="font-poppins-bold text-gray-800 text-sm">
                        {user?.username}
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <View className="bg-white p-1.5 rounded-full border border-gray-200">
                    <Ionicons name="notifications" size={20} color="#166534" />
                </View>
            </TouchableOpacity>
        </View>
    )
}
