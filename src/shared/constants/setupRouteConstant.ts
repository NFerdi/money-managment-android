import { ROUTES } from "./routeConstant"

export const SETUPROUTES = {
    WELCOME: ROUTES.WELCOME,
    WALLET: ROUTES.WALLET_SETUP,
    CATEGORY: ROUTES.CATEGORY_SETUP,
    BUDGET: ROUTES.WALLET_SETUP,
} as const

export const getSetupRoute = (step?: string) => {
    return SETUPROUTES[step as keyof typeof SETUPROUTES] ?? ROUTES.WELCOME
}
