
 import React, { useEffect, useRef } from 'react';
 import {
   Animated,
   Easing,
   SafeAreaView,
   ScrollView,
   StatusBar,
   Text,
   View,
 } from 'react-native';
 
 
 const Animation = () => {
   const spinValue = new Animated.Value(0)

  // const spinValue = useRef(new Animated.Value(0)).current;

   const spin = spinValue.interpolate({  
    inputRange: [0,1],  
    outputRange: ['0deg','360deg']  
})



useEffect(() => {
  Animated.timing(spinValue, {
    toValue: 200,
    duration:4000,
    // delay:600,
    // friction:1,
    // tension:89,
    // easing: Easing.linear,
    useNativeDriver: true,
  }).start()
   

  
}, []);

//  const getsping=()=>{
   setInterval(()=>{
     console.log(spin)
   },5000)
//  }
 
   return (
     <SafeAreaView >
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
        
        >
         <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
         <Animated.Image  
                    style={{  
                        width: 227,  
                        height: 200,  
                        resizeMode:"contain",
                        transform: [{rotate: spin}] }}  
                    source={require('../assets/sun.png') }  
                />  
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 

 export default Animation;
 