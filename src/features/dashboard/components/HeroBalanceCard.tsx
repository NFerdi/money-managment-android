import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import {
    BalanceOverviewDashboard,
    CashflowOverviewDashboard,
} from "../types/dashboardOverviewResponse"
import { formatCurrency } from "@/utils/formatCurrency"
import { formatShortAmount } from "@/utils/formatShortCurrency"

interface Props {
    balance?: BalanceOverviewDashboard
    cashflow?: CashflowOverviewDashboard
}

export default function HeroBalanceCard({ balance, cashflow }: Props) {
    return (
        <View className="bg-emerald-800 p-4 rounded-2xl gap-4">
            <View className="flex flex-row items-center justify-between">
                <Text className="font-poppins-semibold text-white/80">
                    Total Saldo
                </Text>
                <TouchableOpacity className="flex flex-row items-center gap-1 py-1 px-3 rounded-2xl bg-white/10">
                    <Ionicons name="eye" color="#fff" size={15} />
                    <Text className="text-xs font-poppins-semibold text-white">
                        Sembunyikan
                    </Text>
                </TouchableOpacity>
            </View>
            <Text className="text-white font-poppins-bold text-2xl">
                RP{" "}
                {balance?.total
                    ? formatCurrency(balance.total)
                    : formatCurrency(0)}
            </Text>
            <View className="flex-row gap-2">
                <View className="flex-1 bg-white/10 py-1 px-3 rounded-xl">
                    <View className="flex-row gap-1">
                        <Ionicons name="arrow-up" color="#4ade80" />
                        <Text className="font-poppins-semibold text-xs text-green-400">
                            Pemasukan
                        </Text>
                    </View>
                    <Text className="font-poppins-bold text-sm text-white">
                        {formatShortAmount(
                            cashflow?.income ? cashflow?.income : 0
                        )}
                    </Text>
                </View>
                <View className="flex-1 bg-white/10 py-1 px-3 rounded-xl">
                    <View className="flex-row gap-1">
                        <Ionicons name="arrow-down" color="#f87171" />
                        <Text className="font-poppins-semibold text-xs text-red-400">
                            Pengeluaran
                        </Text>
                    </View>
                    <Text className="font-poppins-bold text-sm text-white">
                        {formatShortAmount(
                            cashflow?.expense ? cashflow?.expense : 0
                        )}
                    </Text>
                </View>
                <View className="flex-1 bg-white/10 py-1 px-3 rounded-xl">
                    <View className="flex-row gap-1">
                        <Ionicons name="card" color="#60a5fa" />
                        <Text className="font-poppins-semibold text-xs text-blue-400">
                            Menyimpan
                        </Text>
                    </View>
                    <Text className="font-poppins-bold text-sm text-white">
                        {formatShortAmount(
                            cashflow?.saving ? cashflow?.saving : 0
                        )}
                    </Text>
                </View>
            </View>
        </View>
    )
}
