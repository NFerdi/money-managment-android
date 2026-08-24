import { View, Text, TouchableOpacity, Keyboard } from "react-native"
import React from "react"
import { SignupForm, signupSchema } from "../schemas/signupSchema"
import { useSignup } from "../hooks/useSignup"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from "expo-router"
import { ROUTES } from "@/shared/constants/routeConstant"
import AuthHeader from "../components/AuthHeader"
import AuthSignupForm from "../components/AuthSignupForm"
import ButtonSubmit from "@/shared/components/ButtonSubmit"

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
                    <ButtonSubmit
                        onSubmit={handleSubmit(onSubmit)}
                        isPending={isPending}
                    >
                        <Text>Daftar sekarang</Text>
                    </ButtonSubmit>
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
