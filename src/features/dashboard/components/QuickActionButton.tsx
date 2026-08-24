import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    name: string
    icon: keyof typeof Ionicons.glyphMap
}

export default function QuickActionButton({ name, icon }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="items-center justify-center gap-1 py-2 px-3 rounded-2xl bg-white border border-gray-100 shadow-sm"
        >
            <Ionicons name={icon} size={15} color="#4b5563" />
            <Text className="font-poppins-semibold text-gray-600 text-sm">
                {name}
            </Text>
        </TouchableOpacity>
    )
}
