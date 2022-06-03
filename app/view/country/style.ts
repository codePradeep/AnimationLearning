import {StyleSheet} from 'react-native';
import {ScreenColor} from '../../config';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: ScreenColor.BACKGROUND_COLOR,
  },
  globleDataContainer: {
    marginBottom: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  confirmCaseContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: 18,
    color: 'black',
    fontVariant: ['small-caps'],
  },
  stateNameStyle: {
    fontSize: 20,
    color: 'black',
    width: 150,
  },
  valueStyle: {
    fontSize: 20,
    color: 'black',
    fontVariant: ['small-caps'],
  },
  lastUpdateText: {
    fontSize: 18,
    color: 'gray',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  countryButton: {
    padding: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  detailContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTextInput: {
    width: '87%',
    paddingLeft: 20,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  CountryName: {
    fontSize: 22,
    fontWeight: '800',
    alignSelf: 'center',
    marginVertical: 10,
  },
  modalMainContainer: {
    backgroundColor:"rgba(1,1,1,0.3)",
    flex:1,
    
    justifyContent:"center"
  },
  modalSubContainer:{
    backgroundColor: 'lightblue',
    flex:.5,
    margin:20
  },
  closeIcon:{
    margin:20,
    alignSelf:"flex-end"
  },
  modalDataContainer:{
    padding:40,
    alignItems:"center",
    justifyContent:"center"
  },
  dataText:{
    alignSelf:"flex-start",
    fontSize:20,
    color:"black"
  },
  renderItemContainer: {
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
