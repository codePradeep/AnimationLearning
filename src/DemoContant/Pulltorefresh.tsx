import React, { useState, useEffect, useCallback } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
  Animated,
  PanResponder,
  Easing,
  ScrollView
} from 'react-native';


const PulltoRefresh = () => {


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
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        {loading ? <Animated.Text style={{
          color: "white",
          fontSize: 22,
          marginVertical: 50,
          transform: [{ scale: animatedValue }]
        }}>Pradeep Sharma</Animated.Text>
          : null}


        <Animated.View
          {...pan.panHandlers}
          style={{
            flex: 1, backgroundColor: "white", transform: [
              { translateY: position },
            ]
          }}>
          <ScrollView
          contentContainerStyle={styles.scrollviewcontainer}>
            <Text style={{
              width:395,
              textAlign:"center"}}>Swipe down to see Animation</Text>
          </ScrollView>
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
   
  }
});

export default PulltoRefresh;
