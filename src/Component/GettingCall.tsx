import React from "react";
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CommonButton from "./Button";

interface GettingCallProp{

    hungup:()=>void
    join:()=>void


}

const GettingCall=(props:GettingCallProp)=>{
    const {hungup,join}=props
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{flexDirection:"row",
        margin:10}}>
                <CommonButton onPress={()=>hungup()} iconName={"phone"} style={{backgroundColor:"red",marginRight:20}} />
                <CommonButton onPress={()=>{join(),console.log("==============>")}} iconName={"phone"}style={{backgroundColor:"green"}} />
            </View>

        </SafeAreaView>
    )
}

export default GettingCall

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
    justifyContent:"flex-end",
    alignItems:"center"
    }
})