import { View, TextInput } from "react-native"
import React, { useRef } from "react"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { SignupForm } from "../schemas/signupSchema"
import { Control } from "react-hook-form"

type Props = {
    control: Control<SignupForm>
    handleSubmit: () => void
}

export default function AuthSignupForm({ control, handleSubmit }: Props) {
    const emailRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)
    return (
        <View className="gap-4">
            <CustomTextInput
                label="Username"
                placeholder="seseorang"
                name="username"
                type="generic"
                control={control}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
            />
            <CustomTextInput
                ref={emailRef}
                label="Email"
                placeholder="seseorang@gmail.com"
                name="email"
                type="generic"
                control={control}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <CustomTextInput
                ref={passwordRef}
                label="Password"
                placeholder="*******"
                name="password"
                type="password"
                control={control}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
            />
        </View>
    )
}
