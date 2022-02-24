import React, {useEffect, useRef} from 'react';
import {Animated, Button, View,Text, TouchableOpacity, PushNotificationIOS} from 'react-native';

const BesicInterpolation = () => {

     const position= new Animated.ValueXY({x:0,y:0}) 
     const line= new Animated.ValueXY({x:0,y:0}) 
   
    //   Animated.timing(position, {
    //       toValue:{x:200,y:500},
    //       duration:2000,
    //      // bounciness:20,
    //       useNativeDriver: true,
    //   }).start();

      Animated.timing(line, {
        toValue:{x:1,y:1},
        duration:2000,
       // bounciness:20,
        useNativeDriver: true,
    }).start();
    
    const longline=line.x.interpolate({
      inputRange:[0,50,100],
      outputRange:[0,100,200]
    })

      const rotate=position.x.interpolate({
          inputRange:[0,100],
          outputRange:["0deg","360deg"]
      })
   
  
   

   return (
     <View style={{flex:1,}} > 
       <Animated.View

          style = {{
            
              height: 80,
              width: 80,
              backgroundColor: 'red',
              justifyContent:"center",
              alignItems:"center",
              transform: [
                          //  {translateX:position.x },
                          //  {translateY:position.y },
                           {scaleX:longline},
                          //  {scaleY:line.y}
                        // {rotate:rotate}
                         ]
          }}
       >

           <Text>hi</Text>
       </Animated.View>
     </View>
   )
}
export default BesicInterpolation;