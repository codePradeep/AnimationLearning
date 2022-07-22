import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface CommonButtonProp {
  onPress: any;
  iconName: string;
  style: any;
}

const CommonButton = (props: CommonButtonProp) => {
  const {onPress, iconName, style} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={[style, styles.button]}>
        <Icon name={iconName} color={'white'} size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    padding: 10,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
