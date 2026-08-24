import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import React from "react"
import { router } from "expo-router"
import { ROUTES } from "@/shared/constants/routeConstant"
import { RecentTransactionOverviewDashboard } from "../types/dashboardOverviewResponse"
import { formatCurrency } from "@/utils/formatCurrency"
import { formatDate } from "@/utils/formatDate"
import TransactionItem from "@/features/transaction/components/TransactionItem"

interface Props {
    transactions?: RecentTransactionOverviewDashboard[]
}

export default function RecentTransaction({ transactions }: Props) {
    return (
        <View className="gap-2">
            <View className="flex-row justify-between items-center">
                <Text className="font-poppins-bold text-gray-800">
                    Transaksi
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.push(ROUTES.TRANSACTION)}
                >
                    <Text className="font-poppins-semibold text-green-800 text-sm">
                        Lihat Semua
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
                className="-mx-4 px-4"
            >
                {transactions?.length !== 0 ? (
                    transactions?.map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))
                ) : (
                    <Text></Text>
                )}
            </ScrollView>
        </View>
    )
}
