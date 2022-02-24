import React, { useEffect, useRef } from 'react';
import { Animated, Button, View, Text, PanResponder } from 'react-native';

const HendlingGestures = () => {

    const position = new Animated.ValueXY({ x: 0, y: 0 })
    const line = new Animated.ValueXY({ x: 0, y: 0 })
    // const position_new = new Animated.Value(0)


    //   Animated.timing(position, {
    //       toValue:{x:200,y:500},
    //       duration:2000,
    //      // bounciness:20,
    //       useNativeDriver: true,
    //   }).start();


    const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
            console.log(gesture.dx,gesture.dy)
            position.setValue({ x: gesture.dx, y: gesture.dy })
        },
 
        // Animated.event([null,
        //     { dx: position.x, dy: position.y }
        // ]),
        onPanResponderRelease: () => {
            // position.setValue({ x: 0, y: 0 })
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: true
            }).start()
        }
    })


    const rotate = position.x.interpolate({
        inputRange: [0, 100],
        outputRange: ["0deg", "360deg"]
    })

    const animationValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(0);

    const runAnimationOnClick = () => {
        scaleValue.current = scaleValue.current === 0 ? 1 : 0;
        Animated.spring(animationValue, {
            toValue: scaleValue.current,
            //  duration:5000,
            useNativeDriver: true,
        }).start();
    }



    return (
        <View style={{
            flex: 1, justifyContent: "center",
            alignItems: "center",
        }} >
            <Animated.View
                // onTouchStart={runAnimationOnClick}
                {...pan.panHandlers}

                style={{

                    height: 80,
                    width: 80,
                    borderRadius: 90,
                    backgroundColor: 'blue',
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [
                        {
                            scale: animationValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 2],
                            }),
                        },

                        { translateX: position.x },
                        
                        { translateY: position.y },
                        { rotate: rotate }
                    ]
                }}
            >

                <Text style={{ color: "white", fontSize: 34 }}>hi</Text>
            </Animated.View>
        </View>
    )
}
export default HendlingGestures;