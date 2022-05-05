import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import database, {firebase} from '@react-native-firebase/database';

const RealtimeDatabse = () => {
  const reference = database().ref('/users');

  //   realtime data chenge updates
  reference.on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });

  // for data set
  const Add = () => {
    database()
      .ref('/users/pradeep')
      .set({
        name: 'Ada Lovelace',
        age: 31,
      })
      .then(() => console.log('Data set.'));
  };
  //update
  const update = () => {
    database()
      .ref('/users/123')
      .update({
        age: 32,
      })
      .then(() => console.log('Data updated.'));
  };
  //delete
  const deletevalue = async () => {
    await database().ref('/users/123').remove();
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>hello This this new basic app</Text>
        </View>
        <Button title="add" onPress={() => Add()} />
        <Button title="update" onPress={() => update()} />
        <Button title="delete" onPress={() => deletevalue()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RealtimeDatabse;
