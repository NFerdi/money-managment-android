import { useState, useRef, useEffect } from "react"
import { Animated } from "react-native"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    createTransactionDTO,
    createTransactionSchema,
    TypeTransaction,
} from "../schemas/createTransactionSchema"

const INITIAL_DRAFTS: Record<TypeTransaction, Partial<createTransactionDTO>> = {
    INCOME: {
        type: "INCOME",
        amount: 0,
        wallet_id: undefined,
        category_id: undefined,
        note: "",
        transaction_date: new Date(),
    },
    EXPENSE: {
        type: "EXPENSE",
        amount: 0,
        wallet_id: undefined,
        category_id: undefined,
        note: "",
        transaction_date: new Date(),
    },
    TRANSFER: {
        type: "TRANSFER",
        amount: 0,
        wallet_id: undefined,
        to_wallet_id: undefined,
        note: "",
        transaction_date: new Date(),
    },
}

export const useTransactionForm = () => {
    const [activeTab, setActiveTab] = useState<TypeTransaction>("INCOME")
    const [drafts, setDrafts] = useState(INITIAL_DRAFTS)

    const form = useForm<createTransactionDTO>({
        resolver: zodResolver(createTransactionSchema),
        mode: "onTouched",
        defaultValues: drafts.INCOME as createTransactionDTO,
    })

    const handleTabChange = (newTab: TypeTransaction) => {
        if (newTab === activeTab) return
        const currentValues = form.getValues()

        setDrafts((prev) => {
            const updatedDrafts = { ...prev, [activeTab]: currentValues }

            const rawTargetDraft = updatedDrafts[newTab]

            let cleanData: createTransactionDTO

            if (newTab === "TRANSFER") {
                cleanData = {
                    type: "TRANSFER",
                    amount: rawTargetDraft.amount ?? 0,
                    wallet_id: rawTargetDraft.wallet_id as any,
                    to_wallet_id: rawTargetDraft.to_wallet_id as any,
                    category_id: undefined,
                    note: rawTargetDraft.note || "",
                    transaction_date: new Date(),
                }
            } else {
                cleanData = {
                    type: newTab,
                    amount: rawTargetDraft.amount ?? 0,
                    wallet_id: rawTargetDraft.wallet_id as any,
                    category_id: rawTargetDraft.category_id as any,
                    to_wallet_id: undefined,
                    note: rawTargetDraft.note || "",
                    transaction_date: new Date(),
                } as createTransactionDTO
            }

            setTimeout(() => {
                form.reset(cleanData)
            }, 0)

            return updatedDrafts
        })

        setActiveTab(newTab)
    }

    const slideAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        let toValue = 0
        if (activeTab === "EXPENSE") toValue = 1
        if (activeTab === "TRANSFER") toValue = 2

        Animated.timing(slideAnim, {
            toValue,
            duration: 250,
            useNativeDriver: false,
        }).start()
    }, [activeTab])

    const slideLeft = slideAnim.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ["0%", "33.3333%", "66.6667%"],
    })

    const resetAll = () => {
        setDrafts(INITIAL_DRAFTS)
        form.reset(INITIAL_DRAFTS.INCOME as createTransactionDTO)
        setActiveTab("INCOME")
    }

    return {
        activeTab,
        setActiveTab,
        handleTabChange,
        slideLeft,
        form,
        resetAll,
    }
}
