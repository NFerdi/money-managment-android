import { AccountEntity } from "./accountEntity"
import { WalletProviderEntity } from "./walletProviderEntity"

export interface WalletEntity {
    id: number
    name: string
    balance: number
    type: string
    user_id: number
    user?: AccountEntity
    provider?: Pick<WalletProviderEntity, "name"> | null
    created_at: Date
    updated_at: Date
}
