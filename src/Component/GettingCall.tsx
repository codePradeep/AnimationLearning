import React, { useEffect } from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CommonButton from './Button';

interface GettingCallProp {
  hungup: () => void;
  join: () => void;
}

const GettingCall = (props: GettingCallProp) => {
  const {hungup, join} = props;
  useEffect(() => {
    whoosh.setVolume(1);
    return () => {
        whoosh.release();
    };
  }, []);

  var Sound = require('react-native-sound');
  Sound.setCategory('Playback');
  var whoosh = new Sound("telephone.mp3", Sound.MAIN_BUNDLE, (error: any) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    whoosh.play((success: any) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
  
  

  return (
    <SafeAreaView style={styles.maincontainer}>
        <Image source={require("../assets/images/luffyImage.jpg") }  style={styles.imageStyle}/>
      <View style={{flexDirection: 'row', margin: 10,position:"absolute",bottom:40}}>
        <CommonButton
          onPress={() => hungup()}
          iconName={'phone'}
          style={{backgroundColor: 'red', marginRight: 40}}
        />
        <CommonButton
          onPress={() => {
            join(), console.log('==============>');
          }}
          iconName={'phone'}
          style={{backgroundColor: 'green'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default GettingCall;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle:{
    width:"100%",
    height:"100%"
  }
});
