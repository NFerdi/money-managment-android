import { Text, TouchableOpacity } from "react-native"
import React from "react"

type Props = {
    onSubmit: () => void
    textContent: string
    isPending: boolean
}

export default function ButtonSetup({
    onSubmit,
    textContent,
    isPending,
}: Props) {
    return (
        <TouchableOpacity
            onPress={onSubmit}
            className={`w-full py-4 rounded-3xl ${
                isPending ? "bg-gray-400" : "bg-green-900"
            }`}
        >
            <Text className="font-poppins-semibold text-center text-white">
                <Text className="text-center text-white font-poppins-semibold">
                    {isPending ? "Memproses..." : textContent}
                </Text>
            </Text>
        </TouchableOpacity>
    )
}
