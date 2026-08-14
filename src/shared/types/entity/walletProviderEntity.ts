import { TypeWallet } from "../enums/typeWalletEnum"
import { WalletEntity } from "./walletEntity"

export interface WalletProviderEntity {
    id: number
    name: string
    type: TypeWallet
    wallets: WalletEntity[]
    created_at: Date
    updated_at: Date
}
