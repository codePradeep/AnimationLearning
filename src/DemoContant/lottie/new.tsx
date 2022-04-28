import React, { Children } from "react";
import { Text, View } from "react-native";


const Wallet = (props: any) => {
    const { navigation, data } = props

    return (
        <View>
        
        </View>
    )
}

const Newscreen = () => {
    return (
        <View>
            <Text> parent</Text>
            <Wallet 
            // data={<View>
            //         <Text>
            //             hello
            //         </Text>
            //         <Text>
            //             hii
            //         </Text>
            //     </View>}
            >
                <Text>ghj</Text>
            </Wallet>
        </View>
    )
}
export default Newscreen

