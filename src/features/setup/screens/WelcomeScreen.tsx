import { View, Text, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import { useUpdateStep } from "../hooks/useUpdateStep"
import ButtonSetup from "../components/ButtonSetup"

export default function Welcome() {
    const { mutate, isPending } = useUpdateStep()

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5 pb-8 pt-4">
                <SetupProgres currentStep="WELCOME" />

                <View className="flex-1 items-center justify-center">
                    <Image
                        source={require("@/assets/image/vector-setup.png")}
                        resizeMode="contain"
                        className="h-56 w-5h-56"
                    />

                    <View className="mt-6 gap-3 px-2">
                        <Text className="font-poppins-bold text-xl text-center text-gray-700">
                            Selamat Datang!
                        </Text>
                        <Text className="font-poppins text-center text-gray-600">
                            Mari siapkan akun Anda dalam waktu kurang dari 2
                            menit.
                        </Text>
                    </View>
                </View>

                <ButtonSetup
                    onSubmit={() => mutate("WALLET")}
                    textContent="Mulai Sekarang"
                    isPending={isPending}
                />
            </View>
        </SafeAreaView>
    )
}
