import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
} from "react"
import { View, Text, Keyboard } from "react-native"
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet"

import TransactionTabSwitcher from "../components/TransactionTabSwitcher"
import TransactionForm from "../components/TransactionForm"
import ButtonSubmit from "@/shared/components/ButtonSubmit"

import { useCategories } from "@/features/category/hooks/useCategories"
import { useWallets } from "@/features/wallet/hooks/useWallets"
import { useCreateTransaction } from "../hooks/useCreateTransaction"
import { useTransactionForm } from "../hooks/useTransactionForm"
import { createTransactionDTO } from "../schemas/createTransactionSchema"

export interface CreateTransactionBottomSheetRef {
    present(): void
    dismiss(): void
}

interface Props {
    onSubmitSuccess?: () => void
}

const CreateTransactionBottomSheet = forwardRef<
    CreateTransactionBottomSheetRef,
    Props
>(({ onSubmitSuccess }, ref) => {
    const modalRef = useRef<BottomSheetModal>(null)

    const { data: dataCategories } = useCategories()
    const { data: dataWallets } = useWallets()
    const { mutate: mutateCreateTransaction } = useCreateTransaction()

    const {
        activeTab,
        setActiveTab,
        handleTabChange,
        slideLeft,
        form,
        resetAll,
    } = useTransactionForm()

    useImperativeHandle(ref, () => ({
        present() {
            modalRef.current?.present()
        },
        dismiss() {
            modalRef.current?.dismiss()
        },
    }))

    useEffect(() => {
        const keyboardHideSubscription = Keyboard.addListener(
            "keyboardDidHide",
            () => modalRef.current?.snapToIndex(0)
        )

        return () => keyboardHideSubscription.remove()
    }, [])

    const snapPoints = useMemo(() => ["75%", "100%"], [])

    const onSubmit = (data: createTransactionDTO) => {
        Keyboard.dismiss()
        console.log(data)
        mutateCreateTransaction(data, {
            onSuccess: () => {
                resetAll()
                onSubmitSuccess?.()
                modalRef.current?.dismiss()
            },
        })
    }

    return (
        <BottomSheetModal
            ref={modalRef}
            snapPoints={snapPoints}
            index={0}
            enableDynamicSizing={false}
            keyboardBehavior="extend"
            keyboardBlurBehavior="restore"
            android_keyboardInputMode="adjustResize"
            backdropComponent={(props) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                />
            )}
        >
            <BottomSheetScrollView
                contentContainerStyle={{
                    padding: 20,
                    gap: 16,
                    paddingBottom: 80,
                }}
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex-row justify-between items-center border-b border-gray-100 pb-3">
                    <Text className="font-poppins-bold text-lg text-gray-800">
                        Tambah Transaksi
                    </Text>
                </View>

                <TransactionTabSwitcher
                    slideLeft={slideLeft}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    action={handleTabChange}
                />

                <TransactionForm
                    activeTab={activeTab}
                    control={form.control}
                    setValue={form.setValue}
                    dataWallets={dataWallets}
                    dataCategories={dataCategories}
                />

                <View className="mt-2">
                    <ButtonSubmit onSubmit={form.handleSubmit(onSubmit)}>
                        <Text className="text-white font-bold">
                            Buat Transaksi
                        </Text>
                    </ButtonSubmit>
                </View>
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
})

export default CreateTransactionBottomSheet
