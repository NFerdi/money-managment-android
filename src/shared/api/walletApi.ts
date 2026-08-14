import { api } from "@/config/axios"
import { ApiResponse } from "../types/apiResponse"
import { WalletProviderEntity } from "../types/entity/walletProviderEntity"
import { createWalletForm } from "@/wallet/schemas/CreateWalletSchema"

export const walletApi = {
    getProvider: async () => {
        const { data } =
            await api.get<ApiResponse<WalletProviderEntity[]>>(
                "/wallet/providers"
            )

        return data.data
    },
    createWallet: async (payload: createWalletForm) => {
        const { data } = await api.post("/wallet", payload)

        return data
    },
}
