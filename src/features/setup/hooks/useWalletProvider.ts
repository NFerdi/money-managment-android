import { walletApi } from "@/features/wallet/services/walletServices"
import { useQuery } from "@tanstack/react-query"

export const useWalletProvider = () => {
    return useQuery({
        queryKey: ["walletProviders"],
        queryFn: walletApi.getProvider,
    })
}
