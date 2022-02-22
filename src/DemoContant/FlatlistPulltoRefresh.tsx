import React, { useState, useEffect, useCallback } from 'react';

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
  PanResponder,
} from 'react-native';


const FlatlistPulltoRefresh = () => {

  
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  let [page,setpage]=useState(1)
  const position = new Animated.Value(0)
  const hight =new Animated.Value(140)

  
    const [loading, setLoading] = useState(false);
  
    const loadMore = useCallback(async () => {
      setLoading(true);
  
      delay(15000).then(() => setLoading(false));
    }, [loading]);

    const delay=(timeout: any) =>{
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }
   
  

  useEffect(() => {
    getData(page);
  }, []);
 

      const pan = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
            console.log("gesture",gesture.dy)
            position.setValue( gesture.dy )
            if(gesture.dy>140){
              loadMore()
            }
          
        },
 
        onPanResponderRelease: () => {

            Animated.spring(position, {
                toValue: 0,
                useNativeDriver: true
            }).start()
        }
    })

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
    console.log("onscroll=>",y)
  }


  return (
    <SafeAreaView style={{ flex: 1 ,}}>
    

         <View style={{
           
           backgroundColor:"blue",
             flex:1,
            // position: 'absolute',
            zIndex:77,
            elevation:66,
             top: 0,
             left: 0,
             right: 0,
             justifyContent:"center",
             alignItems:"center"
         }}>
          {loading? <Text style={{color:"white",fontSize:33}}>Pradeep Sharma</Text>:null }

         
         <Animated.View
         {...pan.panHandlers}
         style={{flex:1, backgroundColor:"white", transform: [
           
           {translateY:position },
         ]}}>
        <Animated.FlatList
         
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          pinchGestureEnabled={true}
          scrollToOverflowEnabled={true}
          onEndReached={()=>handleLoadMore()}
          renderItem={ItemView}
          onScroll={onScroll}
          // refreshControl={
          //   <RefreshControl
          //     //refresh control used for the Pull to Refresh
          //      refreshing={refreshing}
          //     // onRefresh={onRefresh}
          //   />
          // }
        />
        </Animated.View>
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
