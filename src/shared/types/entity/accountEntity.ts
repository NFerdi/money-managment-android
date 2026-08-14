import { SetupStepEnum } from "../enums/typeSetupUserEnum"

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
