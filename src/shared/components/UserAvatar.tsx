import { View, Text, Image } from "react-native"
import React from "react"

interface Props {
    name?: string
    imageUrl?: string
    size?: number
}

export default function UserAvatar({ name, imageUrl, size = 40 }: Props) {
    const initials = (name?: string): string => {
        if (!name) return "?"

        const trimmedName = name.trim()
        if (!trimmedName) return "?"

        const words = trimmedName.split(" ")

        if (words.length === 1) {
            return words[0].charAt(0).toUpperCase()
        }

        return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
    }

    if (imageUrl) {
        return (
            <Image
                source={{ uri: imageUrl }}
                style={{ width: size, height: size, borderRadius: size / 2 }}
                className="bg-gray-200"
            />
        )
    }
    return (
        <View
            style={{ width: size, height: size, borderRadius: size / 2 }}
            className="bg-emerald-800 items-center justify-center border border-emerald-700"
        >
            <Text
                style={{ fontSize: size * 0.4 }}
                className="text-white font-poppins-bold leading-none"
            >
                {initials(name)}
            </Text>
        </View>
    )
}
