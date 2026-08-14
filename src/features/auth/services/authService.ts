import { api } from "@/config/axios"
import { LoginForm } from "../schemas/loginSchema"
import { removeToken } from "../utils/secureStore"
import { loginResponse } from "../types/loginResponse"
import { ApiResponse } from "@/shared/types/apiResponse"
import { SignupForm } from "../schemas/signupSchema"

export const login = async (payload: LoginForm) => {
    const { data } = await api.post<loginResponse>("/auth/login", payload)
    return data
}

export const signup = async (payload: SignupForm) => {
    const { data } = await api.post<ApiResponse<null>>("/auth/signup", payload)
    return data
}

export const logout = async () => {
    await removeToken()
}
