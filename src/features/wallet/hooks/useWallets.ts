import { useQuery } from "@tanstack/react-query"
import { walletApi } from "../services/walletServices"

export const useWallets = () => {
    return useQuery({
        queryKey: ["wallets"],
        queryFn: walletApi.getWallets,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 24,
    })
}
