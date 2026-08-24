import { api } from "@/config/axios"
import { SetupStepEnum } from "@/features/account/enitity/account.entity"

export const updateStep = async (step: SetupStepEnum) => {
    await api.patch("/account/step", { setup_step: step })

    return null
}
