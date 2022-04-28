import React, { ValidationMap } from "react";
import { StyleSheet, View } from "react-native";
import CommonFormInput from "./CommonFormInput";

const DemoCommonFormInput=()=>{
    
    return(
        <View style={styles.mainContainer}>
            <CommonFormInput 
                KeyboardType={"default"}
                PlaceHolder={"Enter Your email"}
                ValidationType={"email"}
                validationData={(a: boolean) => console.log(a)} 
                            
             />

        </View>
    )
}

const styles=StyleSheet.create({
mainContainer:{
    flex:1
}
})

export default DemoCommonFormInput

