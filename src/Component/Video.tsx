import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import {MediaStream, RTCView} from 'react-native-webrtc';
import CommonButton from './Button';

interface VideoScreenProp {
  hungup: () => void;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null | undefined;
}

function ButtonContainer(props: VideoScreenProp) {
  return (
    <View style={styles.buttonContainer}>
      <CommonButton
        onPress={() => props.hungup()}
        iconName={'phone'}
        style={{backgroundColor: 'red'}}
      />
    </View>
  );
}

const VideoScreen = (props: VideoScreenProp) => {
  const {hungup, localStream, remoteStream} = props;

  const [islongPressed, setIslongPressed] = useState(false);

  const LongPressedOnView=()=>{

    setIslongPressed(!islongPressed)
  }

  const [isbig, setIsBig] = useState(false);
  //on call we will just display the local
  if (props.localStream && !props.remoteStream) {
    return (
      <View style={styles.container}>
        <RTCView
          streamURL={localStream.toURL()}
          objectFit={'cover'}
          style={styles.stream}
        />
        <ButtonContainer
          hungup={hungup}
          localStream={localStream}
          remoteStream={remoteStream}
        />
      </View>
    );
  }
  //once call will connected
  if (props.localStream && props.remoteStream) {
    return (
      <View style={styles.container}>
        <RTCView
          streamURL={islongPressed?remoteStream.toURL():localStream.toURL()}
          objectFit={'cover'}
          style={styles.stream}
        />
        <TouchableOpacity onPress={() => setIsBig(!isbig)}  onLongPress={()=>LongPressedOnView()} style={{flex:1,position: 'absolute' ,top: 5,
              left: 20,}}>
          <RTCView
            streamURL={!islongPressed?remoteStream.toURL():localStream.toURL()}
            objectFit={'cover'}
            style={{
              width: isbig ? 50 : 100,
              height: isbig ? 50 : 150,
              elevation: 10,
              borderRadius:90
            }}
          />
        </TouchableOpacity>

        <ButtonContainer
          hungup={hungup}
          localStream={localStream}
          remoteStream={remoteStream}
        />

      </View>
    );
  }

  return (
    <ButtonContainer
      hungup={hungup}
      localStream={localStream}
      remoteStream={remoteStream}
    />
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    bottom: 30,
  },
  stream: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
