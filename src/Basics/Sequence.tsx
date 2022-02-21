import React, {useEffect, useRef} from 'react';
import {Animated, Button, View,Text, TouchableOpacity, PushNotificationIOS, Easing} from 'react-native';

const BesicSequenceAnimation = () => {

     const animatedValue= new Animated.Value(0) 
   

      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          useNativeDriver: true,
          easing: Easing.linear,
          duration: 400
        }),
        Animated.spring(animatedValue, {
          toValue: 2,
          delay: 1000,
          friction: 1,
          useNativeDriver: true
        })
      ]).start()
   

   return (
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}} > 
       <Animated.View

          style = {{
            
              height: 80,
              width: 80,
              backgroundColor: 'red',
              transform: [
                           {scale:animatedValue}
                         ]
          }}
       />
     </View>
   )
}
export default BesicSequenceAnimation;