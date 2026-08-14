import { useEffect, useState } from "react"
import { useAuthStore } from "../store/authStore"
import { getToken } from "../utils/secureStore"
import { getMe } from "../services/userService"

export const useRestoreSession = () => {
    const [loading, setLoading] = useState(true)
    const login = useAuthStore((state) => state.login)

    useEffect(() => {
        const restore = async () => {
            try {
                const token = await getToken()

                if (!token) return

                const me = await getMe()

                login(me.data, token)
            } finally {
                setLoading(false)
            }
        }

        restore()
    }, [])

    return loading
}
