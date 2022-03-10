import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const SendIntentButton = ( {action , extras, children} ) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e) {
      Alert.alert(e.message);
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

const IntentDemo = () => {
  return (
    <View style={styles.container}>
      <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY" extras={undefined} >
        Power Usage Summary
      </SendIntentButton>
      <SendIntentButton
        action="android.intent.category.CAR_MODE"
        extras={[
          { "android.provider.extra.APP_PACKAGE": "com.facebook.katana" },
        ]}
      >
        App Notification Settings
      </SendIntentButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default IntentDemo;