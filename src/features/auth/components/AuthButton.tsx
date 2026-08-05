import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native"
import React, { ReactNode } from "react"

type Props = {
    handleSubmit: () => void
    isPending: boolean
    children: ReactNode
}

export default function AuthButton({
    handleSubmit,
    isPending,
    children,
}: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="w-full py-4 bg-green-900 rounded-3xl "
            onPress={handleSubmit}
            disabled={isPending}
        >
            {isPending ? (
                <View className="flex-row justify-center items-center gap-2">
                    <ActivityIndicator size="small" color="#ffffffcc" />
                    <Text className="text-center text-white/80 font-poppins-semibold">
                        Harap tunggu
                    </Text>
                </View>
            ) : (
                <Text className="text-center text-white font-poppins-semibold">
                    {children}
                </Text>
            )}
        </TouchableOpacity>
    )
}
