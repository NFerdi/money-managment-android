import { View, Text, Image } from "react-native"
import React from "react"

type Props = {
    title: string
}

export default function AuthHeader({ title }: Props) {
    return (
        <>
            <Image
                source={require("../../../assets/image/Logo.png")}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            />

            <View>
                <Text className="font-poppins-bold text-xl color-gray-700">
                    MoneyControl
                </Text>
                <Text className="font-poppins text-sm color-gray-600">
                    {title} sekarang untuk mendapatkan akses mengelola keuangan.
                </Text>
            </View>
        </>
    )
}
