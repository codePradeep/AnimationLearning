import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {CountryDataType} from '../models';
import {sendGetRequest} from '../network';
import CountryScreen from '../view/country/CountryScreen';

interface Screenprops {
  navigation: any;
}
export default (props: Screenprops) => {
  const {navigation} = props;
  const [data, setData] = useState<CountryDataType>();
  const [flatListData,setFlatListData]=useState();
  const [showLoading, setShowLoading] = useState(true);

  const getglobleData = async () => {
    let url = 'https://covid19.mathdro.id/api/countries/india';
    let response = await sendGetRequest(url);
    setData(response.data);
    setShowLoading(false);
  };
  const getstateData = async () => {
    let url = 'https://covid19.mathdro.id/api/countries/india/deaths';
    let response = await sendGetRequest(url);
    setFlatListData(response.data);
    setShowLoading(false);
  };

  useEffect(() => {
    getglobleData();
    getstateData()
  }, []);

  return <CountryScreen {...{navigation, data, showLoading,flatListData}} />;
};
