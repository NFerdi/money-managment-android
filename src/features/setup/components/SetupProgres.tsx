import { View, Text } from "react-native"
import React from "react"
import { SetupStep } from "@/features/auth/store/authStore"

type Props = {
    currentStep: SetupStep
}

const steps: SetupStep[] = [
    "WELCOME",
    "WALLET",
    "CATEGORY",
    "BUDGET",
    "COMPLETED",
]

const stepLabels: Record<SetupStep, string> = {
    WELCOME: "Mulai",
    WALLET: "Dompet",
    CATEGORY: "Kategori",
    BUDGET: "Budget",
    COMPLETED: "Selesai",
}

export default function SetupProgres({ currentStep }: Props) {
    const currentIndex = steps.indexOf(currentStep)

    return (
        <View className="py-2">
            <View className="flex-row">
                {steps.map((step, index) => {
                    const completed = index < currentIndex
                    const active = index === currentIndex

                    return (
                        <View key={step} className="flex-1 items-center">
                            <View className="w-full flex-row items-center">
                                {index === 0 ? (
                                    <View className="flex-1" />
                                ) : (
                                    <View
                                        className={`h-1 flex-1 rounded-full ${
                                            index <= currentIndex
                                                ? "bg-primary"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                )}

                                <View
                                    className={`
                                        mx-2 h-10 w-10 items-center justify-center rounded-full
                                        ${
                                            completed
                                                ? "bg-primary"
                                                : active
                                                  ? "border-2 border-primary bg-white"
                                                  : "bg-gray-300"
                                        }
                                    `}
                                >
                                    <Text
                                        className={`font-poppins-bold ${
                                            completed
                                                ? "text-white"
                                                : active
                                                  ? "text-primary"
                                                  : "text-white"
                                        }`}
                                    >
                                        {completed ? "✓" : index + 1}
                                    </Text>
                                </View>

                                {index === steps.length - 1 ? (
                                    <View className="flex-1" />
                                ) : (
                                    <View
                                        className={`h-1 flex-1 rounded-full ${
                                            index < currentIndex
                                                ? "bg-primary"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                )}
                            </View>

                            <Text
                                className={`mt-3 text-center text-xs ${
                                    active
                                        ? "font-poppins-semibold text-primary"
                                        : "text-gray-500"
                                }`}
                            >
                                {stepLabels[step]}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
