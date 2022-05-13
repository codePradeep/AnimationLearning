import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {GlobleDataTypes} from '../../models';
import {GlobleData} from '../../models/GlobleDataypes';
import styles from './style';
import LottieView from 'lottie-react-native';
import {animation} from '../../config/Animation';
import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';
import PieChart from 'react-native-chart-kit/dist/PieChart';


interface HomeScreenprops {
  navigation: any;
  data: GlobleData | undefined;
}
const HomeScreen = (props: HomeScreenprops) => {
  const {navigation, data} = props;
  const newdata = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };
  const pieChartData = [
    {
      name: 'Deaths',
      population: data?.deaths,
      color: '#F00',
      legendFontColor: 'white',
      legendFontSize: 22,
      
    },
    {
      name: 'Recoverd',
      population: data?.recovered,
      color: 'green',
      legendFontColor: 'white',
      legendFontSize: 22,
    },
    
  ];
  return (
    <View style={styles.MainContainer}>
      <LottieView
        source={require('../../assets/animation/background.json')}
        autoPlay
        loop
        style={styles.animationstyle}
      />

      <View style={styles.subContainer}>
        <Text style={styles.headingStyle}>Covid-19 Globle Report</Text>
        <View style={styles.confirmCaseContainer}>
          <Text style={styles.titleStyle}>Total Confirmed Cases:</Text>
          <Text style={styles.valueStyle}>{data?.cases}</Text>
        </View>
        <View style={styles.confirmCaseContainer}>
          <Text style={styles.titleStyle}>Total Deaths Cases:</Text>
          <Text style={styles.valueStyle}>{data?.deaths}</Text>
        </View>
        <View style={styles.confirmCaseContainer}>
          <Text style={styles.titleStyle}>Total Recoverd Cases:</Text>
          <Text style={styles.valueStyle}>{data?.recovered}</Text>
        </View>

        {/* <ProgressChart
          data={newdata}
          width={300}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#08130D',
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(0, 255, 148, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
          }}
          hideLegend={false}
        /> */}
        <PieChart
          data={pieChartData}
          height={200}
          width={350}
          chartConfig={{
            backgroundColor: '#b90602',
            backgroundGradientFrom: '#e53935',
            backgroundGradientTo: '#ef5350',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          style={{paddingRight:0}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Country')}
        style={styles.countryButton}>
        <Text>Country</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
