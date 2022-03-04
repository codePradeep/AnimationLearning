import React from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
  
const  Googlemap =()=>{
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={true}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 28.5995001,   
            longitude: 77.3315623,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
  
          {/* <Marker  
            coordinate={{ latitude: 28.5995001, longitude: 77.3315623 }}  
            title={"Successive Technologies"}  
            pinColor="skyblue"
            opacity= {1}
          />   */}





        </MapView>  
          
      </View>  
    );  
  }  


const styles = StyleSheet.create({  
    MainContainer: {  
      position: 'absolute',  
      top: 0,  
      left: 0,  
      right: 0,  
      bottom: 0,  
      alignItems: 'center',  
      justifyContent: 'flex-end',  
    },  
    mapStyle: {  
      position: 'absolute',  
      top: 0,  
      left: 0,  
      right: 0,  
      bottom: 0,  
    },  
});  

export default Googlemap
