import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryViewModel, HomeViewModel, CountryListViewModel } from '../viewModel';
import { NavigationScreen } from '../config';




const Stack = createNativeStackNavigator();

export default () => {
  return (

    <Stack.Navigator initialRouteName={NavigationScreen.HOME_VIEW_MODEL}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationScreen.HOME_VIEW_MODEL} component={HomeViewModel} />
      <Stack.Screen name={NavigationScreen.COUNTRY_VIEW_MODEL} component={CountryViewModel} />
      <Stack.Screen name={NavigationScreen.COUNTRYLIST_VIEW_MODEL} component={CountryListViewModel} />


    </Stack.Navigator>
  );
}

