import React from 'react';
import {View, StyleSheet, ToastAndroid, Button} from 'react-native';
import styles from './style';

const ToastDemo = () => {
  const showToast = () => {
    ToastAndroid.show('this is short message', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'this is short with gravity message',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'this is last message', //message
      ToastAndroid.LONG, //duration
      ToastAndroid.TOP, //gravity
      20, //xoffSet
      200, //yOffset
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

export default ToastDemo;
