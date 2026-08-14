import { z } from "zod"

export const createWalletSchema = z
    .object({
        name: z.string().min(3, "Nama minimal 3 karakter"),
        type: z.enum(["E_WALLET", "BANK", "CASH"]),
        balance: z.number(),
        provider_id: z.number().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.type !== "CASH" && !data.provider_id) {
            ctx.addIssue({
                code: "custom",
                path: ["provider_id"],
                message: "Provider wajib dipilih",
            })
        }
    })

export type createWalletForm = z.infer<typeof createWalletSchema>
