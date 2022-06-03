import { StyleSheet } from "react-native";
import { APP_SIZES, ScreenColor } from "../../config";

const  styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:ScreenColor.BACKGROUND_COLOR,
        padding:APP_SIZES.MAIN_PADDING
    },
    headingContainer:{
        marginVertical:10,
        alignItems:"center"
    },
    headingText:{
        fontSize:20,
        fontWeight:'900'
    },
    confirmCaseContainer: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      headingStyle: {
        fontSize: 18,
        color: 'black',
        fontVariant: ['small-caps'],
      },
      valueStyle: {
        fontSize: 18,
        color: 'black',
        fontVariant: ['small-caps'],
      },
      countryButton: {
        padding: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
      },
      detailContainer:{
          backgroundColor:"gray",
          padding:10
      },
      renderItemContainer:{
        padding: 20,
        alignItems: "center",
        backgroundColor:"lightgray",
        borderRadius:50,
        marginBottom:10
    }
  
})

export default styles