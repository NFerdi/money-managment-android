import { api } from "@/config/axios"
import { LoginForm } from "../schemas/loginSchema"
import { removeToken } from "../utils/secureStore"
import { loginResponse } from "../types/loginResponse"

export const login = async (payload: LoginForm) => {
    const { data } = await api.post<loginResponse>("/auth/login", payload)
    return data
}

export const logout = async () => {
    await removeToken()
}
