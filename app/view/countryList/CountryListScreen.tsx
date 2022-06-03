import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchBar} from '../../components';
import {ICONS, ScreenName} from '../../config';
import LottieView from 'lottie-react-native';
import {FlatListRenderItems} from './flatlistRenderItem';

import styles from './style';

interface CountryListScreenprops {
  navigation: any;
  setSearchText: (text: string) => void;
  SearchData: {
    name: string;
    iso2: string;
    iso3: string;
  }[];
  showLoading:boolean
}
const CountryListScreen = (props: CountryListScreenprops) => {
  const {navigation, setSearchText, SearchData,showLoading} = props;

  return (
    <View style={styles.mainContainer}>
      {showLoading == true ? (
                <LottieView
                    source={require('../../assets/animation/LoadingAnimation.json')}
                    autoPlay
                    loop
                />
            ) :
             (
      <View>
        <SearchBar
          PlaceHolder={'Search State'}
          OnChangeText={(Text: string) => setSearchText(Text)}
          OnPress={function (): void {
            throw new Error('Function not implemented.');
          }}
          Value={''}
        />

        <FlatList
          data={SearchData}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          extraData={SearchData}
          renderItem={({item, index}) => (
            <FlatListRenderItems
              {...{
                item,
                navigation
              }}
            />
          )}
        />
      </View>
       )} 
    </View>
  );
};

export default CountryListScreen;
