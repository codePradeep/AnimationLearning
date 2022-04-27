import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated, Image, NativeEventEmitter, Dimensions } from 'react-native';
import product from '../Config/fakedata';

const { height } = Dimensions.get("screen");
export default function AnimatedFlatlist() {
    const scrollY = React.useRef(new Animated.Value(0)).current;


    const spaccing = 30
    const avatarsize = 90
    const itemsize = avatarsize + spaccing + 3



    return (
        <View style={{ flex: 1 }}>

            <Animated.FlatList
                data={product}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        (height * 0.1 + 15) * index,
                        (height * 0.1 + 15) * (index + 4),
                        
                    ];
                    const Scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0],
                        
                    })
                    const Offset = scrollY.interpolate({
                        inputRange,
                        outputRange: [0, 0, 0,500],
                        
                    })
                    ;
                    return (
                        <Animated.View style={{
                            opacity: Scale,
                            transform: [
                                {
                                    scale: Scale
                                },
                                {
                                    translateX: Offset
                                }]
                        }}>
                            <View style={styles.surface}>
                                <View style={{ flex: 0.3, justifyContent: "center" }}>
                                    <Image source={{ uri: item.thumbnail }} style={{ height: 80, width: 80, alignSelf: "center" }}></Image>

                                </View>
                                <View
                                    style={{
                                        flex: 0.7,
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ fontSize: 14 }}>{item.title}</Text>
                                </View>
                            </View>
                        </Animated.View>
                    )

                }}

                keyExtractor={(item, index) => index.toString()}
                // onScroll={
                //     (e) => {
                //         scrollY.setValue(e.nativeEvent.contentOffset.y)
                //     }
                // }
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
            />




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    surface: {
        height: height * 0.1,
        marginTop: 15,
        padding: 8,
        marginHorizontal: 10,
        backgroundColor: "skyblue",
        borderRadius: 8,
        flexDirection: "row",
    },
});