import { AccountEntity } from "@/features/account/enitity/account.entity"
import { CategoryEntity } from "@/features/category/enitity/category.entity"
import { WalletEntity } from "@/features/wallet/entity/walletEntity"
import { TypeTransaction } from "../schemas/createTransactionSchema"

export interface TransactionEntity {
    id: number
    type: TypeTransaction
    amount: number
    notes?: string
    transaction_date: Date
    wallet_id: number
    to_wallet_id?: number
    category_id?: number
    created_at: Date
    updated_at: Date
    deleted_at?: Date | null
    user: AccountEntity
    wallet: WalletEntity
    to_wallet?: WalletEntity | null
    category?: CategoryEntity | null
}
