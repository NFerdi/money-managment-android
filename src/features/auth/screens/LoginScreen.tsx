import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Keyboard,
} from "react-native"
import React, { useRef } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginForm, loginSchema } from "../schemas/loginSchema"
import { useLogin } from "../hooks/useLogin"
import { router } from "expo-router"
import { ROUTES } from "@/shared/constants/routeConstant"
import { TextInput } from "react-native-gesture-handler"
import AuthHeader from "../components/AuthHeader"
import AuthLoginForm from "../components/AuthLoginForm"
import ButtonSetup from "@/shared/components/ButtonSubmit"

export default function LoginScreen() {
    const { control, handleSubmit } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        mode: "onTouched",
        defaultValues: {
            email: "ferdi@test.com",
            password: "ferdidoang",
        },
    })

    const { mutate, isPending } = useLogin()

    const onSubmit = (data: LoginForm) => {
        Keyboard.dismiss()
        mutate(data)
    }

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 p-10 bg-background gap-10">
                <AuthHeader title="Login" />

                <AuthLoginForm
                    control={control}
                    handleSubmit={handleSubmit(onSubmit)}
                />

                <View className="gap-3">
                    <ButtonSetup
                        onSubmit={handleSubmit(onSubmit)}
                        isPending={isPending}
                    >
                        <Text>Login sekarang</Text>
                    </ButtonSetup>
                    <View className="flex-row gap-1 justify-center p-2">
                        <Text className="font-poppins">Belum punya akun?</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => router.replace(ROUTES.SIGNUP)}
                        >
                            <Text className="font-poppins text-link">
                                Daftar sekarang
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
