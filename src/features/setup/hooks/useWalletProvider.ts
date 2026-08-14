import { walletApi } from "@/shared/api/walletApi"
import { useQuery } from "@tanstack/react-query"

export const useWalletProvider = () => {
    return useQuery({
        queryKey: ["walletProviders"],
        queryFn: walletApi.getProvider,
    })
}
