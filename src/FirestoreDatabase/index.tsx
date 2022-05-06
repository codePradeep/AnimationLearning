import React from "react";
import { Button, Text, View } from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';

export default () => {

    const usersCollection = firestore().collection('Users');



    //set or add 
    const add = async () => {
        await firebase.firestore().collection('users').doc('alovelace').set({
            name: 'Ada Lovelace',
            age: 30,
        });
        console.log("success")
    }

    //get the data
    const read = async () => {
        const userDocument = firestore().collection('Users').doc('ABC').onSnapshot((data) => (console.log("databse data==>", data.data())));
        console.log(userDocument)
    }

    //update data 
    const update = () => {
        firestore()
            .collection('Users')
            .doc('ABC')
            .update({
                age: 31,
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    //DELETE DATA
    const deletedata=()=>{
        firestore()
        .collection('Users')
        .doc('ABC')
        .delete()
        .then(() => {
          console.log('User deleted!');
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Firestore Databse Demo</Text>
            <Button title="Create" onPress={() => add()} />
            <Button title="read" onPress={() => read()} />
            <Button title="update" onPress={() => update()} />
            <Button title="Delete" onPress={()=>deletedata()} />


        </View>
    )
}



