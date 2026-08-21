import { AccountEntity } from "@/features/account/enitity/account.entity"
import { WalletProviderEntity } from "./walletProviderEntity"

export type TypeWallet = "BANK" | "E_WALLET" | "CASH"

export interface WalletEntity {
    id: number
    name: string
    balance: number
    type: TypeWallet
    user_id: number
    user?: AccountEntity
    provider?: Pick<WalletProviderEntity, "name"> | null
    created_at: Date
    updated_at: Date
}
