import {
    BottomSheetBackdrop,
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet"

import React, { forwardRef, useMemo, useRef } from "react"
import { ActivityIndicator, Text, View } from "react-native"

import SelectItem from "./SelectItem"
import { SelectOption } from "./type"

export interface SelectBottomSheetRef {
    present(): void
    dismiss(): void
}

interface Props<T = string | number> {
    title?: string

    value?: T

    options: SelectOption[]

    loading?: boolean

    onChange(value: T): void
}

const SelectBottomSheet = forwardRef<SelectBottomSheetRef, Props>(
    ({ title, value, options, loading = false, onChange }, ref) => {
        const modalRef = useRef<BottomSheetModal>(null)

        React.useImperativeHandle(ref, () => ({
            present() {
                modalRef.current?.present()
            },

            dismiss() {
                modalRef.current?.dismiss()
            },
        }))

        const snapPoints = useMemo(() => ["40%"], [])

        function handleSelect(value: any) {
            onChange(value)

            modalRef.current?.dismiss()
        }

        return (
            <BottomSheetModal
                ref={modalRef}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                backdropComponent={(props) => (
                    <BottomSheetBackdrop
                        {...props}
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                    />
                )}
            >
                <BottomSheetView className="flex-1">
                    {!!title && (
                        <Text className="text-lg font-semibold text-center mb-4">
                            {title}
                        </Text>
                    )}

                    {loading ? (
                        <View className="flex-1 justify-center items-center">
                            <ActivityIndicator />
                        </View>
                    ) : (
                        <BottomSheetFlatList
                            data={options}
                            keyExtractor={(item) => item.value.toString()}
                            renderItem={({ item }) => (
                                <SelectItem
                                    item={item}
                                    selected={item.value === value}
                                    onPress={() => handleSelect(item.value)}
                                />
                            )}
                        />
                    )}
                </BottomSheetView>
            </BottomSheetModal>
        )
    }
)

export default SelectBottomSheet
