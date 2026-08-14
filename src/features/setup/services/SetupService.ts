import { api } from "@/config/axios"
import { SetupStep } from "@/features/auth/store/authStore"

export const updateStep = async (step: SetupStep) => {
    await api.patch("/account/step", { setup_step: step })

    return null
}
