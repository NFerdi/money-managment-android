import React, { useEffect, useMemo } from "react"
import { View } from "react-native"
import { Control, useWatch, UseFormSetValue } from "react-hook-form"

import CustomTextInput from "@/shared/components/CustomTextInput"
import { CustomOptionPicker } from "@/shared/components/CustomOptionPicker"
import { createTransactionDTO } from "../schemas/createTransactionSchema"
import { WalletEntity } from "@/features/wallet/entity/walletEntity"
import { CategoryEntity } from "@/features/category/enitity/category.entity"
import { getBankLogo } from "@/utils/logoProvider"
import FormDatePicker from "@/shared/components/FormDatePicker"

interface Props {
    control: Control<createTransactionDTO>
    setValue: UseFormSetValue<createTransactionDTO>
    dataWallets?: WalletEntity[]
    dataCategories?: CategoryEntity[]
    activeTab: string
}

export default function TransactionForm({
    control,
    setValue,
    dataCategories,
    dataWallets,
    activeTab,
}: Props) {
    const selectedFromWalletId = useWatch({ control, name: "wallet_id" })

    const walletsOption = useMemo(() => {
        if (!dataWallets) return []
        return dataWallets.map((wallet) => {
            const LogoComponent = getBankLogo(wallet.provider?.name ?? "BCA")
            return {
                label: wallet.name,
                value: wallet.id,
                icon: LogoComponent ? (
                    <LogoComponent width={20} height={20} />
                ) : null,
            }
        })
    }, [dataWallets])

    const toWalletOption = useMemo(() => {
        if (!walletsOption.length) return []
        return walletsOption.filter((w) => w.value !== selectedFromWalletId)
    }, [walletsOption, selectedFromWalletId])

    const categoriesOption = useMemo(() => {
        if (!dataCategories) return []
        return dataCategories
            .filter((category) => category.type === activeTab)
            .map((category) => ({
                label: category.name,
                value: category.id,
                icon: category.icon,
            }))
    }, [dataCategories, activeTab])

    return (
        <View className="w-full gap-5">
            <CustomTextInput
                label="Nominal Transaksi"
                placeholder="150.000"
                name="amount"
                type="currency"
                control={control}
                keyboardType="numeric"
                bottomSheetInput
            />

            <CustomOptionPicker
                control={control}
                name="wallet_id"
                label={
                    activeTab === "TRANSFER" ? "Dari Dompet" : "Pilih Dompet"
                }
                data={walletsOption}
                variant="horizontal"
                onSelect={(selectedFromWalletId) => {
                    const currentToWallet = control._formValues.to_wallet_id
                    if (selectedFromWalletId === currentToWallet) {
                        setValue("to_wallet_id", undefined as any)
                    }
                }}
            />

            {activeTab === "TRANSFER" && (
                <CustomOptionPicker
                    control={control}
                    name="to_wallet_id"
                    label="Ke Dompet"
                    data={toWalletOption}
                    variant="horizontal"
                />
            )}

            {activeTab !== "TRANSFER" && (
                <CustomOptionPicker
                    control={control}
                    name="category_id"
                    label="Kategori"
                    data={categoriesOption}
                    variant="grid"
                    columns={4}
                />
            )}

            <FormDatePicker
                control={control}
                name="transaction_date"
                label="Tanggal"
            />

            <CustomTextInput
                label="Catatan (Opsional)"
                placeholder="Contoh: Gaji bulan Agustus"
                name="note"
                type="generic"
                control={control}
                bottomSheetInput
            />
        </View>
    )
}
