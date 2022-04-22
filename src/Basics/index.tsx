import React, { useState } from 'react';
import { View, Text, Alert, ImageBackgroundBase, ImageBackground, Image, Pressable } from 'react-native';
import ImageMapper from '../Component/ImageMapper/ImageMapper';

const MapperApp = () => {
  
  const [selectedAreaId, setSelectedAreaId] = useState([]);

  return (
    <View style={{ flex: 1, justifyContent:"center",alignItems:"center",}}>
      <ImageMapper
        imgHeight={551}
        imgWidth={244}
        imgSource={{uri:"https://qph.fs.quoracdn.net/main-qimg-b3cf3937c519d328908d3d046eaccbfc.webp"
        }}
        imgMap={RECTANGLE_MAP}
        onPress={(item:any) => {console.log("this is item :",item),Alert.alert(item.name)}}
        containerStyle={{ top: 20 ,bottom:0,right:10 }}
        selectedAreaId={selectedAreaId}
        multiselect
      />
      <Text style={{fontSize:33,color:"black",marginVertical:20}}>Human Body</Text>
    </View>
  );

};

export default MapperApp;

// Maps to Create Clickable Areas
const RECTANGLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'rectangle',
    x2: 120,
    y2: 540,
    x1: 80,
    y1: 500,
    prefill: 'rgba(0,0,0,0.0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'rectangle',
    x2: 165,
    y2: 540,
    x1: 125,
    y1: 500,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'rectangle',
    x2: 120,
    y2: 400,
    x1: 90,
    y1: 370,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'rectangle',
    x2: 155,
    y2: 400,
    x1: 125,
    y1: 370,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'rectangle',
    x2: 165,
    y2: 250,
    x1: 80,
    y1: 175,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'rectangle',
    x2: 70,
    y2: 325,
    x1: 40,
    y1: 250,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'rectangle',
    x2: 205,
    y2: 325,
    x1: 180,
    y1: 250,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '7',
    name: 'Face',
    shape: 'rectangle',
    x2: 145,
    y2: 80,
    x1: 100,
    y1: 40,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
  {
    id: '8',
    name: 'Head',
    shape: 'rectangle',
    x2: 155,
    y2: 40,
    x1: 90,
    y1: 10,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  }, 
  {
    id: '9',
    name: 'Chest',
    shape: 'rectangle',
    x1: 75,
    x2: 170,
    y1: 105,
    y2: 150,
    prefill: 'rgba(0,0,0,0)',
    fill: 'rgba(0,0,0,0)',
  },
];