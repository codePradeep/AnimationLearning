import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {CountryDataType} from '../../models';
import styles from './style';
import LottieView from 'lottie-react-native';
import {animation} from '../../config/Animation';

interface CountryScreenprops {
  navigation: any;
  data: CountryDataType | undefined;
  showLoading: boolean;
  flatListData: any;
}
const CountryScreen = (props: CountryScreenprops) => {
  const {navigation, data, showLoading, flatListData} = props;

  return (
    <View style={styles.MainContainer}>
      {showLoading == true ? (
        <LottieView
          source={require('../../assets/animation/LoadingAnimation.json')}
          autoPlay
          loop
        />
      ) : (
        <View>
          <Text style={styles.valueStyle}>India</Text>
          <View style={styles.confirmCaseContainer}>
            <Text style={styles.headingStyle}>Total Confirmed Cases:</Text>
            <Text style={styles.valueStyle}>{data?.confirmed.value}</Text>
          </View>
          <View style={styles.confirmCaseContainer}>
            <Text style={styles.headingStyle}>Total Deaths Cases:</Text>
            <Text style={styles.valueStyle}>{data?.deaths.value}</Text>
          </View>
          <View style={styles.confirmCaseContainer}>
            <Text style={styles.headingStyle}>Total Recoverd Cases:</Text>
            <Text style={styles.valueStyle}>{data?.recovered.value}</Text>
          </View>
          <Text>{data?.lastUpdate}</Text>

          <FlatList
            data={flatListData}
            renderItem={({item, index}) => (
              <View style={{
                  padding:20,
               flexDirection:"row",
               justifyContent:"space-around"
              }}>
                <Text>{item.provinceState}</Text>
                <View>
                <Text>Confirmed :{item.confirmed}</Text>
                <Text>Deaths :{item.deaths}</Text>
                <Text>Recovered :{item.recovered}</Text>
                <Text>active :{item.active}</Text>

                </View>
              </View>
            )}
            ItemSeparatorComponent={()=><View style={{ borderBottomWidth:2,marginVertical:10}}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default CountryScreen;
