import React from "react";
import { Button, Text, View, SafeAreaView, StyleSheet, Systrace } from "react-native";

const SysTraceDemo = () =>  {

  const enableProfiling = () => {
    Systrace.setEnabled(true); // 
    console.log("Call setEnabled to turn on the profiling.")
    Systrace.beginEvent('event_label')
    Systrace.counterEvent('event_label', 10);
  }

  const stopProfiling = () => {
    Systrace.endEvent()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>React Native Systrace API</Text>
    <View style={styles.buttonRow}>
      <Button title="Capture the non-Timed JS events in EasyProfiler" onPress={()=> enableProfiling()}/>
      <Button title="Stop capturing" onPress={()=> stopProfiling()} color="#FF0000"/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8
  },
   header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    textAlign: "center"
  },
  buttonRow: {
    flexBasis: 150,
    marginVertical: 16,
    justifyContent: 'space-evenly'
  }
});

export default SysTraceDemo;