import { api } from "@/config/axios"
import { createWalletForm } from "@/features/wallet/schemas/CreateWalletSchema"
import { ApiResponse } from "@/shared/types/apiResponse"
import { WalletProviderEntity } from "@/features/wallet/entity/walletProviderEntity"

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
