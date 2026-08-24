import { walletApi } from "@/features/wallet/services/walletServices"
import { useQuery } from "@tanstack/react-query"

export const useWalletProvider = () => {
    return useQuery({
        queryKey: ["walletProviders"],
        queryFn: walletApi.getProvider,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 24,
    })
}
