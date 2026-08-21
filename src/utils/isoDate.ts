export const isoDate = (date: unknown) => {
    if (!date) return "-"
    if (date instanceof Date) {
        return date.toISOString().split("T")[0]
    }
    if (typeof date === "string") {
        const parsed = new Date(date)
        return isNaN(parsed.getTime())
            ? "-"
            : parsed.toISOString().split("T")[0]
    }
    return "-"
}
