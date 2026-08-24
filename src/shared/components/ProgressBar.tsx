import React from "react"
import { View, Text } from "react-native"

interface ProgressBarProps {
    current: number
    target: number
}

export default function ProgressBar({ current, target }: ProgressBarProps) {
    const rawPercentage = target > 0 ? (current / target) * 100 : 0
    const percentage = Math.round(rawPercentage)
    const clampedWidth = Math.min(Math.max(rawPercentage, 0), 100)

    const getBarColor = () => {
        if (percentage >= 90) return "bg-red-500"
        if (percentage >= 75) return "bg-amber-500"
        return "bg-emerald-600"
    }

    return (
        <View className="w-full gap-1.5">
            <View className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                <View
                    style={{ width: `${clampedWidth}%` }}
                    className={`h-full rounded-full transition-all ${getBarColor()}`}
                />
            </View>
        </View>
    )
}
