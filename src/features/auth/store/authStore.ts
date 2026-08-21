import { SetupStepEnum } from "@/features/account/enitity/account.entity"
import { create } from "zustand"

interface User {
    id: number
    username: string
    email: string
    avatar: string | null
    setup_step: SetupStepEnum
}

interface AuthStore {
    token: string | null
    user: User | null

    isAuthenticated: boolean

    login: (user: User, token: string) => void

    logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: null,

    user: null,

    isAuthenticated: false,

    login: (user, token) =>
        set({
            user,
            token,
            isAuthenticated: true,
        }),

    logout: () =>
        set({
            token: null,
            user: null,
            isAuthenticated: false,
        }),
}))
