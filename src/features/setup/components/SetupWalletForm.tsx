import { TextInput, View } from "react-native"
import React, { useMemo, useRef } from "react"
import { createWalletForm } from "@/wallet/schemas/CreateWalletSchema"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { Control, UseFormWatch } from "react-hook-form"
import { WalletProviderEntity } from "@/shared/types/entity/walletProviderEntity"
import SelectInputForm from "@/shared/components/CustomSelectInput/SelectInputForm"
import { WALLETTYPE } from "@/shared/constants/walletType"
import { SelectInputRef } from "@/shared/components/CustomSelectInput/SelectInput"

type Props = {
    control: Control<createWalletForm>
    handleSubmit: () => void
    providers: WalletProviderEntity[]
    watch: UseFormWatch<createWalletForm>
}

export default function SetupWalletForm({ control, providers, watch }: Props) {
    const type = watch("type")

    const providerOption = useMemo(() => {
        return providers
            .filter((provider) => provider.type === type)
            .map((provider) => ({
                label: provider.name,
                value: provider.id,
            }))
    }, [type, providers])

    const walletTypeOption = useMemo(() => {
        return WALLETTYPE.map((wallet) => ({
            label: wallet.label,
            value: wallet.value,
        }))
    }, [])

    const balanceRef = useRef<TextInput>(null)
    const typeRef = useRef<SelectInputRef>(null)

    return (
        <View className="w-full gap-5">
            <CustomTextInput
                label="Nama"
                placeholder="Bank BCA"
                name="name"
                type="generic"
                control={control}
                returnKeyType="next"
                onSubmitEditing={() => balanceRef.current?.focus()}
            />
            <CustomTextInput
                label="Saldo awal"
                placeholder="250.000"
                name="balance"
                type="currency"
                control={control}
                keyboardType="numeric"
                ref={balanceRef}
                returnKeyType="next"
                onSubmitEditing={() => typeRef.current?.focus()}
            />
            <SelectInputForm
                options={walletTypeOption}
                control={control}
                name="type"
                label="Tipe Dompet"
                placeholder="Bank"
                ref={typeRef}
            />
            {type !== "CASH" && (
                <SelectInputForm
                    options={providerOption}
                    control={control}
                    name="provider_id"
                    label="Provider"
                    placeholder="BCA"
                />
            )}
        </View>
    )
}
