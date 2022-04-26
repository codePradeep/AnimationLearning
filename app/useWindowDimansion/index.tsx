import React from "react";
import { View, StyleSheet, Text, useWindowDimensions, ScaledSize } from "react-native";


const WindowDimantion = () => {
  const window = useWindowDimensions();
  return (
    <View style={styles(window).container}>
      <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
    </View>
  );
}
const styles =(window: ScaledSize)=> StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default WindowDimantion;