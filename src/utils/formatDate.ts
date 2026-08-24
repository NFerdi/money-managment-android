import dayjs from "dayjs"

export function formatDate(date: Date | string | null | undefined) {
    if (!date) return ""

    const target = dayjs(date)
    const now = dayjs()
    const timeStr = target.format("HH:mm")

    if (target.isSame(now, "day")) {
        return `Hari ini - ${timeStr}`
    }

    if (target.isSame(now.subtract(1, "day"), "day")) {
        return `Kemarin - ${timeStr}`
    }

    if (now.diff(target, "day") < 7 && target.isBefore(now)) {
        const dayName = target.format("dddd")
        const capitalizedDay =
            dayName.charAt(0).toUpperCase() + dayName.slice(1)
        return `${capitalizedDay} - ${timeStr}`
    }

    return `${target.format("DD MMM")} - ${timeStr}`
}
