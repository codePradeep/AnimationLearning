import React, { useState, useEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

const useMount = (func :any) => useEffect(() => func(), []);

const useInitialURL = () => {
  const [url, setUrl] = useState<any>(null);
  const [processing, setProcessing] = useState(true);

  useMount(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the DeepLinkingDemo

      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  });

  return { url, processing };
};

const DeepLinkingDemo
 = () => {
  const { url: initialUrl, processing } = useInitialURL();

  return (
    <View style={styles.container}>
      <Text>
        {processing
          ? `Processing the initial url from a deep link`
          : `The deep link is: ${initialUrl || "None"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DeepLinkingDemo
;