import { AccountEntity } from "@/features/account/account.entity"

export const CATEGORY_TYPES = ["INCOME", "EXPENSE"] as const
export type CategoryType = (typeof CATEGORY_TYPES)[number]

export interface CategoryEntity {
    id: number
    name: string
    icon?: string
    type: CategoryType
    user_id: number
    user?: AccountEntity
    created_at: Date
    updated_at: Date
}

export type DefaultCategory = Omit<
    CategoryEntity,
    "user_id" | "user" | "created_at" | "updated_at"
>
