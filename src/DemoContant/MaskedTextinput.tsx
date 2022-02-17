import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const MaskedTextInput = () => {

  
    const handleTextChange = (value: any) => {
        if (!value) return '';

        value = value.replace(/[^\d]+/g, '');

        let MM = value.substring(0, 2)
        let DD = value.substring(2, 4)

        let DInM = new Date(0, MM, 0).getDate()


        if (MM[0] > 1 && MM[0] < 10) {
            MM = "0".concat(MM[0])
        }

        if (MM > 12) {
            MM = 12
        }
        if (MM == "00") {
            MM = 0 + "1"
        }

        if (DD[0] > 3 && DD[0] < 10) {
            DD = "0".concat(DD[0])
        }

        if (DD == "00") {
            DD = "01"
        }
        if (DD > DInM) {
            DD = DInM
        }

        return (
            MM +
              (value.length > 2 ? '/' : '') +
            DD
        );
    };

    const [newdata, setnewdata] = useState("")


    const changehandler = (text: string) => {
        setnewdata(handleTextChange(text))
    }


    return (
        <View style={styles.Container}>
           <Text style={styles.Text}> Demo For Masked Text Input</Text>
            <TextInput
                style={styles.input}
                maxLength={5}
                placeholder="MM/DD"
                value={newdata}
                onChangeText={(text: string) => {changehandler(text)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems:"center",
         justifyContent:"center",
       
    },
    input: {
       
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        fontSize: 20,
        width: 100,
        textAlign: "center"
    },
    Text:{
      fontSize:22,
      marginVertical:20
    }
})


export default MaskedTextInput