import Feather from "@expo/vector-icons/Feather"
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from "react"
import { Keyboard, Pressable, Text, View } from "react-native"

import SelectBottomSheet, { SelectBottomSheetRef } from "./SelectBottomSheet"
import { SelectInputProps } from "./type"

export interface SelectInputRef {
    focus: () => void
}

const SelectInput = forwardRef<SelectInputRef, SelectInputProps>(
    (
        {
            label,
            placeholder = "Pilih",
            title,
            value,
            options,
            loading,
            disabled,
            error,
            onChange,
        },
        ref
    ) => {
        const bottomSheet = useRef<SelectBottomSheetRef>(null)

        const selected = useMemo(() => {
            return options.find((item) => item.value === value)
        }, [options, value])

        function open() {
            if (disabled) return

            Keyboard.dismiss()
            bottomSheet.current?.present()
        }

        useImperativeHandle(ref, () => ({
            focus() {
                open()
            },
        }))

        return (
            <View className="gap-1">
                {!!label && (
                    <Text className="mb-2 font-poppins-medium text-gray-700">
                        {label}
                    </Text>
                )}

                <Pressable
                    onPress={open}
                    className={`h-14 rounded-xl border px-4 flex-row items-center justify-between ${error ? "border-red-500" : "border-neutral-300"} ${disabled ? "opacity-50" : ""}`}
                >
                    <View className="flex-row items-center flex-1">
                        {selected?.icon && (
                            <View className="mr-3">{selected.icon}</View>
                        )}

                        <View className="flex-1">
                            <Text
                                numberOfLines={1}
                                className={`font-poppins ${
                                    selected ? "text-black" : "text-neutral-400"
                                }`}
                            >
                                {selected?.label ?? placeholder}
                            </Text>

                            {selected?.description && (
                                <Text
                                    numberOfLines={1}
                                    className="font-poppins text-xs text-neutral-500"
                                >
                                    {selected.description}
                                </Text>
                            )}
                        </View>
                    </View>

                    <Feather name="chevron-down" size={20} color="#737373" />
                </Pressable>

                {!!error && (
                    <Text className="mt-1 text-xs text-red-500">{error}</Text>
                )}

                <SelectBottomSheet
                    ref={bottomSheet}
                    title={title ?? label}
                    value={value}
                    options={options}
                    loading={loading}
                    onChange={onChange}
                />
            </View>
        )
    }
)

export default SelectInput
