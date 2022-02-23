import * as React from 'react';
import { Animated, View, Button, Text, TouchableHighlight } from 'react-native';


const ButtonBinding=()=> {
  const button1AnimationValue = React.useRef(new Animated.Value(0)).current;
  const button2AnimationValue = React.useRef(new Animated.Value(0)).current;
  const button3AnimationValue = React.useRef(new Animated.Value(0)).current;

  const buttonPressed = () => {
    button1AnimationValue.setValue(0);
    button2AnimationValue.setValue(0);
    button3AnimationValue.setValue(0);
    Animated.stagger(100, [
      Animated.timing(button1AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(button2AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(button3AnimationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {})
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={{
          marginTop: 5,
          marginBottom: 5,
          opacity: button1AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
          <Button title={'Button 1'} color={'red'} />
      </Animated.View>
      <Animated.View style={{
          marginTop: 5,
          marginBottom: 5,
          opacity: button2AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
          <Button title={'Button 2'} color={'cyan'} />
      </Animated.View>
      <Animated.View style={{
          marginTop: 5,
          marginBottom: 5,
          opacity: button3AnimationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}>
          <Button title={'Button 2'} color={'green'} />
      </Animated.View>
      <Button title={'Run Animation'} onPress={buttonPressed} />
      <Text>Total fadein animation completes in 300ms but there is staggering delay of 100ms. So, second button will start fading in after 100ms of first button.</Text>
    </View>
  );
}

export default ButtonBinding