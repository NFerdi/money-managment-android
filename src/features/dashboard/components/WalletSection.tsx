import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import React from "react"
import WalletCard from "./WalletCard"
import { router } from "expo-router"
import { ROUTES } from "@/shared/constants/routeConstant"
import {
    BalanceOverviewDashboard,
    WalletOverviewDashboard,
} from "../types/dashboardOverviewResponse"

interface Props {
    wallets?: WalletOverviewDashboard[]
}

export default function WalletSection({ wallets }: Props) {
    return (
        <View className="gap-2">
            <View className="flex-row justify-between items-center">
                <Text className="font-poppins-bold text-gray-800">Dompet</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.push(ROUTES.WALLET)}
                >
                    <Text className="font-poppins-semibold text-green-800 text-sm">
                        Lihat Detail
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
                className="-mx-4 px-4"
            >
                {wallets?.length !== 0 ? (
                    wallets?.map((wallet) => (
                        <WalletCard key={wallet.id} wallet={wallet} />
                    ))
                ) : (
                    <Text></Text>
                )}
            </ScrollView>
        </View>
    )
}
