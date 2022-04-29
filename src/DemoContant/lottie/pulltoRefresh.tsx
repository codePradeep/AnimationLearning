import React, { useCallback, useState } from "react";
import { Animated, Easing, PanResponder, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import LottieView from 'lottie-react-native';

interface PullToRefreshProps{
    navigation:any
}
const PullToRefreshComponent=(props:any)=>{

    const position = new Animated.Value(0)
  
    const animatedValue = new Animated.Value(0)
  
    const [loading, setLoading] = useState(false);
  
    const loadMore = useCallback(async () => {
      setLoading(true);
  
      delay(3500).then(() => setLoading(false));
    }, [loading]);
  
    const delay = (timeout: any) => {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }
  
    const pan = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        console.log("gesture", gesture.dy)
         if (gesture.dy > 0) {
          position.setValue(gesture.dy)
       }
        if (gesture.dy > 200) {
          loadMore()
        }
  
      },
  
      onPanResponderRelease: () => {
        Animated.spring(position, {
          toValue: 0,
          useNativeDriver: true
        }).start()
      }
    })
  
    
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
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{
          backgroundColor: "skyblue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
          {loading && 
              <LottieView source={require('./animation.json')} 
              style={{
                  width:100,
                  height:100
              }}
              autoPlay 
              loop 
              />
            }
  
  
          <Animated.View
            {...pan.panHandlers}
            style={{
              flex: 1, backgroundColor: "white", transform: [
                { translateY: position },
              ]
            }}>
            {/* <ScrollView
            contentContainerStyle={styles.scrollviewcontainer}
            > */}
               {props.children}
            {/* </ScrollView> */}
          </Animated.View>
        </View>
  
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginTop: 10,
    },
    itemStyle: {
      fontSize: 20,
      padding: 10,
    },
    scrollviewcontainer:{
      flex:1,
      justifyContent:"center",
      backgroundColor:"#1797c8"
     
    }
  });
  

export default PullToRefreshComponent

