import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Image, Dimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import Svg, { Line } from "react-native-svg";

const SpiderAnimation = () => {

  const Swidth = Dimensions.get("screen").width
  const Sheight = Dimensions.get("screen").height


  const pan = useRef(new Animated.ValueXY()).current;
  const [move, setmove] = useState({ x: 50, y: 0 })
  console.log(move)
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (e, gesture) => {
        setmove({ x: gesture.moveX, y: gesture.moveY })

        pan.setValue({ x: gesture.dx, y: gesture.dy })

      },
      onPanResponderRelease: () => {

        setmove({ x: 0, y: 0 })
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true
        }).start()
      }
    })
  ).current;

  const rotate = pan.x.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"]
  })

  return (
    <View style={styles.container}>
      <Image source={require("../assets/spider_web.png")} style={styles.bigIcon} />
      <Svg height={Sheight} width={Swidth} >
        <Line x1={0} y1={0} x2={move.x} y2={move.y} stroke="white" strokeWidth="2" />
      </Svg>
      <Animated.View
        style={{
          position: "absolute",
          zIndex: 45,
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
            { rotate: rotate }
          ]
        }}
        {...panResponder.panHandlers}
      >
        {/* <View style={styles.box} >
            <Text style={styles.Text}>Hello</Text>
            
        </View> */}
        <Image source={require("../assets/spider.png")} style={styles.Icon} />

      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  Text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    color: "white"
  },
  box: {

    height: 50,
    width: 50,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  Icon: {
    height: 50,
    width: 50,
    tintColor: "red"
  },
  bigIcon: {
    top: -20,
    left: -20,
    height: 90,
    width: 100,
    position: "absolute",
    tintColor: "white"
  }
});

export default SpiderAnimation;