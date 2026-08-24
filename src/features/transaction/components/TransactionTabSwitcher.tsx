import { View, Text, Animated, TouchableOpacity } from "react-native"
import React, { act } from "react"
import { TypeTransaction } from "../schemas/createTransactionSchema"

type Props = {
    slideLeft: Animated.AnimatedInterpolation<string | number>
    setActiveTab: React.Dispatch<React.SetStateAction<TypeTransaction>>
    activeTab: string
    action?: (newTab: TypeTransaction) => void
}

export default function TransactionTabSwitcher({
    slideLeft,
    setActiveTab,
    activeTab,
    action,
}: Props) {
    const handleChange = (type: TypeTransaction) => {
        setActiveTab(type)

        action && action(type)
    }

    return (
        <View className="relative flex-row items-center overflow-hidden border border-gray-100 rounded-3xl shadow-sm">
            <Animated.View
                style={{ left: slideLeft }}
                className="absolute w-1/3 h-full bg-green-900 rounded-3xl"
            />

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleChange("INCOME")}
                className="w-1/3 py-2.5 items-center justify-center z-10"
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
                onPress={() => handleChange("EXPENSE")}
                className="w-1/3 py-2.5 items-center justify-center z-10"
            >
                <Text
                    className={`font-poppins-semibold ${
                        activeTab === "EXPENSE" ? "text-white" : "text-gray-600"
                    }`}
                >
                    Pengeluaran
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => handleChange("TRANSFER")}
                className="w-1/3 py-2.5 items-center justify-center z-10"
            >
                <Text
                    className={`font-poppins-semibold ${
                        activeTab === "TRANSFER"
                            ? "text-white"
                            : "text-gray-600"
                    }`}
                >
                    Transfer
                </Text>
            </TouchableOpacity>
        </View>
    )
}
