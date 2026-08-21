export function formatCurrency(value?: string | number | null) {
    if (!value) return ""
    const num = Number(value.toString().replace(/\D/g, ""))
    return isNaN(num) ? "" : new Intl.NumberFormat("id-ID").format(num)
}
