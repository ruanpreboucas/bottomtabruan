import * as React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens

import AgendaScreen from './screens/AgendaScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'

//Screen names

const agenda= "Agenda";
const detailsName= "Details";
const settingsName= "Settings";

const Tab = createBottomTabNavigator();

const Tabs =() =>{
    return(
       <NavigationContainer>
       <Tab.Navigator
       tabBarOptions={{
        showLabel:false,
        style:{
            positions:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'white',
            borderRadius:15,
            height:90,
            ...style.shadow
            
        }
    }}
       >
            <Tab.Screen name={agenda} component={AgendaScreen} options={{
                tabBarIcon:({focused}) =>(
                   <View>
                    <Image source={require('../../assets/img/IconAgenda.png')} />
                    <Text>. </Text>
                   </View> 
                )
            }} />
            
            <Tab.Screen name={detailsName} component={DetailsScreen}
                options={{
                    tabBarIcon:({focused}) =>(
                       <View>
                        <Image source={require('../../assets/img/IconP.png')} />
                        <Text>. </Text>
                       </View> 
                    )
                }}
            />
            <Tab.Screen name={settingsName} component={SettingsScreen}/>

       </Tab.Navigator>
       </NavigationContainer>
    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'red',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
    }
})


export default Tabs;

