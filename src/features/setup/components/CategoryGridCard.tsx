import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { DefaultCategory } from "@/features/category/enitity/category.entity"

type Props = {
    filteredCategories: DefaultCategory[]
    selectedIds: number[]
    toggleSelect: (id: number) => void
}

export default function CategoryGridCard({
    filteredCategories,
    selectedIds,
    toggleSelect,
}: Props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-row flex-wrap justify-between gap-y-4">
                {filteredCategories.map((category) => {
                    const isSelected = selectedIds.includes(category.id)

                    return (
                        <TouchableOpacity
                            key={category.id}
                            activeOpacity={0.7}
                            onPress={() => toggleSelect(category.id)}
                            className={`relative w-[31%] items-center justify-center px-1 py-3 border rounded-2xl bg-white gap-2 transition-all ${
                                isSelected
                                    ? "border-green-300 shadow-md shadow-green-900"
                                    : "border-gray-100 shadow-sm"
                            }`}
                        >
                            {isSelected && (
                                <View className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-900 items-center justify-center z-10">
                                    <Ionicons
                                        name="checkmark"
                                        size={12}
                                        color="#FFFFFF"
                                    />
                                </View>
                            )}

                            <Text className="text-center text-xl">
                                {category.icon}
                            </Text>
                            <Text
                                className={`text-center font-poppins-bold text-sm ${
                                    isSelected
                                        ? "text-green-900"
                                        : "text-gray-600"
                                }`}
                            >
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}
