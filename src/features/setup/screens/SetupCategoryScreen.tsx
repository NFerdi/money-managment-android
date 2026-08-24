import { View, Text, Keyboard } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import ButtonSubmit from "../../../shared/components/ButtonSubmit"
import SetupProgres from "../components/SetupProgres"
import { createBulkCategoryDTO } from "@/features/category/schemas/CreateBulkCategorySchema"
import { useCreateCategories } from "../hooks/useCreateCategories"
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
            <SetupProgres currentStep="CATEGORY" />

            <View className="flex-1">
                <View className="px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md gap-8">
                    <View className="gap-1 mb-2">
                        <Text className="text-xl text-center font-poppins-bold text-gray-800">
                            Sesuaikan Kategori
                        </Text>
                        <Text className="text-xs text-center font-poppins-regular text-gray-500">
                            Pilih kategori sesuai kebutuhan kamu.
                        </Text>
                    </View>
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

            <ButtonSubmit
                onSubmit={onSubmit}
                isPending={isPendingCreateBulkCategory}
                disabled={selectedIds.length === 0}
            >
                <Text>Tambahkan Kategori</Text>
            </ButtonSubmit>
        </SafeAreaView>
    )
}
