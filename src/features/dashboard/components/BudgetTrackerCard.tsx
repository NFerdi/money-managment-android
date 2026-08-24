import { View, Text } from "react-native"
import React from "react"
import ProgressBar from "@/shared/components/ProgressBar"
import {
    BudgetOverviewDashboard,
    CashflowOverviewDashboard,
} from "../types/dashboardOverviewResponse"
import { formatCurrency } from "@/utils/formatCurrency"

interface Props {
    budgetOverviewDashboard?: BudgetOverviewDashboard
    cashflowOverviewDashboard?: CashflowOverviewDashboard
}

export default function BudgetTrackerCard({
    budgetOverviewDashboard,
    cashflowOverviewDashboard,
}: Props) {
    const expense = cashflowOverviewDashboard?.expense ?? 0
    const target = budgetOverviewDashboard?.planned_income ?? 0

    const percentage = target > 0 ? Math.round((expense / target) * 100) : 0

    return (
        <View className="bg-white rounded-2xl p-4 gap-2 shadow-sm">
            {budgetOverviewDashboard && cashflowOverviewDashboard ? (
                <>
                    <View className="flex-row justify-between items-center">
                        <Text className="font-poppins-bold text-gray-800">
                            {budgetOverviewDashboard.name}
                        </Text>
                        <Text className="font-poppins-semibold text-green-800 text-sm">
                            {percentage}% Terpakai
                        </Text>
                    </View>
                    <ProgressBar current={expense} target={target} />
                    <View className="flex-row justify-between items-center">
                        <Text className="font-poppins text-gray-600 text-xs">
                            Terpakai: RP {formatCurrency(expense)}
                        </Text>
                        <Text className="font-poppins text-gray-600 text-xs">
                            Target: RP {formatCurrency(target)}
                        </Text>
                    </View>
                </>
            ) : (
                <Text>Budget belum ada</Text>
            )}
        </View>
    )
}
