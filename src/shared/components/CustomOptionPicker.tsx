import React from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import {
    Control,
    Controller,
    FieldValues,
    Path,
    useFormState,
} from "react-hook-form"
import { SelectOption } from "./CustomSelectInput/type"

interface Props<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    data?: SelectOption[]
    variant?: "horizontal" | "grid"
    columns?: number
    onSelect?: (value: any) => void
}

export const CustomOptionPicker = <T extends FieldValues>({
    control,
    name,
    label,
    data = [],
    variant = "horizontal",
    columns = 4,
    onSelect,
}: Props<T>) => {
    const { errors } = useFormState({ control })
    const fieldError = errors[name]?.message as string | undefined

    return (
        <View className="space-y-1.5 gap-2">
            <View className="flex-row justify-between items-center">
                <Text className="font-poppins-semibold text-gray-800">
                    {label}
                </Text>
                {variant === "horizontal" && (
                    <Text className="text-[10px] text-gray-400">
                        Geser ke samping →
                    </Text>
                )}
            </View>

            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => {
                    if (variant === "horizontal") {
                        return (
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <View className="flex-row gap-2 py-1">
                                    {data.map((item) => {
                                        const isSelected = value === item.value
                                        return (
                                            <TouchableOpacity
                                                key={item.value}
                                                onPress={() => {
                                                    onChange(item.value)
                                                    onSelect?.(item.value)
                                                }}
                                                className={`px-3.5 py-2.5 rounded-2xl border flex-row items-center gap-1.5 ${
                                                    isSelected
                                                        ? "bg-emerald-50 border-emerald-800"
                                                        : "bg-white border-gray-200"
                                                }`}
                                            >
                                                {item.icon && (
                                                    <View className="items-center justify-center">
                                                        {typeof item.icon ===
                                                        "string" ? (
                                                            <Text className="text-xs">
                                                                {item.icon}
                                                            </Text>
                                                        ) : (
                                                            item.icon
                                                        )}
                                                    </View>
                                                )}
                                                <Text
                                                    className={`text-xs font-semibold ${
                                                        isSelected
                                                            ? "text-emerald-800"
                                                            : "text-gray-600"
                                                    }`}
                                                >
                                                    {item.label}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        )
                    }

                    return (
                        <View className="max-h-44">
                            <ScrollView
                                nestedScrollEnabled
                                showsVerticalScrollIndicator={false}
                            >
                                <View className="flex-row flex-wrap gap-2">
                                    {data.map((item) => {
                                        const isSelected = value === item.value
                                        const itemWidth =
                                            `${100 / columns - 2}%` as any

                                        return (
                                            <TouchableOpacity
                                                key={item.value}
                                                onPress={() =>
                                                    onChange(item.value)
                                                }
                                                style={{ width: itemWidth }}
                                                className={`p-2.5 items-center justify-center rounded-2xl border ${
                                                    isSelected
                                                        ? "bg-emerald-50 border-emerald-800"
                                                        : "bg-white border-gray-200"
                                                }`}
                                            >
                                                {item.icon && (
                                                    <View className="items-center justify-center">
                                                        {typeof item.icon ===
                                                        "string" ? (
                                                            <Text className="text-xs">
                                                                {item.icon}
                                                            </Text>
                                                        ) : (
                                                            item.icon
                                                        )}
                                                    </View>
                                                )}
                                                <Text
                                                    numberOfLines={1}
                                                    className={`text-[10px] mt-1 text-center ${
                                                        isSelected
                                                            ? "text-emerald-800"
                                                            : "text-gray-600"
                                                    }`}
                                                >
                                                    {item.label}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    )
                }}
            />
            {fieldError && (
                <Text className="text-red-500 text-[10px]">{fieldError}</Text>
            )}
        </View>
    )
}
