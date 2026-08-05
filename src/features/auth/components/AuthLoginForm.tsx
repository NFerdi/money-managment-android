import { View, Text, TextInput } from "react-native"
import React, { useRef } from "react"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { Control } from "react-hook-form"
import { LoginForm } from "../schemas/loginSchema"

type Props = {
    control: Control<LoginForm>
    handleSubmit: () => void
}

export default function AuthLoginForm({ control, handleSubmit }: Props) {
    const passwordRef = useRef<TextInput>(null)

    return (
        <View className="gap-4">
            <CustomTextInput
                label="Email"
                placeholder="seseorang@gmail.com"
                name="email"
                type="generic"
                control={control}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <CustomTextInput
                label="Password"
                placeholder="*******"
                name="password"
                type="password"
                control={control}
                returnKeyType="done"
                ref={passwordRef}
                onSubmitEditing={handleSubmit}
            />
        </View>
    )
}
