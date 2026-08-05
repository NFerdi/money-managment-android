import { ApiResponse } from "@/shared/types/apiResponse"

export interface LoginData {
    token: string
}

export interface ProfileData {
    id: number
    username: string
    email: string
    avatar: string
}

export type loginResponse = ApiResponse<LoginData>
export type getMeResponse = ApiResponse<ProfileData>
