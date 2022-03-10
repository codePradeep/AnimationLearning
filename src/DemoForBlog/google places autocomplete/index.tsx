import axios from "axios";
import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

const GoogleAutoComplete = () => {
    const API_KEY = "AIzaSyD907Ej8YHUdjWWqhkW76sT-ALJzU0btqY"

    const [searchkeyword, setsearchkeyword] = useState("")
    const [state, setState] = useState<any>({
        searchResults: [],
        isShowingResults: false,
    })

    console.log(state.searchResults.map((a:any)=>a.description))
    const searchLocation = async (text: string) => {
        setsearchkeyword(text)
        axios
            .request({
                method: 'post',
                url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${searchkeyword}`,
            })
            .then((response) => {
                console.log(response.data);
                setState({
                    searchResults: response.data.predictions,
                    isShowingResults: true,
                });
            })
            .catch((e) => {
                console.log(e.response);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Search for an address"
                placeholderTextColor="#000"
                style={styles.searchBox}
                onChangeText={(text) => searchLocation(text)}
                value={searchkeyword}
            />
            {
                state.isShowingResults && (
                    <FlatList
                        data={state.searchResults}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity

                                //   onPress={() => setState({...state,searchKeyword:item.description})}
                                >
                                    <Text>{item.description}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => item + index.toString()}
                    // style={styles.searchResultsContainer}  
                    />
                )
            }
        </SafeAreaView>
    )
}

export default GoogleAutoComplete

