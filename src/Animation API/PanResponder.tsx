import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const PanResponderAPi = () => {
  const pan = useRef(new Animated.ValueXY({x:0,y:0})).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: 
      (e, gesture) => {
        pan.setValue({ x: gesture.x0, y: gesture.y0 })
        
    },

    //    Animated.event([null,{ dx: pan.x, dy: pan.y }]
    //   ),
      onPanResponderRelease: () => {
        // pan.flattenOffset();
        
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
    borderRadius: 50
  }
});

export default PanResponderAPi;