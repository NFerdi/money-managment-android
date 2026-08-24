import { View, Text } from "react-native"
import React from "react"
import { getBankLogo } from "@/utils/logoProvider"
import { Ionicons } from "@expo/vector-icons"
import { WalletOverviewDashboard } from "../types/dashboardOverviewResponse"
import { formatCurrency } from "@/utils/formatCurrency"

interface Props {
    wallet: WalletOverviewDashboard
}

export default function WalletCard({ wallet }: Props) {
    const LogoComponent = getBankLogo(wallet.provider.name)

    return (
        <View className="bg-white rounded-2xl p-4 gap-3 border border-gray-100 shadow-sm flex-row items-center">
            {LogoComponent ? (
                <LogoComponent width={24} height={24} />
            ) : (
                <Ionicons name="wallet-outline" size={22} color="#166534" />
            )}
            <View>
                <Text className="font-poppins text-gray-600 text-xs">
                    {wallet.name}
                </Text>
                <Text className="font-poppins-bold text-gray-800 text-sm">
                    RP {formatCurrency(wallet.balance)}
                </Text>
            </View>
        </View>
    )
}
