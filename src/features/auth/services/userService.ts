import { api } from "@/config/axios"
import { getMeResponse } from "../types/loginResponse"

export const getMe = async () => {
    const { data } = await api.get<getMeResponse>("/account")

    return data
}
