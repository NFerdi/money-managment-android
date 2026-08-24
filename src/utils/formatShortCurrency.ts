export const formatShortAmount = (amount?: number): string => {
    if (amount === undefined || amount === null || isNaN(amount)) return "Rp 0"

    const absAmount = Math.abs(amount)
    const sign = amount < 0 ? "-" : ""

    if (absAmount >= 1_000_000_000) {
        const value = absAmount / 1_000_000_000
        return `${sign}Rp ${value % 1 === 0 ? value : value.toFixed(1)} M`
    }

    if (absAmount >= 1_000_000) {
        const value = absAmount / 1_000_000
        return `${sign}Rp ${value % 1 === 0 ? value : value.toFixed(1)} Jt`
    }

    if (absAmount >= 1_000) {
        const value = absAmount / 1_000
        return `${sign}Rp ${value % 1 === 0 ? value : value.toFixed(1)}k`
    }

    return `${sign}Rp ${absAmount}`
}
