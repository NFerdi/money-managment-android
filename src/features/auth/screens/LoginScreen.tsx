import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginForm, loginSchema } from "../schemas/loginSchema"
import { useLogin } from "../hook/useLogin"

export default function LoginScreen() {
    const { control, handleSubmit } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "ferdi@test.com",
            password: "ferdidoang",
        },
    })

    const loginMutation = useLogin()

    const onSubmit = (data: LoginForm) => {
        loginMutation.mutate(data)
    }

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 p-10 bg-primary gap-10">
                <Image
                    source={require("../../../assets/image/Logo.png")}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                />

                <View>
                    <Text className="font-poppins-bold text-xl color-gray-700">
                        MoneyControl
                    </Text>
                    <Text className="font-poppins text-sm color-gray-600">
                        Login sekarang untuk mendapatkan akses mengelola
                        keuangan.
                    </Text>
                </View>

                <View className="gap-4">
                    <CustomTextInput
                        label="Email"
                        placeholder="seseorang@gmail.com"
                        name="email"
                        type="generic"
                        control={control}
                    />
                    <CustomTextInput
                        label="Password"
                        placeholder="*******"
                        name="password"
                        type="password"
                        control={control}
                    />
                </View>

                <View className="gap-3">
                    <TouchableOpacity
                        activeOpacity={0.9}
                        className="w-full py-4 bg-green-900 rounded-3xl "
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text className="text-center text-white font-poppins-semibold">
                            Login Sekarang
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row gap-1 justify-center">
                        <Text className="font-poppins text-sm">
                            Belum punya akun?
                        </Text>
                        <Text className="font-poppins text-sm text-orange-600">
                            Daftar sekarang
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
