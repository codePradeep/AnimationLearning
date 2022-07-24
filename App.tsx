import React, {useState, useRef, useEffect} from 'react';
import GettingCall from './src/Component/GettingCall';
import {
  MediaStream,
  RTCIceCandidate,
  RTCPeerConnection,
  RTCSessionDescription,
} from 'react-native-webrtc';
import VideoScreen from './src/Component/Video';
import {Text, View} from 'react-native';
import CommonButton from './src/Component/Button';
import Utils from './src/Component/utils';
import firestore, {
  firebase,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

const configuration = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};

const App = () => {
  const [localStream, setLocalStream] = useState<MediaStream | any>();
  const [remoteStream, setRemoteStream] = useState<MediaStream | any>();
  const [gettingCall, setGetttingCall] = useState(false);
  const pc = useRef<RTCPeerConnection | any>();
  const connecting = useRef(false);

  const cRef = firestore().collection('meet').doc('chatID');

  useEffect(() => {

    const subscribe = cRef.onSnapshot(snapshot => {
      const data = snapshot.data();

      //on answer start the call
      if (pc.current && !pc.current.remoteDescription && data && data.answer) {
        pc.current.setRemoteDescription(new RTCSessionDescription(data.answer));
      }

      //if there is offer for the chat id se the getting call flag
      if (data && data.offer && !connecting.current) {
        setGetttingCall(true);
      }
    });

    const subscribeDelete = cRef.collection('callee').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'removed') {
          hungup();
        }
      });
    });

    return () => {
      subscribe();
      subscribeDelete();
    };
  }, []);

  const setupWebrtc = async () => {
    pc.current = new RTCPeerConnection(configuration);
    //get the audio and video stream on call
    const stream = await Utils.getStream();
    if (stream) {
      setLocalStream(stream);
      pc.current.addStream(stream);
    }
    //get the remote stream onec it is avialble
    pc.current.onaddstream = (event: any) => {
      setRemoteStream(event.stream);
    };
  };


  const create = async () => {
    console.log('calling');
    connecting.current = true;

    //setup wevrtc
    await setupWebrtc();

    //chaange the IOCE candidates between cakker and calle
    collectIceCandidtes(cRef, 'caller', 'callee');

    if (pc.current) {
      //create the offer for the call
      //storer the offer under the document
      const offer = await pc.current.createOffer();
      pc.current.setLocalDescription(offer);
      const cwithOffer = {
        offer: {
          type: offer.type,
          sdp: offer.sdp,
        },
      };

      cRef.set(cwithOffer);
    }
  };

  //healper function

  const collectIceCandidtes =async (
    cRef: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>,
    localname: string,
    remoteName: string,
  ) => {
    const candidateCollaction = cRef.collection(localname);

    if (pc.current) {
      //on new ICE candidate add it to firbstor
      pc.current.onicecandidate = (event: {
        candidate: FirebaseFirestoreTypes.DocumentData;
      }) => {
        if (event.candidate) {
          candidateCollaction.add(event.candidate);
        }
      };
    }
    //get the ice candidate added to firestore and update the local pc
    cRef.collection(remoteName).onSnapshot((snapshot )=> {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.current?.addIceCandidate(candidate);
        }
      });
    });
  };


  const join = async () => {
    console.log('joining the call ');
    connecting.current = true;
    setGetttingCall(false);

    const offer = (await cRef.get()).data()?.offer;
    if (offer) {
      //Setup webRTC
      await setupWebrtc();
      // exchanging the parameter its seversed since the joining part is callee
      collectIceCandidtes(cRef, 'callee', 'caller');
      if (pc.current) {
        pc.current.setRemoteDescription(new RTCSessionDescription(offer));
        pc.current.AVAudioSessionCategoryOptionDefaultToSpeaker

        // create the answer for the call
        ///update the document with answer
        const answer = await pc.current.createAnswer();
        pc.current.setLocalDescription(answer);

        const cWithAnswer = {
          answer: {
            type: answer.type,
            sdp: answer.sdp,
          },
        };
        cRef.update(cWithAnswer);
      }
    }
  };

  // for disconnecting
  const hungup = async () => {
    setGetttingCall(false);
    connecting.current = false;
    streamCleanUp();
    firestoreCleanup();
    if (pc.current) {
      pc.current.close();
    }
  };
  // stream claen up for the call disconnect 
  const streamCleanUp = async () => {
    if (localStream) {
      localStream.getTracks().forEach ((a:{ stop: () => any; }) => a.stop());
      localStream.release();
    }
    setLocalStream(null);
    setRemoteStream(null);
  };

  // firstore cleanup so call can cut

  const firestoreCleanup = async () => {
    if (cRef) {
      const calleeCandidate = await cRef.collection('callee').get();
      calleeCandidate.forEach(async candidate => {
        await candidate.ref.delete();
      });

      cRef.delete();
    }
  };

  //display the geetoing call comp
  if (gettingCall) {
    return <GettingCall hungup={hungup} join={join} />;
  }

  //display local streaming on calling
  if (localStream) {
    return (
      <VideoScreen
        hungup={hungup}
        localStream={localStream}
        remoteStream={remoteStream}
      />
    );
  }

  //display the call button
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:"black",
    marginBottom:20}}> Press on Video Button for Call</Text>
      <CommonButton
        onPress={() => create()}
        iconName={'video'}
        style={{backgroundColor: 'grey'}}
      />
    </View>
  );
};

export default App;
