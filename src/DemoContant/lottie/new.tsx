import React from "react";
import { Text, View } from "react-native";


const Wallet = (props: any) => {
    const { navigation, children } = props
    console.log(props)

    return (
        <View>
            {props.children}
        </View>
    )
}

const Newscreen = () => {
    return (
        <View>
            <Text> parent</Text>
            <Wallet>
                <Text>ghj</Text>
                <Text>Pradeep</Text>
            </Wallet>
        </View>
    )
}
export default Newscreen

