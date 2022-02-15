import React, {useRef} from 'react';
import {Animated, Button, View,Text, TouchableOpacity} from 'react-native';

const Demoanimation = () => {
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
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}} > 
       <Animated.View
       onTouchStart={runAnimationOnClick}

          style = {{
            
              height: 200,
              width: 200,
              backgroundColor: 'red',
              
                // opacity: animationValue.interpolate({
                //           inputRange: [0, 1],
                //           outputRange: [0,1],
                //        }),
              
              transform: [
                           {
                             scale: animationValue.interpolate({
                                       inputRange: [0, 1],
                                       outputRange: [1, 2],
                                    }),
                           },
                          
                           {
                             rotate: animationValue.interpolate({
                                       inputRange: [0, 1],
                                       outputRange: ['0deg','180deg'],
                                    }),
                           },
                           {
                            translateY: animationValue.interpolate({
                                      inputRange: [-1, 0,1],
                                      outputRange: [80,0,90],
                                   }),
                          },
                         ],
          }}
       />
     
     {/* <TouchableOpacity
      onPressIn={runAnimationOnClick}
    // onBlur={runAnimationOnClick}
      >
       <Text style={{backgroundColor:"blue"}}>clickme</Text>
     </TouchableOpacity> */}
     </View>
   );
}
export default Demoanimation;