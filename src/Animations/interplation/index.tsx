import React, { useEffect, useRef,useState } from 'react';
import { Animated } from 'react-native';

const Animation_Interpolation=() => {
 
    const translation = useRef(new Animated.Value(0)).current;
  

 useEffect(() => {

    // Animated.loop(
         Animated.timing(translation, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false,
    }).start();
   
    
 },  );

  
 
//   function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
 
  


  
  return (
    <Animated.View
      style={{
        
      //  justifyContent:"center",
        width: 100,
        height: 100,
        backgroundColor:"red",
        borderRadius:90,
        
        // backgroundColor: translation.interpolate({
        //     inputRange: [0,100, 200],
        //     outputRange: ['orange','black', 'blue'],
        //   }),
        opacity: translation.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [1, 1, 1],
            extrapolate: 'clamp',
          }),
        transform: [
          { translateY: translation },
          { translateX: translation },
        //   { rotate: translation.interpolate({
        //       inputRange: [0, 100,200],
        //       outputRange: ['0deg', '60deg','180deg'],})
        //   },

    //       {
    //           scaleY:translation.interpolate({
    //             inputRange: [0, 1],
    // outputRange: [1, 0.9],})
    //       }
        ],
      }}
    />
  );
}

export default Animation_Interpolation