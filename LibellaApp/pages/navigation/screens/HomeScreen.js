import * as React from 'react';
import {View,Text} from 'react-native';

export default function HomeScreen (navigation){
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text OnPress={() => alert ('This is not the "Home" screen.')}
                style={{fontSize:26, fontWeight:'bold'}}

            >
                HomeScreen
            </Text>
        </View>
    );
}

