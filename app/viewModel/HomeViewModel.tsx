import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import HomeScreen from '../view/home/HomeScreen';
import axios from 'axios';
import {sendGetRequest} from '../network';
import {GlobleDataTypes} from '../models';
import { GlobleData } from '../models/GlobleDataypes';
interface HomeViewModelprops {
  navigation: any;
}

const HomeViewModel = (props: HomeViewModelprops) => {
  const {navigation} = props;
  const [data, setData] = useState<GlobleData>();
 
  const [showLoading, setShowLoading] = useState(true);

  const getglobleData = async () => {
    // let url = 'https://covid19.mathdro.id/api';
    let url="https://coronavirus-19-api.herokuapp.com/all";
    let response = await sendGetRequest(url);
    if (response != 'error') {
      setData(response.data);
      setShowLoading(false);
    }
  };

  useEffect(() => {
    getglobleData();
  }, []);


 

  return (
    <HomeScreen
      {...{
        navigation,
        data
      }}
    />
  );
};

export default HomeViewModel;
