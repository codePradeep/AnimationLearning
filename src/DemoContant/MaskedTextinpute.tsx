import React, { useState } from "react";
import {  StyleSheet, TextInput, View } from "react-native";

const MaskedTextInput = () => {

    const [inputText, SetinputText] = useState("")


    const handleTextChange = (text: any) => {

        if (!text) {
            return ''
        }
        else{

        text = text.replace(/([A-Z])\w+/g, "")

        let month = text.substring(0, 2)

        let day = text.substring(3, 5)

        let MM = month
        let DD = day

        let DInM= new Date(0, MM, 0).getDate()

        if (MM > 12) {
            MM = 12
        }
        if (MM=="00"){
            MM="01"
        }
        
        if (DD == "00") { 
            day = "01"
        }
        if(DD>DInM){
            DD = DInM
        }

        const data = MM +  (text.length > 1 ? '/' : '') + (DD==DInM? DD:day)
        return data 
    }
    }


    return (
        <View style={styles.Container}>

            <TextInput
                style={styles.input}
                placeholder="MM/DD"
                value={inputText}
                onChangeText={(text: any) => SetinputText(handleTextChange(text))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        fontSize: 20,
        width: 100,
        textAlign: "center"

    }
})


export default MaskedTextInput