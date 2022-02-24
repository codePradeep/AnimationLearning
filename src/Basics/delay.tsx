import React, { useEffect, useRef } from 'react';
import { Animated, Button, View, Text, TouchableOpacity, PushNotificationIOS, Easing } from 'react-native';

const BesicsDelayAnimation = () => {

    const animatedValue = new Animated.Value(0)
    const animatedValue2 = new Animated.Value(0)

    Animated.sequence([
        Animated.timing(animatedValue, {
            toValue: 90,
            duration: 1000,
            useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.timing(animatedValue2, {
            toValue: 90,
            duration: 1000,
            useNativeDriver: true,
        }),
    ]).start()


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Animated.View

                style={{

                    height: 80,
                    width: 80,
                    backgroundColor: 'red',
                    transform: [
                        { translateX: animatedValue }
                    ]
                }}
            />
            <Animated.View

                style={{

                    height: 80,
                    width: 80,
                    backgroundColor: 'blue',
                    transform: [
                        { translateX: animatedValue2 }
                    ]
                }}
            />
        </View>
    )
}
export default BesicsDelayAnimation;