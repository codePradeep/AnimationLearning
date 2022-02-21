
//React Native Swipe Down to Refresh List View Using Refresh Control
//https://aboutreact.com/react-native-swipe-down-to-refresh-listview-using-refreshcontrol/

//import React in our code
import React, { useState, useEffect } from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
  Alert,
  Animated,
} from 'react-native';

const FlatlistPulltoRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  let [page,setpage]=useState(1)

  useEffect(() => {
    getData(page);
  }, []);

  const getData = ({page}:any) => {
    //Service to get the data from the server to render
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
 const handleLoadMore = () => {
    if (refreshing) {
      page = page + 1; // increase page by 1
      getData(page); // method for API call 
    }
  }; 
  const ItemView = ({ item }:any) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.title}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item:any) => {
    //Function for click on an item
    Alert.alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData(page);
  };



  
  function onScroll(event:any) {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    console.log(y)
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {refreshing ?
        
        <View
        style={{backgroundColor:"blue"}}> 
        <Text>Loading</Text>
        {/* <ActivityIndicator /> */}
         </View> : null}

         <Animated.View style={{
             height: 100,
            //  position: 'absolute',
             top: 5,
             left: 0,
             right: 0,
         }}>

         </Animated.View>
        <Animated.FlatList
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          //enableEmptySections={true}
          onEndReached={()=>handleLoadMore()}
          renderItem={ItemView}
          onScroll={onScroll}
        //   refreshControl={
        //     <RefreshControl
        //       //refresh control used for the Pull to Refresh
        //       refreshing={refreshing}
        //       onRefresh={onRefresh}
        //     />
        //   }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  itemStyle: {
    fontSize: 20,
    padding: 10,
  },
});

export default FlatlistPulltoRefresh;
