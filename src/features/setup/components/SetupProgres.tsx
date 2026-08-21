import { View, Text } from "react-native"
import React from "react"
import { SetupStep } from "@/features/auth/store/authStore"
import { Ionicons } from "@expo/vector-icons"

interface Props {
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

const stepIcons: Record<
    SetupStep,
    {
        active: keyof typeof Ionicons.glyphMap
        inactive: keyof typeof Ionicons.glyphMap
    }
> = {
    WELCOME: { active: "hand-left", inactive: "hand-left-outline" },
    WALLET: { active: "wallet", inactive: "wallet-outline" },
    CATEGORY: { active: "grid", inactive: "grid-outline" },
    BUDGET: { active: "pie-chart", inactive: "pie-chart-outline" },
    COMPLETED: {
        active: "checkmark-circle",
        inactive: "checkmark-circle-outline",
    },
}

export default function SetupProgres({ currentStep }: Props) {
    const currentIndex = steps.indexOf(currentStep)

    return (
        <View className="w-full px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md">
            <View className="flex-row items-center justify-between">
                {steps.map((step, index) => {
                    const completed = index < currentIndex
                    const active = index === currentIndex
                    const isLast = index === steps.length - 1

                    return (
                        <React.Fragment key={step}>
                            <View className="items-center z-10">
                                <View
                                    className={`h-10 w-10 items-center justify-center rounded-full transition-all ${
                                        completed || active
                                            ? "bg-green-900 shadow-sm "
                                            : "bg-gray-100 border border-gray-200"
                                    }`}
                                >
                                    <Ionicons
                                        name={
                                            completed
                                                ? "checkmark"
                                                : active
                                                  ? stepIcons[step].active
                                                  : stepIcons[step].inactive
                                        }
                                        size={18}
                                        color={
                                            completed || active
                                                ? "#FFFFFF"
                                                : "#9CA3AF"
                                        }
                                    />
                                </View>

                                <Text
                                    className={`mt-1.5 text-center text-xs ${
                                        active
                                            ? "font-poppins-semibold text-primary"
                                            : completed
                                              ? "font-poppins-medium text-gray-700"
                                              : "font-poppins text-gray-400"
                                    }`}
                                >
                                    {stepLabels[step]}
                                </Text>
                            </View>

                            {/* Line Connector */}
                            {!isLast && (
                                <View className="flex-1 h-[2px] mx-1 -mt-5 bg-gray-200 overflow-hidden">
                                    <View
                                        className={`h-full bg-green-900 transition-all ${
                                            index < currentIndex
                                                ? "w-full"
                                                : "w-0"
                                        }`}
                                    />
                                </View>
                            )}
                        </React.Fragment>
                    )
                })}
            </View>
        </View>
    )
}
