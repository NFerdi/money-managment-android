import { View, Text, Keyboard } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import ButtonSetup from "../components/ButtonSetup"

export default function WalletSetupScreen() {
    const onSubmit = () => {
        Keyboard.dismiss()
    }

    return (
        <SafeAreaView className="flex-1 bg-green-50 p-4 gap-4">
            <SetupProgres currentStep="BUDGET" />

            <View className="flex-1">
                <View className="px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md gap-8"></View>
            </View>
            <ButtonSetup onSubmit={() => {}} textContent="Buat Dompet" />
        </SafeAreaView>
    )
}
