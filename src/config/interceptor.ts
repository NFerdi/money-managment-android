import { getToken } from "@/features/auth/utils/secureStore"
import { api } from "./axios"

api.interceptors.request.use(async (config) => {
    const token = await getToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
