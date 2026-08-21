import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TextInputProps,
} from "react-native"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import React, { forwardRef, useState } from "react"
import Feather from "@react-native-vector-icons/feather"
import { formatCurrency } from "@/utils/formatCurrency"

interface AppTextInputProps<T extends FieldValues> extends TextInputProps {
    control: Control<T>
    name: Path<T>
    label: string
    placeholder?: string
    type: "generic" | "password" | "currency"
}

type CustomTextInputComponent = <T extends FieldValues>(
    props: AppTextInputProps<T> & { ref?: React.Ref<TextInput> }
) => React.ReactElement

const CustomTextInput = forwardRef<TextInput, AppTextInputProps<FieldValues>>(
    <T extends FieldValues>(
        {
            control,
            name,
            label,
            type = "generic",
            placeholder,
            ...props
        }: AppTextInputProps<T>,
        ref: React.ForwardedRef<TextInput>
    ) => {
        const [visible, setVisible] = useState(type === "password")

        return (
            <View className="gap-1">
                <Text className="font-poppins-semibold text-gray-800">
                    {label}
                </Text>

                <Controller
                    control={control}
                    name={name}
                    render={({ field, fieldState }) => (
                        <View className="flex-col">
                            <View className="flex-row items-center rounded-2xl border border-border bg-surface">
                                {type === "currency" && (
                                    <Text className="font-poppins-semibold text-gray-500 ml-4">
                                        Rp
                                    </Text>
                                )}
                                <TextInput
                                    {...props}
                                    ref={ref}
                                    value={
                                        type === "currency"
                                            ? formatCurrency(field.value ?? "")
                                            : (field.value?.toString() ?? "")
                                    }
                                    onChangeText={(text) => {
                                        if (type === "currency")
                                            field.onChange(
                                                Number(text.replace(/\D/g, ""))
                                            )
                                        else field.onChange(text)
                                    }}
                                    onBlur={field.onBlur}
                                    placeholder={placeholder}
                                    secureTextEntry={
                                        type === "password" && visible
                                    }
                                    className="flex-1 px-4 py-4 text-gray-800 text-sm"
                                />

                                {type === "password" && (
                                    <TouchableOpacity
                                        className="px-4"
                                        onPress={() => setVisible(!visible)}
                                    >
                                        <Feather
                                            color="gray"
                                            name={visible ? "eye" : "eye-off"}
                                            size={16}
                                        />
                                    </TouchableOpacity>
                                )}
                            </View>

                            {fieldState.error && (
                                <Text className="p-2 text-sm text-error">
                                    {fieldState.error.message}
                                </Text>
                            )}
                        </View>
                    )}
                />
            </View>
        )
    }
) as unknown as CustomTextInputComponent

export default CustomTextInput
