import { api } from "@/config/axios"
import { CreateBudgetDTO } from "./CreateBudgetSchema"

export const budgetApi = {
    createWallet: async (payload: CreateBudgetDTO) => {
        const { data } = await api.post("/budget", payload)

        return data
    },
}
