import { api } from "@/config/axios"
import { DashboardOverviewResponse } from "../types/dashboardOverviewResponse"

export const dashboardApi = {
    getOverviewDashboard: async () => {
        const { data } = await api.get<DashboardOverviewResponse>("/dashboard")
        return data.data
    },
}
