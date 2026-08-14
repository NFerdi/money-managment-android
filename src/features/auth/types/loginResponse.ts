import { ApiResponse } from "@/shared/types/apiResponse"

export interface LoginData {
    token: string
    user: ProfileData
}

export interface ProfileData {
    id: number
    username: string
    email: string
    avatar: string | null
    setup_step: "WELCOME" | "WALLET" | "CATEGORY" | "BUDGET" | "COMPLETED"
}

export type loginResponse = ApiResponse<LoginData>
export type getMeResponse = ApiResponse<ProfileData>
