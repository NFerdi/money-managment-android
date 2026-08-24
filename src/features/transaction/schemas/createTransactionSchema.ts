import z from "zod"

export const TransactionTypeSchema = z.enum(["EXPENSE", "INCOME", "TRANSFER"])
export type TypeTransaction = z.infer<typeof TransactionTypeSchema>

const expenseSchema = z.object({
    type: z.literal("EXPENSE"),
    amount: z.number().min(1, "Nominal wajib diisi"),
    wallet_id: z.number("Pilih dompet asal"),
    category_id: z.number("Pilih kategori"),
    to_wallet_id: z.undefined().optional(),
    note: z.string().optional(),
    transaction_date: z
        .date({ error: "Tanggal transaksi tidak valid" })
        .optional(),
})

const incomeSchema = z.object({
    type: z.literal("INCOME"),
    amount: z.number().min(1, "Nominal wajib diisi"),
    wallet_id: z.number("Pilih dompet tujuan"),
    category_id: z.number("Pilih kategori"),
    to_wallet_id: z.undefined().optional(),
    note: z.string().optional(),
    transaction_date: z
        .date({ error: "Tanggal transaksi tidak valid" })
        .optional(),
})

const transferSchema = z
    .object({
        type: z.literal("TRANSFER"),
        amount: z.number().min(1, "Nominal wajib diisi"),
        wallet_id: z.number("Pilih dompet asal"),
        to_wallet_id: z.number("Pilih dompet tujuan"),
        category_id: z.undefined().optional(),
        note: z.string().optional(),
        transaction_date: z
            .date({ error: "Tanggal transaksi tidak valid" })
            .optional(),
    })
    .refine((data) => data.wallet_id !== data.to_wallet_id, {
        message: "Dompet tujuan tidak boleh sama dengan dompet asal",
        path: ["to_wallet_id"],
    })

export const createTransactionSchema = z.discriminatedUnion("type", [
    expenseSchema,
    incomeSchema,
    transferSchema,
])

export type createTransactionDTO = z.infer<typeof createTransactionSchema>
