import { listCategory } from "@/features/category/constants/listCategory"
import { DefaultCategory } from "@/features/category/enitity/category.entity"
import { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

export const useCategorySelection = (defaultIds: number[] = []) => {
    const [activeTab, setActiveTab] = useState("INCOME")
    const [selectedIds, setSelectedIds] = useState<number[]>(defaultIds)

    const slideAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: activeTab === "INCOME" ? 0 : 1,
            duration: 250,
            useNativeDriver: false,
        }).start()
    }, [activeTab])

    const toggleSelect = (id: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((itemId) => itemId !== id))
        } else {
            setSelectedIds([...selectedIds, id])
        }
    }

    const slideLeft = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "50%"],
    })

    const filteredCategories = listCategory.filter(
        (item) => item.type === activeTab
    )

    const selectedCategories: DefaultCategory[] = listCategory.filter(
        (category) => selectedIds.includes(category.id)
    )

    return {
        selectedIds,
        slideLeft,
        setActiveTab,
        activeTab,
        filteredCategories,
        toggleSelect,
        selectedCategories,
    }
}
