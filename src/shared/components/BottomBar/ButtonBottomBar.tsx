import { Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    pathName: string
    iconDefault: keyof typeof Ionicons.glyphMap
    IconActive: keyof typeof Ionicons.glyphMap
    name: string
    route: string
}

export default function ButtonBottomBar({
    pathName,
    iconDefault,
    IconActive,
    name,
    route,
}: Props) {
    const isActive = (routePath: string) => {
        const cleanPath = routePath.replace(/\/\([^)]+\)/g, "")
        return pathName === cleanPath || pathName === routePath
    }

    const navigateTo = (routePath: string) => {
        if (!isActive(route)) {
            router.push(routePath)
        }
    }
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigateTo(route)}
            className="items-center justify-center py-1 flex-1"
        >
            <Ionicons
                name={isActive(route) ? iconDefault : IconActive}
                size={20}
                color={isActive(route) ? "#14532d" : "#6b7280"}
            />
            <Text
                className={`text-[10px] mt-0.5 ${
                    isActive(route)
                        ? "text-emerald-900 font-poppins-bold"
                        : "text-gray-500 font-poppins-medium"
                }`}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}
