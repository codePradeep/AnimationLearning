import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeViewModel from '../viewModel/HomeViewModel';
import CountryViewModel from '../viewModel/CountryViewModel';



const Stack = createNativeStackNavigator();

export default ()=> {
  return (
    
      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeViewModel} />
        <Stack.Screen name="Country" component={CountryViewModel} />

      </Stack.Navigator>
  );
}

