export function formatCurrency(value?: string | number | null) {
    if (value == null || value === "") {
        return ""
    }

    const numeric = value.toString().replace(/\D/g, "")

    if (!numeric) {
        return ""
    }

    return new Intl.NumberFormat("id-ID").format(Number(numeric))
}
