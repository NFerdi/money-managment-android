import { View, Text, Animated, TouchableOpacity } from "react-native"
import React from "react"

type Props = {
    slideLeft: Animated.AnimatedInterpolation<string | number>
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string
}

export default function CategoryTabSwitcher({
    slideLeft,
    setActiveTab,
    activeTab,
}: Props) {
    return (
        <View className="relative flex-row items-center border border-gray-100 rounded-3xl shadow-sm">
            <Animated.View
                style={{ left: slideLeft }}
                className="absolute w-[50%] h-full bg-green-900 rounded-3xl shadow-sm border"
            />

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setActiveTab("INCOME")}
                className="w-1/2 py-2.5 items-center justify-center z-10"
            >
                <Text
                    className={`font-poppins-semibold ${
                        activeTab === "INCOME" ? "text-white" : "text-gray-600"
                    }`}
                >
                    Pemasukan
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setActiveTab("EXPENSE")}
                className="w-1/2 py-2.5 items-center justify-center z-10"
            >
                <Text
                    className={`font-poppins-semibold ${
                        activeTab === "EXPENSE" ? "text-white" : "text-gray-600"
                    }`}
                >
                    Pengeluaran
                </Text>
            </TouchableOpacity>
        </View>
    )
}
