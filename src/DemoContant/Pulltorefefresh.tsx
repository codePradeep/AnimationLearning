import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';

function delay(timeout: any) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Pulltorefresh = () => {
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);

    delay(1500).then(() => setLoading(false));
  }, [loading]);


  function onScroll(event:any) {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    console.log(event)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {loading ?
          <View style={{
            backgroundColor: "blue",
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ color: "white", fontSize: 22 }}>hii</Text>
          </View>
          :
          null}
        <ScrollView
          onScroll={onScroll}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              //   progressBackgroundColor="red"
              // progressViewOffset={2}

              // tintColor="red"
              refreshing={loading}
              onRefresh={loadMore}
            />
          }>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text><Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text><Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
          <Text>Swipe down to refresh</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .5,
  backgroundColor:"green"
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Pulltorefresh;