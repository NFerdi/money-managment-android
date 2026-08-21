import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import React from "react"

type Props = {
    onSubmit: () => void
    textContent: string
    isPending?: boolean
    disabled?: boolean
}

export default function ButtonSetup({
    onSubmit,
    textContent,
    isPending,
    disabled,
}: Props) {
    return (
        <TouchableOpacity
            onPress={onSubmit}
            className={`w-full py-4 rounded-3xl ${
                isPending || disabled ? "bg-green-900/50" : "bg-green-900"
            }`}
            disabled={disabled}
        >
            <Text className="font-poppins-semibold text-center text-white">
                {isPending ?? (
                    <ActivityIndicator size="small" color="#ffffffcc" />
                )}
                <Text className="text-center text-white font-poppins-semibold">
                    {isPending ? "Memproses..." : textContent}
                </Text>
            </Text>
        </TouchableOpacity>
    )
}
