import {Dimensions, StyleSheet} from 'react-native';
import { ScreenColor } from '../../config';

const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
   padding:20,
    backgroundColor:ScreenColor.BACKGROUND_COLOR
    
  },
  animationstyle:{
      left:0,
      right:0,
      top:0,
      bottom:0,
    position: "absolute",
  },
  subContainer:{
      flex:.95,
      
      
      
  },
  confirmCaseContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(1,1,1,0.5)',
    
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom:10,
    borderRadius:20
  },
  headingStyle: {
    fontSize: 28,
    color: 'black',
    fontWeight:"800",
    fontVariant: ['small-caps'],
    alignSelf:"center",
    marginVertical:20,
  },
  titleStyle: {
    fontSize: 19,
    color: 'white',
    fontVariant: ['small-caps'],
  },
  valueStyle: {
    fontSize: 20,
    color: 'white',
    fontVariant: ['small-caps'],
  },
  countryButton: {
    padding: 10,
    backgroundColor: 'rgba(1,1,1,0.5)',
    alignItems: 'center',
  },
});

export default styles;
