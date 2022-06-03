import React from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    Modal,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { CountryDataType } from '../../models';
import styles from './style';
import LottieView from 'lottie-react-native';
import { animation } from '../../config/Animation';
import { ICONS } from '../../config';
import { FlatListRenderItems } from './flatlistRenderItem';
import { SearchBar } from '../../components';
import { StateData } from '../../models/statedata';

interface CountryScreenprops {
    navigation: any;
    data: CountryDataType | undefined;
    showLoading: boolean;
    flatListData: StateData[];
    setSearchText: (text: string) => void;
    searchPrassed: any;
    country: string;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selected: StateData | undefined;
    setSelected: React.Dispatch<React.SetStateAction<StateData | undefined>>;
}
const CountryScreen = (props: CountryScreenprops) => {
    const {
        navigation,
        data,
        country,
        showLoading,
        flatListData,
        setSearchText,
        searchPrassed,
        modalVisible,
        setModalVisible,
        selected,
        setSelected,
    } = props;

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
                    <Text style={styles.CountryName}>{country}</Text>

                    <SearchBar
                        PlaceHolder={'Search State'}
                        OnChangeText={(Text: string) => setSearchText(Text)}
                        OnPress={function (): void {
                            throw new Error('Function not implemented.');
                        }}
                        Value={''}
                    />
                    <View style={styles.globleDataContainer}>
                        <View style={styles.confirmCaseContainer}>
                            <Text style={styles.headingStyle}>Total Confirmed Cases:</Text>
                            <Text style={styles.valueStyle}>{data?.confirmed.value}</Text>
                        </View>
                        <View style={styles.confirmCaseContainer}>
                            <Text style={styles.headingStyle}>Total Deaths Cases:</Text>
                            <Text style={styles.valueStyle}>{data?.deaths.value}</Text>
                        </View>
                    </View>

                    <Text style={styles.lastUpdateText}>{data?.lastUpdate}</Text>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={flatListData}
                        extraData={flatListData}
                        renderItem={({ item, index }) => (
                            <FlatListRenderItems
                                {...{
                                    item,
                                    setModalVisible,
                                    setSelected,
                                }}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ borderBottomWidth: 2, marginVertical: 10 }}></View>
                        )}
                    />
                </View>
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalMainContainer}>
                    <View style={styles.modalSubContainer}>
                        <TouchableOpacity
                            style={styles.closeIcon}
                            onPress={() => setModalVisible(false)}>
                            <Image source={ICONS.CLOSE} style={styles.searchIcon} />
                        </TouchableOpacity>

                        <Text style={styles.CountryName}>{selected?.provinceState}</Text>
                        <View style={styles.modalDataContainer}>
                            <Text style={styles.dataText}>Active: {selected?.active}</Text>
                            <Text style={styles.dataText}>
                                Confirmed: {selected?.confirmed}
                            </Text>
                            <Text style={styles.dataText}>Deaths: {selected?.deaths}</Text>
                            <Text style={styles.dataText}>
                                Incident Rate :{selected?.incidentRate}
                            </Text>
                            <Text style={styles.dataText}>
                                Cases in 28 days : {selected?.cases28Days}
                            </Text>
                            <Text style={styles.dataText}>
                                Deaths in 28 days : {selected?.deaths28Days}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CountryScreen;
