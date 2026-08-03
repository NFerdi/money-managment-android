import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import DashboardNavbar from '../components/DashboardNavbar'

function HomeScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <View className="gap-2">
                <DashboardNavbar />

                <LinearGradient
                    colors={['#1dc48d', '#4be3b1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        borderRadius: 15,
                        margin: 16,
                    }}
                >
                    <View className='p-4'>
                        <View className="flex-col">
                            <Text className='text-white/90 font-bold tracking-widest text-sm'>Sisa Budget yang tersedia</Text>
                            <Text className='text-white font-bold tracking-widest text-2xl'>RP 800.000</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
