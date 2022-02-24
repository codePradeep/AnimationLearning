import React, { useEffect, useRef } from 'react';
import { Animated, Button, View, Text, TouchableOpacity, PushNotificationIOS, Easing, Dimensions } from 'react-native';
import FlashScreen from '../DemoContant/FlashScreen';

const BesicsLoopAnimation = () => {


    const animatedValue = new Animated.Value(0)
    const animatedValue2 = new Animated.Value(0)
Animated.loop(
    Animated.parallel([
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: Dimensions.get("screen").width,
                duration: 1000,
                useNativeDriver: true,
            }),
            // Animated.delay(1000),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]),
        Animated.sequence([
            Animated.timing(animatedValue2, {
                toValue: 100,
                duration: 1000,
                useNativeDriver: true,
            }),
            // Animated.delay(1000),
            Animated.timing(animatedValue2, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])

    ])
   ,{
    iterations: 12
  }).start()


    return (
        <View style={{ flex: 1, justifyContent: "center",  }} >
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
                        { translateY: animatedValue2 }
                    ]
                }}
            />
        </View>
    )
}
export default BesicsLoopAnimation;