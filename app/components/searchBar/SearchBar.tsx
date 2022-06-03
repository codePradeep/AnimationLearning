import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../../config';
import styles from './style';

interface SearchBarprops {
  PlaceHolder: string;
  OnChangeText: (Text: string) => void;
  OnPress: () => void;
  Value: string;
}
const SearchBar = (props: SearchBarprops) => {
  const {PlaceHolder, OnChangeText, OnPress, Value} = props;

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchTextInput}
        placeholder={PlaceHolder}
        onChangeText={Text => OnChangeText(Text)}
        defaultValue={Value}
      />
      <TouchableOpacity onPress={OnPress}>
        <Image source={ICONS.SEARCH} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
