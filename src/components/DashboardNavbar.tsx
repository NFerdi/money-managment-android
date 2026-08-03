import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function DashboardNavbar() {
    return (
        <View className='px-4 flex-row items-center justify-between'>
            <Text className="text-2xl font-semibold text-gray-800">Dashboard</Text>
            <TouchableOpacity 
                className="rounded-full border-2 p-1 border-gray-200"
                activeOpacity={0.8}
            >
                <Image 
                    source={{uri: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsfGVufDB8fDB8fHww"}}
                    className="h-8 w-8 rounded-full border border-gray-200"
                />
            </TouchableOpacity>
        </View>
    )
}

export default DashboardNavbar
