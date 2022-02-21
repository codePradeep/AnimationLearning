import React, {useEffect, useRef} from 'react';
import {Animated, Button, View,Text, TouchableOpacity, PushNotificationIOS} from 'react-native';

const BesicAnimation = () => {

     const position= new Animated.ValueXY({x:0,y:0}) 
   
      Animated.spring(position, {
          toValue:{x:20,y:50},
          speed:1,
          bounciness:20,
          useNativeDriver: true,
      }).start();
   
  
   

   return (
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}} > 
       <Animated.View

          style = {{
            
              height: 80,
              width: 80,
              backgroundColor: 'red',
              transform: [
                           {translateX:position.x },
                           {translateY:position.y },
                         ]
          }}
       />
     </View>
   )
}
export default BesicAnimation;