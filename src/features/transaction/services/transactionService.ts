import { api } from "@/config/axios"
import { createTransactionDTO } from "../schemas/createTransactionSchema"

export const transactionApi = {
    createTransaction: async (payload: createTransactionDTO) => {
        const { data } = await api.post("/transaction", payload)

        return data
    },
}
