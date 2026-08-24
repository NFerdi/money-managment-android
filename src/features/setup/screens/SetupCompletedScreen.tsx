import { View, Text, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import { useUpdateStep } from "../hooks/useUpdateStep"
import ButtonSubmit from "../../../shared/components/ButtonSubmit"
import { Ionicons } from "@expo/vector-icons"

export default function Welcome() {
    const { mutate, isPending } = useUpdateStep()

    return (
        <SafeAreaView className="flex-1 bg-green-50">
            <View className="flex-1 px-5 pb-8 pt-4">
                <SetupProgres currentStep="COMPLETED" />

                <View className="flex-1 items-center justify-center">
                    <Image
                        source={require("@/assets/image/vector-setup.png")}
                        resizeMode="contain"
                        className="h-56 w-5h-56"
                    />

                    <View className="mt-6 gap-3 px-2">
                        <Text className="text-2xl font-poppins-bold text-gray-800 text-center mb-2">
                            Selamat Datang di{" "}
                            <Text className="text-green-900">Appku!</Text>
                        </Text>
                        <Text className="text-sm font-poppins-regular text-gray-500 text-center mb-8 px-2">
                            Mari siapkan akun Anda dalam waktu kurang dari 2
                            menit untuk mulai mengelola keuangan.
                        </Text>

                        <View className=" bg-white p-4 rounded-2xl border border-gray-100 shadow-sm gap-3">
                            <View className="flex-row items-center gap-3">
                                <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center">
                                    <Ionicons
                                        name="wallet-outline"
                                        size={18}
                                        color="#14532d"
                                    />
                                </View>
                                <Text className="font-poppins-medium text-xs text-gray-700 flex-1">
                                    Atur dompet & saldo awalmu
                                </Text>
                            </View>

                            <View className="flex-row items-center gap-3">
                                <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center">
                                    <Ionicons
                                        name="grid-outline"
                                        size={18}
                                        color="#14532d"
                                    />
                                </View>
                                <Text className="font-poppins-medium text-xs text-gray-700 flex-1">
                                    Pilih kategori transaksi harian
                                </Text>
                            </View>

                            <View className="flex-row items-center gap-3">
                                <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center">
                                    <Ionicons
                                        name="pie-chart-outline"
                                        size={18}
                                        color="#14532d"
                                    />
                                </View>
                                <Text className="font-poppins-medium text-xs text-gray-700 flex-1">
                                    Tentukan batasan budget bulanan
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <ButtonSubmit
                    onSubmit={() => mutate("WALLET")}
                    isPending={isPending}
                >
                    <Text>Mulai Sekarang</Text>
                </ButtonSubmit>
            </View>
        </SafeAreaView>
    )
}
