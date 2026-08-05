import React, { useEffect } from "react"
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming,
    withSequence,
} from "react-native-reanimated"
import { scheduleOnRN } from "react-native-worklets"

type Props = {
    onFinish: () => void
}

export default function AnimatedSplash({ onFinish }: Props) {
    const containerOpacity = useSharedValue(1)

    const logoOpacity = useSharedValue(0)
    const logoScale = useSharedValue(0.7)

    useEffect(() => {
        logoOpacity.value = withSequence(
            withTiming(1, {
                duration: 500,
            }),
            withDelay(
                1200,
                withTiming(0, {
                    duration: 400,
                })
            )
        )

        logoScale.value = withSequence(
            withSpring(1, {
                damping: 10,
                stiffness: 120,
            }),
            withDelay(
                1200,
                withTiming(1.2, {
                    duration: 400,
                })
            )
        )

        containerOpacity.value = withDelay(
            1700,

            withTiming(0, {}, (finished) => {
                if (finished) {
                    scheduleOnRN(onFinish)
                }
            })
        )
    }, [])

    const logoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
        transform: [
            {
                scale: logoScale.value,
            },
        ],
    }))

    const containerStyle = useAnimatedStyle(() => ({
        opacity: containerOpacity.value,
    }))

    return (
        <Animated.View
            style={containerStyle}
            className="flex-1 items-center justify-center bg-white"
        >
            <Animated.Image
                source={require("@/assets/image/Logo.png")}
                style={[{ width: 120, height: 120 }, logoStyle]}
                resizeMode="contain"
            />
        </Animated.View>
    )
}
