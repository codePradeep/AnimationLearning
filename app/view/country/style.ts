import { StyleSheet } from "react-native";

const  styles=StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 20,
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
        fontSize: 20,
        color: 'black',
        fontVariant: ['small-caps'],
      },
      countryButton: {
        padding: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
      },
})

export default styles