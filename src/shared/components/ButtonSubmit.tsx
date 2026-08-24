import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import React, { ReactNode } from "react"

type Props = {
    onSubmit: () => void
    isPending?: boolean
    disabled?: boolean
    children: ReactNode
}

export default function ButtonSubmit({
    onSubmit,
    isPending = false,
    disabled = false,
    children,
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
                {isPending ? (
                    <Text className="text-center text-white font-poppins-semibold">
                        Memproses...
                    </Text>
                ) : (
                    children
                )}
            </Text>
        </TouchableOpacity>
    )
}
