import { useQuery } from "@tanstack/react-query"
import { dashboardApi } from "../services/dashboardService"

export const useDashboard = () => {
    return useQuery({
        queryKey: ["dashboardOverview"],
        queryFn: dashboardApi.getOverviewDashboard,
    })
}
