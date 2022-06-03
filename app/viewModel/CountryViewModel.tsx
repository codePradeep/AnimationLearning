import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {CountryDataType, NavigationDataProp} from '../models';
import {StateData} from '../models/statedata';
import {sendGetRequest} from '../network';
import CountryScreen from '../view/country/CountryScreen';

interface Countryprops{
  navigation:any 
  route:any
}

export default (props: Countryprops) => {

  const { navigation, route } = props
  const { item } = route.params;

 

  const [data, setData] = useState<CountryDataType>();
  const [flatListData, setFlatListData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selected,setSelected]=useState<StateData>()


  let country=item.name
  console.log("==========>",country)

  const getglobleData = async () => {
    let url = `https://covid19.mathdro.id/api/countries/${country}`;
    let response = await sendGetRequest(url);
    setData(response.data);
    setShowLoading(false);
  };

  const getstateData = async () => {
    let url = `https://covid19.mathdro.id/api/countries/${country}/deaths`;
    let response = await sendGetRequest(url);
    setFlatListData(response.data);
    setShowLoading(false);
  };

  useEffect(() => {
    getglobleData();
    getstateData();
  }, []);

  const SearchData =  flatListData.filter((data: StateData) =>
  data.provinceState==null?data.provinceState=="null":
      data.provinceState.toLowerCase().match(searchText.toLowerCase())
    ).map((data: StateData) => data);
  // console.log(searchText)

  const setSearchTextfunction = (text: string) => {
    setTimeout(() => {
      setSearchText(text)
    }, 300);
  };

 
  return (
    <CountryScreen
      {...{
        navigation,
        data,
        showLoading,
        flatListData:SearchData,
        country,
        setSearchText: (text: string) => setSearchTextfunction(text),
        searchPrassed: () => console.log(searchText),
        modalVisible, 
        setModalVisible,
        selected,
        setSelected
      }}
    />
  );
};
