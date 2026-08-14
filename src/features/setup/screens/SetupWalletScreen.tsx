import { View, Text, Keyboard } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import ButtonSetup from "../components/ButtonSetup"
import {
    createWalletForm,
    createWalletSchema,
} from "@/wallet/schemas/CreateWalletSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import SetupWalletForm from "../components/SetupWalletForm"
import { useWalletProvider } from "../hooks/useWalletProvider"
import { useCreateWallet } from "../hooks/useCreateWallet"
import { useUpdateStep } from "../hooks/UseUpdateStep"

export default function WalletSetupScreen() {
    const { data: providers, isPending } = useWalletProvider()

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

    const { mutate: mutateCreateWallet } = useCreateWallet()
    const { mutate: mutateUpdateStep } = useUpdateStep()
    const onSubmit = (data: createWalletForm) => {
        Keyboard.dismiss()

        mutateCreateWallet(data, {
            onSuccess: () => {
                mutateUpdateStep("CATEGORY")
            },
        })
    }

    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 px-5 pb-8 pt-4">
                <SetupProgres currentStep="WALLET" />

                <View className="flex-1">
                    <View className="mt-6 gap-3 px-2">
                        <Text className="font-poppins text-center text-gray-600">
                            Mari siapkan akun Anda dalam waktu kurang dari 2
                            menit.
                        </Text>
                    </View>

                    <SetupWalletForm
                        watch={watch}
                        providers={providers ?? []}
                        control={control}
                        handleSubmit={() => handleSubmit(onSubmit)}
                    />
                </View>

                <ButtonSetup
                    onSubmit={handleSubmit(onSubmit)}
                    textContent="Mulai Sekarang"
                    isPending={isPending}
                />
            </View>
        </SafeAreaView>
    )
}
