import { CategoryEntity } from "@/features/category/enitity/category.entity"
import { TypeWallet, WalletEntity } from "@/features/wallet/entity/walletEntity"
import { ApiResponse } from "@/shared/types/apiResponse"

export type DashboardOverviewResponse = ApiResponse<DashboardOverview>

export interface DashboardOverview {
    balance: BalanceOverviewDashboard

    cashflow: CashflowOverviewDashboard

    budget: BudgetOverviewDashboard

    subscription: SubscriptionOverviewDashboard

    recent_transactions: RecentTransactionOverviewDashboard[]
}

export interface BalanceOverviewDashboard {
    total: number

    wallets: WalletOverviewDashboard[]
}

export interface WalletOverviewDashboard {
    id: number
    name: string
    balance: number
    type: TypeWallet
    provider: {
        name: string
    }
}

export interface CashflowOverviewDashboard {
    income: number
    expense: number
    saving: number
}

export interface BudgetOverviewDashboard {
    id: number
    name: string
    planned_income: number
    start_date: Date
    end_date: Date
    status: string
}

export interface SubscriptionOverviewDashboard {
    active: string
    paused: boolean
    cancelled: boolean
    monthly_total: number
    upcoming: number

    next_due: {
        id: number
        name: string
        amount: number
        next_due_date: Date
    }
}

export interface RecentTransactionOverviewDashboard {
    id: number
    type: string
    amount: number
    transaction_date: Date
    notes: string
    to_wallet?: Pick<WalletEntity, "id" | "name" | "provider">
    category?: Pick<CategoryEntity, "id" | "name" | "icon">
    wallet: Pick<WalletEntity, "id" | "name" | "provider">
}
