import { getToken } from "@/features/auth/utils/secureStore"
import { api } from "./axios"
import axios from "axios"

api.interceptors.request.use(async (config) => {
    const token = await getToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                error.message = error.response?.data?.message ?? error.message
            }
        }

        return Promise.reject(error)
    }
)
