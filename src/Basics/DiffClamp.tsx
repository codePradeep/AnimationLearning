import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated, Image } from 'react-native';
import Data from '../Config/ArrayData';
import product from '../Config/fakedata';





export default function DemoScreen() {
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 45)
   
    const translateY = diffClamp.interpolate({
        inputRange: [0, 45],
        outputRange: [0, -45]
    })

    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    transform: [
                        { translateY: translateY }
                    ],
                    elevation: 4,
                    zIndex: 100,
                }}
            >
                <View style={{ backgroundColor: "blue", padding: 20,top:0,zIndex:40,elevation:40,left:0,right:0 }}>
                    <Text style={{ alignSelf: "center" }}>Header</Text>
                </View>
            </Animated.View>

            <FlatList
                data={product}
                renderItem={({ item }) => {
                    return (
                    <View style={{flexDirection:"row",borderWidth:1,padding:20}}>
                        <Image source={{uri:item.thumbnail}} style={{height:40,width:40,alignSelf: "center"}}></Image>
                        <Text style={{ alignSelf: "center", fontSize: 30 }}>{item.title}</Text>
                    </View>)

                }}

                keyExtractor={(item, index) => index.toString()}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            />




        </View>
    );
}