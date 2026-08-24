import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { useAuthStore } from "@/features/auth/store/authStore"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { useLogout } from "@/features/auth/hooks/useLogout"
import BottomBar from "@/shared/components/BottomBar/BottomBar"
import DashboardHeader from "../components/DashboardHeader"
import HeroBalanceCard from "../components/HeroBalanceCard"
import BudgetTrackerCard from "../components/BudgetTrackerCard"
import WalletSection from "../components/WalletSection"
import RecentTransaction from "../components/RecentTransaction"
import { Ionicons } from "@expo/vector-icons"
import QuickActionSection from "../components/QuickActionSection"
import { useDashboard } from "../hooks/useDashboard"
import CreateTransactionBottomSheet, {
    CreateTransactionBottomSheetRef,
} from "@/features/transaction/screens/CreateTransactionBottomSheet"
import { BottomSheetModal } from "@gorhom/bottom-sheet"

export default function DashboardScreen() {
    const insets = useSafeAreaInsets()
    const paddingBottom = 40 + insets.bottom + 20

    const bottomSheetRef = useRef<CreateTransactionBottomSheetRef>(null)
    const user = useAuthStore((state) => state.user)
    const {
        data: dataDashboardOverview,
        isPending: isPendingDashboardOverview,
    } = useDashboard()

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView
                contentContainerStyle={{ paddingBottom: paddingBottom }}
            >
                <View className="p-4 w-full h-full gap-6">
                    <DashboardHeader user={user} />

                    <HeroBalanceCard
                        balance={dataDashboardOverview?.balance}
                        cashflow={dataDashboardOverview?.cashflow}
                    />

                    <QuickActionSection />

                    <BudgetTrackerCard
                        budgetOverviewDashboard={dataDashboardOverview?.budget}
                        cashflowOverviewDashboard={
                            dataDashboardOverview?.cashflow
                        }
                    />

                    <WalletSection
                        wallets={dataDashboardOverview?.balance.wallets}
                    />

                    <RecentTransaction
                        transactions={
                            dataDashboardOverview?.recent_transactions
                        }
                    />
                </View>
            </ScrollView>
            <BottomBar
                onOpenAddTransaction={() => bottomSheetRef.current?.present()}
            />
            <CreateTransactionBottomSheet ref={bottomSheetRef} />
        </SafeAreaView>
    )
}
