import { Feather } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"
import { SelectOption } from "./type"

interface Props {
    item: SelectOption

    selected: boolean

    onPress(): void
}

export default function SelectItem({ item, selected, onPress }: Props) {
    return (
        <Pressable
            disabled={item.disabled}
            onPress={onPress}
            className={`
                flex-row
                items-center
                justify-between

                px-4
                py-4

                border-b
                border-neutral-100

                ${item.disabled ? "opacity-40" : ""}
            `}
        >
            <View className="flex-row items-center flex-1">
                {item.icon && <View className="mr-3">{item.icon}</View>}

                <View className="flex-1">
                    <Text
                        numberOfLines={1}
                        className={`
                            font-poppins-medium
                            text-base

                            ${selected ? "text-primary" : "text-black"}
                        `}
                    >
                        {item.label}
                    </Text>

                    {item.description && (
                        <Text
                            numberOfLines={1}
                            className="font-poppins text-sm text-neutral-500 mt-1"
                        >
                            {item.description}
                        </Text>
                    )}
                </View>
            </View>

            {selected && <Feather name="check" size={20} color="#16a34a" />}
        </Pressable>
    )
}
