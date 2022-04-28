import React, { useState, useEffect, useCallback } from 'react';
import LottieView from 'lottie-react-native';


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
import PullToRefreshComponent from './pulltoRefresh';


const PulltoAnimation = () => {


  
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <PullToRefreshComponent
      component={<Text style={{
        width:395,
        textAlign:"center"}}>
            Swipe down to see Animation
            </Text>
            }
        >
        {/* <Text style={{
              width:395,
              textAlign:"center"}}>Swipe down to see Animation</Text>
           */}
      </PullToRefreshComponent>
    
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

export default PulltoAnimation;
