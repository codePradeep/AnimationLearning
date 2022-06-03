import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import { StateData } from "../../models/statedata"
import styles from "./style"

interface flatlistRenderItem{
    item:StateData
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    setSelected: React.Dispatch<React.SetStateAction<StateData | undefined>>
}


export const FlatListRenderItems=(props:flatlistRenderItem)=>{
    const {item,setModalVisible,setSelected}=props
    
    return( <TouchableOpacity
    onPress={()=>{setModalVisible(true),setSelected(item)}}
         style={styles.renderItemContainer}>
        <Text style={styles.stateNameStyle} lineBreakMode={"middle"}>{item.provinceState} :</Text>
        <View style={styles.detailContainer}>
            <Text style={styles.valueStyle}>Confirmed : {item.confirmed}</Text>
            <Text style={styles.valueStyle}>Deaths : {item.deaths}</Text>
            <Text style={styles.valueStyle}>active : {item.active}</Text>

        </View>
    </TouchableOpacity>
    )
}