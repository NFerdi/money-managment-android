import { View, Text, Keyboard, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SetupProgres from "../components/SetupProgres"
import ButtonSubmit from "../../../shared/components/ButtonSubmit"
import { UseBudgetScreen } from "../hooks/UseBudgetScreen"
import {
    CreateBudgetDTO,
    createBudgetSchema,
} from "@/features/budget/CreateBudgetSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomTextInput from "@/shared/components/CustomTextInput"
import { Ionicons } from "@expo/vector-icons"
import { isoDate } from "@/utils/isoDate"
import DatePicker from "@/shared/components/FormDatePicker"
import FormDatePicker from "@/shared/components/FormDatePicker"
import { useCreateBudget } from "../hooks/useCreateBudget"

export default function WalletSetupScreen() {
    const { defaultDates, quickNominals } = UseBudgetScreen()

    const { control, handleSubmit, setValue, watch } = useForm<CreateBudgetDTO>(
        {
            resolver: zodResolver(createBudgetSchema),
            mode: "onTouched",
            defaultValues: {
                name: defaultDates.name,
                planned_income: 5000000,
                start_date: defaultDates.start_date,
                end_date: defaultDates.end_date,
            },
        }
    )

    const { mutate } = useCreateBudget()

    const onSubmit = (data: CreateBudgetDTO) => {
        Keyboard.dismiss()

        mutate(data)
    }

    const startDate = watch("start_date")
    const endDate = watch("end_date")

    return (
        <SafeAreaView className="flex-1 bg-green-50 p-4 gap-4">
            <SetupProgres currentStep="BUDGET" />

            <View className="flex-1">
                <View className="px-4 py-4 border border-gray-100 rounded-3xl bg-white shadow-md gap-8">
                    <View className="gap-1 mb-2">
                        <Text className="text-xl text-center font-poppins-bold text-gray-800">
                            Atur Target Budget
                        </Text>
                        <Text className="text-xs text-center font-poppins-regular text-gray-500">
                            Berapa target/perkiraan pemasukan kamu untuk bulan
                            ini?
                        </Text>
                    </View>
                    <View className="w-full gap-5">
                        <CustomTextInput
                            label="Nama Budget"
                            name="name"
                            type="generic"
                            control={control}
                            returnKeyType="next"
                        />
                        <View className="gap-3">
                            <CustomTextInput
                                label="Target Pemasukan"
                                placeholder="250.000"
                                name="planned_income"
                                type="currency"
                                control={control}
                                keyboardType="numeric"
                                returnKeyType="next"
                            />
                            <View className="flex-row gap-3">
                                {quickNominals.map((quickNominal) => (
                                    <TouchableOpacity
                                        key={quickNominal.value}
                                        onPress={() =>
                                            setValue(
                                                "planned_income",
                                                quickNominal.value
                                            )
                                        }
                                        className={`px-3 py-2 border border-gray-100 shadow-md rounded-2xl ${watch("planned_income") === quickNominal.value ? "bg-green-900" : "bg-gray-50"}`}
                                    >
                                        <Text
                                            className={`${watch("planned_income") === quickNominal.value ? "text-white" : "text-gray-600"}`}
                                        >
                                            {quickNominal.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View className="flex-row gap-3 pt-2">
                            <FormDatePicker
                                control={control}
                                name="start_date"
                                label="Tanggal Mulai"
                            />
                            <FormDatePicker
                                control={control}
                                name="end_date"
                                label="Tanggal Selesai"
                                minimumDate={startDate}
                            />
                        </View>
                    </View>
                    {!!startDate && (
                        <View className="flex-row items-center gap-2 bg-green-50 py-3 px-5 rounded-2xl border border-green-200">
                            <Ionicons
                                name="time-outline"
                                size={18}
                                color="#14532d"
                            />
                            <Text className="font-poppins-medium text-xs text-green-900">
                                Periode Tanggal
                            </Text>
                            <Text className="font-poppins-bold text-xs text-green-900">
                                {`${isoDate(startDate)} s/d ${isoDate(endDate)}`}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
            <ButtonSubmit onSubmit={handleSubmit(onSubmit)}>
                <Text>Buat Budget</Text>
            </ButtonSubmit>
        </SafeAreaView>
    )
}
