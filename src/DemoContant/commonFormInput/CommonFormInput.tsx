import React, { useEffect, useState } from "react";
import {  KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import { EmailValidate, PasswordValidate, UsernameValidation } from "./Validation";


export type ValidationDataType = 'email' | 'username' | 'password' ;

interface CommonFormInputprops{
    KeyboardType:KeyboardTypeOptions | undefined
    PlaceHolder:string
    ValidationType:ValidationDataType
    validationData:(result:boolean)=>void
}
const CommonFormInput=(props:CommonFormInputprops)=>{
    const {KeyboardType,PlaceHolder,ValidationType,validationData}=props

    const [validationText,setValidationText]=useState("")

    const [validation,setvalidation]=useState(false)

    const checkValidation=()=>{
        if (ValidationType=="email"){
            setvalidation(EmailValidate(validationText))
        }
        if (ValidationType=="username"){
            setvalidation(UsernameValidation(validationText))
        }
        if (ValidationType=="password"){
            setvalidation(PasswordValidate(validationText))
        }
    }
    useEffect(() => {
      checkValidation()
      validationData(validation)
    }, [validationText])
    
    return(
        <View style={styles.mainContainer}>
            <TextInput 
            keyboardType={KeyboardType}
            placeholder={PlaceHolder}
            onChangeText={(text:string)=>setValidationText(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})

export default CommonFormInput

