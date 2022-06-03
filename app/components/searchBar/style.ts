import { StyleSheet } from "react-native";

const  styles=StyleSheet.create({
    searchContainer:{
        backgroundColor:'white',
        borderRadius:30,
        marginVertical:20,
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1
    },
    searchTextInput:{
        width:"87%",
        paddingLeft:20
    },
    searchIcon:{
        height:20,
        width:20,
        resizeMode:"contain"
    }
})

export default styles