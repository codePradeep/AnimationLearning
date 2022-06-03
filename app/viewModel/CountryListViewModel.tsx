import React, { useEffect, useState } from 'react';
import { NavigationDataProp } from '../models';
import { sendGetRequest } from '../network';
import StateListScreen from '../view/countryList/CountryListScreen';

export interface Country {
  name: string;
  iso2: string;
  iso3: string;
}

export interface RootObject {
  countries: Country[];
}

const CountryListViewModel = (props: NavigationDataProp) => {
  const { navigation } = props;
  const [showLoading, setShowLoading] = useState(true);
  const [flatListData, setFlatListData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getCountryList = async () => {
    let url = 'https://covid19.mathdro.id/api/countries';
    let response = await sendGetRequest(url);
    setFlatListData(response.data.countries);
    setShowLoading(false);
  };

  useEffect(() => {
    getCountryList();
  }, []);

  console.log(flatListData)

  const SearchData = flatListData.filter((data: Country) => data.name.toLowerCase().match(searchText.toLowerCase()),).map((data: Country) => data);
  

  const setSearchTextfunction = (text: string) => {
    setTimeout(() => {
      setSearchText(text)
    }, 500);
  };

  return <StateListScreen {...{
    navigation,
    showLoading,
    SearchData,
    setSearchText:(text: string) => setSearchTextfunction(text),


  }} />;
};

export default CountryListViewModel;
