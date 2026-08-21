import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Ionicons } from "@expo/vector-icons"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { isoDate } from "@/utils/isoDate"

interface FormDatePickerProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    minimumDate?: Date
    maximumDate?: Date
}

export default function FormDatePicker<T extends FieldValues>({
    control,
    name,
    label,
    minimumDate,
    maximumDate,
}: FormDatePickerProps<T>) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <View className="gap-1.5 flex-1">
                    <Text className="font-poppins-semibold text-xs text-gray-700">
                        {label}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setIsOpen(true)}
                        className="flex-row items-center justify-between border border-gray-200 rounded-2xl px-3 py-2.5 bg-gray-50/50 active:border-green-800"
                    >
                        <Text className="font-poppins-medium text-xs text-gray-800">
                            {isoDate(value)}
                        </Text>
                        <Ionicons
                            name="calendar-outline"
                            size={16}
                            color="#14532d"
                        />
                    </TouchableOpacity>

                    {error && (
                        <Text className="text-[10px] text-red-500 font-poppins-regular">
                            {error.message}
                        </Text>
                    )}

                    <DateTimePickerModal
                        isVisible={isOpen}
                        mode="date"
                        date={value || new Date()}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                        onConfirm={(selectedDate) => {
                            setIsOpen(false)
                            onChange(selectedDate)
                        }}
                        onCancel={() => setIsOpen(false)}
                        confirmTextIOS="Pilih"
                        cancelTextIOS="Batal"
                        locale="id_ID"
                    />
                </View>
            )}
        />
    )
}
