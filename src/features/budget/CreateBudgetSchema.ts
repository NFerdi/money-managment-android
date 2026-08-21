import z from "zod"

export const createBudgetSchema = z
    .object({
        name: z
            .string("Nama budget harus berupa string")
            .trim()
            .min(3, "Nama budget minimal 3 karakter")
            .max(100, "Nama budget maksimal 100 karakter"),

        planned_income: z
            .number("Rencana pemasukan harus berupa angka")
            .positive("Rencana pemasukan harus lebih dari 0")
            .optional(),

        start_date: z.date({
            error: "Tanggal mulai tidak valid",
        }),

        end_date: z.date({
            error: "Tanggal akhir tidak valid",
        }),
    })
    .superRefine((data, ctx) => {
        if (data.end_date <= data.start_date) {
            ctx.addIssue({
                code: "custom",
                path: ["end_date"],
                message: "Tanggal akhir harus setelah tanggal mulai",
            })
        }
    })

export type CreateBudgetDTO = z.infer<typeof createBudgetSchema>
