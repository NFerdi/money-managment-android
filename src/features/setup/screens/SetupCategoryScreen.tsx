import {
    View,
    Text,
    Keyboard,
    Image,
    TouchableOpacity,
    Animated,
    ScrollView,
} from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import ButtonSetup from "../components/ButtonSetup"
import { useUpdateStep } from "../hooks/useUpdateStep"
import SetupProgres from "../components/SetupProgres"
import { Ionicons } from "@expo/vector-icons"
import { listCategory } from "../../category/constants/listCategory"
import { createBulkCategoryDTO } from "@/features/category/schemas/CreateBulkCategorySchema"
import { useCreateCategories } from "../hooks/useCreateCategories"
import { DefaultCategory } from "@/features/category/enitity/category.entity"
import { useCategorySelection } from "../hooks/useCategorySelection"
import CategoryTabSwitcher from "../components/CategoryTabSwitcher"
import CategoryGridCard from "../components/CategoryGridCard"

export default function SetupCategoryScreen() {
    const {
        selectedIds,
        slideLeft,
        setActiveTab,
        activeTab,
        filteredCategories,
        toggleSelect,
        selectedCategories,
    } = useCategorySelection()

    const {
        mutate: mutateCreateBulkCategory,
        isPending: isPendingCreateBulkCategory,
    } = useCreateCategories()

    const onSubmit = () => {
        Keyboard.dismiss()

        const payload: createBulkCategoryDTO = selectedCategories.map(
            ({ id, ...rest }) => rest
        )

        mutateCreateBulkCategory(payload)
    }

    return (
        <SafeAreaView className="flex-1 bg-green-50 p-4 gap-4">
            <SetupProgres currentStep="WALLET" />

            <View className="flex-1">
                <View className="px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md gap-8">
                    <CategoryTabSwitcher
                        slideLeft={slideLeft}
                        setActiveTab={setActiveTab}
                        activeTab={activeTab}
                    />

                    <CategoryGridCard
                        filteredCategories={filteredCategories}
                        selectedIds={selectedIds}
                        toggleSelect={toggleSelect}
                    />
                </View>
            </View>

            <ButtonSetup
                onSubmit={onSubmit}
                textContent="Lanjutkan"
                isPending={isPendingCreateBulkCategory}
                disabled={selectedIds.length === 0}
            />
        </SafeAreaView>
    )
}
