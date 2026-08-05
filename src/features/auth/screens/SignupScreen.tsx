import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInput,
    Keyboard,
} from "react-native"
import React, { useRef } from "react"
import { SignupForm, signupSchema } from "../schemas/signupSchema"
import { useSignup } from "../hooks/useSignup"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { ROUTES } from "@/shared/constants/routeConstant"
import AuthButton from "@/features/auth/components/AuthButton"
import AuthHeader from "../components/AuthHeader"
import AuthSignupForm from "../components/AuthSignupForm"

export default function SignupScreen() {
    const { control, handleSubmit } = useForm<SignupForm>({
        resolver: zodResolver(signupSchema),
        mode: "onTouched",
    })

    const { mutate, isPending } = useSignup()

    const onSubmit = (data: SignupForm) => {
        Keyboard.dismiss()
        mutate(data)
    }
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 p-10 bg-background gap-10">
                <AuthHeader title="Daftar" />

                <AuthSignupForm
                    control={control}
                    handleSubmit={handleSubmit(onSubmit)}
                />

                <View className="gap-3">
                    <AuthButton
                        handleSubmit={handleSubmit(onSubmit)}
                        isPending={isPending}
                    >
                        Daftar sekarang
                    </AuthButton>

                    <View className="flex-row gap-1 justify-center p-2">
                        <Text className="font-poppins">Sudah punya akun?</Text>

                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => router.replace(ROUTES.LOGIN)}
                        >
                            <Text className="font-poppins text-link">
                                Login sekarang
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
