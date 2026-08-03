import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TextInputProps,
} from "react-native"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import React, { useState } from "react"
import Feather from "@react-native-vector-icons/feather"

type Props = {
    name: string
    placeHolder: string
    type: "generic" | "password"
}

interface AppTextInputProps<T extends FieldValues> extends TextInputProps {
    control: Control<T>
    name: Path<T>
    label: string
    placeHolder: string
    type: "generic" | "password"
}

export default function CustomTextInput<T extends FieldValues>({
    control,
    name,
    label,
    type,
    placeholder,
    ...props
}: AppTextInputProps<T>) {
    const [visible, setVisible] = useState(type === "password" ? true : false)

    return (
        <View className="gap-1">
            <Text className="font-poppins-semibold">{label}</Text>
            <View className="flex-row items-center bg-white rounded-xl shadow-sm">
                <Controller
                    control={control}
                    name={name}
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                                secureTextEntry={type === "password" && visible}
                                className="flex-1 p-4 text-gray-500 rounded-xl"
                            />
                            {fieldState.error && (
                                <Text>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />
                {type === "password" && (
                    <TouchableOpacity
                        onPress={() => setVisible(!visible)}
                        style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: [{ translateY: -10 }],
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {visible ? (
                            <Feather color="gray" name="eye" size={16} />
                        ) : (
                            <Feather color="gray" name="eye-off" size={16} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
