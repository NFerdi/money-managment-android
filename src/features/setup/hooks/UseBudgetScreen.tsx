import { useMemo } from "react"

export const UseBudgetScreen = () => {
    const defaultDates = useMemo(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()

        const monthNames = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ]

        const startDate = new Date(year, month, 1)
        const endDate = new Date(year, month + 1, 0)

        return {
            name: `Budget Bulan ${monthNames[month]}`,
            start_date: startDate,
            end_date: endDate,
        }
    }, [])

    const quickNominals = [
        {
            label: "Rp 1,5jt",
            value: 1500000,
        },
        {
            label: "Rp 3jt",
            value: 3000000,
        },
        {
            label: "Rp 5jt",
            value: 5000000,
        },
        {
            label: "Rp 7,5jt",
            value: 7500000,
        },
    ]

    return {
        defaultDates,
        quickNominals,
    }
}
