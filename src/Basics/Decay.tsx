import React, {useEffect, useRef} from 'react';
import {Animated, Button, View,Text, TouchableOpacity,  Easing} from 'react-native';

const BesicDecayAnimation = () => {

     const animatedValue= new Animated.Value(-200) 
   

     const handleAnimation = () => {
        animatedValue.setValue(-200)
        Animated.decay(animatedValue, {
        //   toValue: 50,
        //   duration: 2000,
          velocity: 0.95,
          deceleration: 0.998,
          useNativeDriver: true
        }).start();
      }

   return (
    
        <View style={{ height: '100%', width: '100%', justifyContent: "center", alignItems: "center" }}>
          <Animated.View style={{ height: 150, width: 150, backgroundColor: 'red', transform: [{ translateY: animatedValue }] }} />
          <View style={{ width: 100, marginTop: 20 }}>
            <Button onPress={handleAnimation} title='Press Me' />
          </View>
        </View>
   )
}
export default BesicDecayAnimation;