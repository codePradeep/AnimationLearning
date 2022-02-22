import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Animated,
    SafeAreaView,
    Dimensions,
    ImageBackground,
} from 'react-native';
import Data from '../Config/ArrayData';


const OnboardingDots = () => {
   
    const { width: windowWidth, height: windowHeight } = Dimensions.get("screen");

    const scrollX = useRef(new Animated.Value(0)).current;
    
 const imagebackground= Animated.createAnimatedComponent(ImageBackground)


    return (
        <SafeAreaView>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(e)=>scrollX.setValue(e.nativeEvent.contentOffset.x)}
                >
                {Data.map((item, index) => {
                    return (
                        <View
                            style={{ width: windowWidth, height: windowHeight }}
                            key={index}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'skyblue',
                                justifyContent:"center"
                            }}>
                                <Text style={styles.Name}>{item.name}</Text>
                            </View>
                        </View>

                    );
                })}
            </ScrollView>


            <View style={styles.indicator}>
                {Data.map((item, index) => {
                     const dots = scrollX.interpolate({
                                inputRange: [  windowWidth *(index - 1), windowWidth * index, windowWidth * (index + 1)],
                                outputRange: [10, 30, 10],
                                 extrapolate: 'clamp',
                            },)
                    return (
                        <Animated.View 
                         key={index} 
                         style={[
                             styles.normalDot, 
                             { width :dots,
                            }]
                            } />
                    );
                })}
            </View>
        </SafeAreaView>
        
    );
};

export default OnboardingDots;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Name: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        alignSelf:"center"
    },

    indicator: {
        position: 'absolute',
        bottom: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    normalDot: {
        height: 40,
        width: 40,
        borderRadius: 40,
        marginHorizontal: 5,
        backgroundColor: '#fff',

    },
});