import { View, Text } from "react-native"
import React from "react"
import { TransactionEntity } from "../entity/transaction.entity"
import { formatCurrency } from "@/utils/formatCurrency"
import { formatDate } from "@/utils/formatDate"
import { RecentTransactionOverviewDashboard } from "@/features/dashboard/types/dashboardOverviewResponse"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    transaction: TransactionEntity | RecentTransactionOverviewDashboard
}

export default function TransactionItem({ transaction }: Props) {
    const isTransfer = transaction.type === "TRANSFER"
    const isExpense = transaction.type === "EXPENSE"

    const title =
        transaction.notes ||
        transaction.category?.name ||
        (isTransfer ? "Transfer" : isExpense ? "Pengeluaran" : "Pemasukan")

    const subtitle = isTransfer
        ? `${transaction.wallet?.name} → ${transaction.to_wallet?.name || "Dompet Tujuan"}`
        : `${transaction.category?.name || "Tanpa Kategori"} - ${transaction.wallet?.name}`

    const badgeBg = isTransfer
        ? "bg-blue-100 border-blue-200"
        : isExpense
          ? "bg-red-100 border-red-200"
          : "bg-emerald-100 border-emerald-200"

    const amountColor = isTransfer
        ? "text-gray-800"
        : isExpense
          ? "text-red-600"
          : "text-emerald-600"

    const amountPrefix = isTransfer ? "" : isExpense ? "- " : "+ "

    return (
        <View className="bg-white rounded-2xl p-4 gap-1 border border-gray-100 shadow-sm flex-row justify-between items-center">
            <View className="flex-row gap-3 items-center">
                <View
                    className={`${badgeBg} border p-2.5 rounded-full aspect-square items-center justify-center`}
                >
                    {isTransfer ? (
                        <Ionicons
                            name="arrow-up-left-box-sharp"
                            size={18}
                            color="#1e40af"
                        />
                    ) : transaction.category?.icon ? (
                        <Text className="text-base">
                            {transaction.category.icon}
                        </Text>
                    ) : (
                        <Ionicons
                            name="wallet"
                            size={18}
                            color={isExpense ? "#dc2626" : "#059669"}
                        />
                    )}
                </View>

                <View className="flex-col">
                    <Text className="font-poppins-semibold text-gray-800 text-sm">
                        {title}
                    </Text>
                    <Text className="font-poppins text-gray-600 text-xs">
                        {subtitle}
                    </Text>
                </View>
            </View>

            <View className="flex-col items-end">
                <Text className={`font-poppins-semibold ${amountColor}`}>
                    {amountPrefix}RP {formatCurrency(transaction.amount)}
                </Text>
                <Text className="font-poppins text-gray-600 text-xs text-right">
                    {formatDate(transaction.transaction_date)}
                </Text>
            </View>
        </View>
    )
}
