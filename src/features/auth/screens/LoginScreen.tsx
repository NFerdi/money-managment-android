import { View, Text } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const LoginPage = () => {
    return (
        <SafeAreaView>
            <View className="bg-primary flex w-full h-full flex-1">
                <Text>LoginPages</Text>
                <Text>Test</Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginPage
