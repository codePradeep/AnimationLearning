import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const MyWebViewComponent = () => {

    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: 'https://uat-ui.marketcube.io/' }} />
        </View>
    )
}
export default MyWebViewComponent