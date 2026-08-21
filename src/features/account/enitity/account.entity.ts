export type SetupStepEnum =
    "WELCOME" | "WALLET" | "CATEGORY" | "BUDGET" | "COMPLETED"

export interface AccountEntity {
    id: number
    username: string
    email: string
    password: string
    avatar?: string | null
    setup_step: SetupStepEnum
    created_at: Date
    updated_at: Date
}
