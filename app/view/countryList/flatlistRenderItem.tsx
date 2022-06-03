import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { NavigationScreen, ScreenName } from "../../config";

import styles from "./style"

interface flatlistRenderItem {
    item:{
        name: string;
        iso2: string;
        iso3: string;
      }
    navigation:any
}
export const FlatListRenderItems = (props: flatlistRenderItem) => {
    const { item ,navigation} = props
    return (

    <TouchableOpacity style={styles.renderItemContainer} onPress={()=>navigation.navigate(NavigationScreen.COUNTRY_VIEW_MODEL,{
        item
    })}>
            <Text style={styles.headingText}>{item.name}</Text>
    </TouchableOpacity>
    
)}