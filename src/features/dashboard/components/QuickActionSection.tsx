import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import QuickActionButton from "./QuickActionButton"

export default function QuickActionSection() {
    return (
        <View className="gap-2">
            <View className="flex-row justify-between items-center">
                <Text className="font-poppins-bold text-gray-800">
                    Menu Cepat
                </Text>
                <TouchableOpacity activeOpacity={0.7} className="p-1">
                    <Ionicons
                        name="settings-outline"
                        size={18}
                        color="#4b5563"
                    />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 10 }}
                className="-mx-4 px-4"
            >
                <QuickActionButton name="Budget" icon="pie-chart-outline" />
                <QuickActionButton name="Goal" icon="trophy-outline" />
                <QuickActionButton name="Utang" icon="hand-left-outline" />
                <QuickActionButton name="Laporan" icon="stats-chart-outline" />
                <QuickActionButton name="Scanner" icon="camera-outline" />
            </ScrollView>
        </View>
    )
}
