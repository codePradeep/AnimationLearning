import React from 'react';
import {SafeAreaView} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import styles from './style';

interface QRCodeProp {}

const QRCodeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <QRCode value="http://awesome.link.qr" />
    </SafeAreaView>
  );
};

export default QRCodeScreen;
