import { View, Dimensions, TouchableOpacity } from "react-native"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import Svg, { Path } from "react-native-svg"
import { usePathname } from "expo-router"
import { ROUTES } from "../../constants/routeConstant"
import ButtonBottomBar from "./ButtonBottomBar"

interface Props {
    onOpenAddTransaction: () => void
}

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const BAR_WIDTH = Math.min(SCREEN_WIDTH - 32, 400)
const BAR_HEIGHT = 65

export default function BottomBar({ onOpenAddTransaction }: Props) {
    const pathname = usePathname()
    const insets = useSafeAreaInsets()

    const center = BAR_WIDTH / 2
    const d = `
        M 20 0
        H ${center - 45}
        C ${center - 32} 0, ${center - 30} 38, ${center} 38
        C ${center + 30} 38, ${center + 32} 0, ${center + 45} 0
        H ${BAR_WIDTH - 20}
        Q ${BAR_WIDTH} 0, ${BAR_WIDTH} 20
        V ${BAR_HEIGHT - 20}
        Q ${BAR_WIDTH} ${BAR_HEIGHT}, ${BAR_WIDTH - 20} ${BAR_HEIGHT}
        H 20
        Q 0 ${BAR_HEIGHT}, 0 ${BAR_HEIGHT - 20}
        V 20
        Q 0 0, 20 0
        Z
    `

    return (
        <View
            style={{ paddingBottom: Math.max(insets.bottom, 12) }}
            className="absolute bottom-0 left-0 right-0 items-center pointer-events-box-none"
        >
            <View
                style={{ width: BAR_WIDTH, height: BAR_HEIGHT }}
                className="relative items-center justify-center"
            >
                <Svg
                    width={BAR_WIDTH}
                    height={BAR_HEIGHT}
                    className="absolute top-0 left-0"
                >
                    <Path
                        d={d}
                        fill="rgba(255, 255, 255, 0.95)"
                        stroke="rgba(229, 231, 235, 0.8)"
                        strokeWidth={1}
                    />
                </Svg>

                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={onOpenAddTransaction}
                    style={{
                        top: -20,
                        shadowColor: "#14532d",
                        shadowOffset: { width: 0, height: 6 },
                        shadowOpacity: 0.35,
                        shadowRadius: 8,
                        elevation: 8,
                    }}
                    className="absolute w-14 h-14 rounded-full bg-emerald-600 items-center justify-center active:scale-95 border-2 border-white z-20"
                >
                    <Ionicons name="add" size={32} color="#ffffff" />
                </TouchableOpacity>

                <View className="absolute inset-0 flex-row w-full h-full justify-between items-center px-3 z-10">
                    <View className="flex-row flex-1 justify-around items-center">
                        <ButtonBottomBar
                            name="Dashboard"
                            iconDefault="grid"
                            IconActive="grid-outline"
                            route={ROUTES.DASHBOARD}
                            pathName={pathname}
                        />

                        <ButtonBottomBar
                            name="Wallet"
                            iconDefault="wallet"
                            IconActive="wallet-outline"
                            route={ROUTES.WALLET}
                            pathName={pathname}
                        />
                    </View>

                    <View style={{ width: 56 }} />

                    <View className="flex-row flex-1 justify-around items-center">
                        <ButtonBottomBar
                            name="Transaksi"
                            iconDefault="receipt"
                            IconActive="receipt-outline"
                            route={ROUTES.TRANSACTION}
                            pathName={pathname}
                        />

                        <ButtonBottomBar
                            name="Profil"
                            iconDefault="person"
                            IconActive="person-outline"
                            route={ROUTES.PROFILE}
                            pathName={pathname}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
