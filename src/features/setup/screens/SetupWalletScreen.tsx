import { View, Text, Keyboard } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import ButtonSubmit from "../../../shared/components/ButtonSubmit"
import {
    createWalletForm,
    createWalletSchema,
} from "@/features/wallet/schemas/CreateWalletSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import SetupWalletForm from "../components/SetupWalletForm"
import { useWalletProvider } from "../../wallet/hooks/useWalletProvider"
import { useCreateWallet } from "../../wallet/hooks/useCreateWallet"

export default function WalletSetupScreen() {
    const { data: providers } = useWalletProvider()

    const { control, handleSubmit, watch } = useForm<createWalletForm>({
        resolver: zodResolver(createWalletSchema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            balance: 0,
            type: "BANK",
            provider_id: 0,
        },
    })

    const { mutate: mutateCreateWallet, isPending: isPendingCreateWallet } =
        useCreateWallet()
    const onSubmit = (data: createWalletForm) => {
        Keyboard.dismiss()

        mutateCreateWallet(data)
    }

    return (
        <SafeAreaView className="flex-1 bg-green-50 p-4 gap-4">
            <SetupProgres currentStep="WALLET" />

            <View className="flex-1">
                <View className="px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md gap-8">
                    <View className="gap-1 mb-2">
                        <Text className="text-xl text-center font-poppins-bold text-gray-800">
                            Atur Dompet Utama
                        </Text>
                        <Text className="text-xs text-center font-poppins-regular text-gray-500">
                            Masukkan detail akun keuangan yang sering kamu
                            gunakan.
                        </Text>
                    </View>
                    <SetupWalletForm
                        watch={watch}
                        providers={providers ?? []}
                        control={control}
                    />
                </View>
            </View>
            <ButtonSubmit
                onSubmit={handleSubmit(onSubmit)}
                isPending={isPendingCreateWallet}
            >
                <Text>Buat Dompet</Text>
            </ButtonSubmit>
        </SafeAreaView>
    )
}
