import * as React from 'react';
import {View,Text} from 'react-native';

export default function PostScreen (navigation){
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text  OnPress={() =>navigation.navigate('Home') }
                style={{fontSize:26, fontWeight:'bold'}}>
               Post
            </Text>
        </View>
    );
}

