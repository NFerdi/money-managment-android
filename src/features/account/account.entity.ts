import { SetupStep } from "../auth/store/authStore"

export interface AccountEntity {
    id: number
    username: string
    email: string
    password: string
    avatar?: string | null
    setup_step: SetupStep
    created_at: Date
    updated_at: Date
}
