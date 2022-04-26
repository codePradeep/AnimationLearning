import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

export default styles